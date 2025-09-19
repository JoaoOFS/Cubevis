'use server';

export async function saveLead({
  name,
  email,
  phoneNumber,
}: {
  name: string;
  email: string;
  phoneNumber: string;
}) {
  try {
    const { Pool } = await import('pg');
    
    const pool = new Pool({
      connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL,
    });

    const client = await pool.connect();
    
    try {
      await client.query(
        'INSERT INTO PreEnrollment (name, email, phoneNumber) VALUES ($1, $2, $3)',
        [name, email, phoneNumber]
      );
      console.log('Lead salvo com sucesso:', { name, email, phoneNumber });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Erro ao salvar lead:', error);
    throw error;
  }
}
