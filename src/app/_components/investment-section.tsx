import { Check } from 'lucide-react';

function InvestmentSection() {
  return (
    <section
      id='investment'
      className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          <span className='text-green-600'>Nossos Serviços</span>
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Transforme sua empresa com soluções tecnológicas sustentáveis. 
          Veja os benefícios de trabalhar com a Cubevis.
        </p>
      </div>

      <div className='grid w-full border rounded-lg items-start gap-10 p-10 md:grid-cols-[1fr_200px]'>
        <div className='grid gap-6'>
          <h3 className='text-xl font-bold sm:text-2xl'>O que oferecemos</h3>
          <ul className='grid gap-3 text-sm text-muted-foreground sm:grid-cols-2'>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Desenvolvimento de projetos sustentáveis
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Consultoria em tecnologia verde
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Monitoramento de impacto ambiental
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Soluções IoT para eficiência energética
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Suporte técnico especializado
            </li>
            <li className='flex items-center'>
              <Check className='mr-2 h-4 w-4' /> Relatórios de sustentabilidade
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 text-center'>
          <div className='space-y-2'>
            <h4 className='font-bold text-lg'>
              Projetos sob medida
            </h4>
            <p className='text-sm text-muted-foreground'>
              Orçamento personalizado conforme suas necessidades
            </p>
          </div>
          <a
            href='mailto:contato@cubevis.com'
            className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;
