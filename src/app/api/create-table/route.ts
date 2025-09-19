import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
      return NextResponse.json({ 
        error: 'Variáveis de ambiente do banco de dados não configuradas',
        message: 'Configure POSTGRES_URL ou DATABASE_URL no arquivo .env.local'
      }, { status: 500 });
    }

    const { Pool } = await import('pg');

    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    });

    const client = await pool.connect();
    
    try {
      await client.query('SELECT 1 as test');

      const checkTable = await client.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'preenrollment'
        );
      `);

      if (checkTable.rows[0].exists) {
        return NextResponse.json({ 
          message: 'Tabela PreEnrollment já existe',
          exists: true 
        }, { status: 200 });
      }

      const result = await client.query(`
        CREATE TABLE PreEnrollment (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          phoneNumber VARCHAR(25),
          enrollment VARCHAR(5),
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      return NextResponse.json({ 
        message: 'Tabela PreEnrollment criada com sucesso',
        result: result.rows 
      }, { status: 200 });

    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Erro ao criar tabela:', error);

    let errorMessage = 'Erro desconhecido';
    let errorDetails = error;
    
    if (error instanceof Error) {
      errorMessage = error.message;

      if (error.message.includes('connect') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Não foi possível conectar ao banco de dados. Verifique as credenciais.';
      }

      if (error.message.includes('authentication') || error.message.includes('password')) {
        errorMessage = 'Erro de autenticação. Verifique usuário e senha do banco de dados.';
      }
    }

    return NextResponse.json({ 
      error: errorMessage,
      details: errorDetails,
      environment: {
        hasPostgresUrl: !!process.env.POSTGRES_URL,
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV
      }
    }, { status: 500 });
  }
}
