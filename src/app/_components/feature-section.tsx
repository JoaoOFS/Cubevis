'use client';


function FeatureSection() {
  return (
    <section
      id='feature'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          <span className='text-green-600'>🌱 Nossas Soluções 🌱</span>
        </h2>
        <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
          Desenvolvemos projetos tecnológicos inovadores que combinam eficiência 
          e sustentabilidade para um futuro melhor.
        </p>
      </div>

      <div className='mx-auto grid justify-center gap-8 md:max-w-[64rem] md:grid-cols-3'>
        <div className='text-center space-y-4'>
          <div className='mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center'>
            <svg viewBox='0 0 24 24' className='h-8 w-8 text-green-600 fill-current'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/>
            </svg>
          </div>
          <h3 className='text-xl font-semibold'>Monitoramento IoT</h3>
          <p className='text-muted-foreground'>
            Sistemas inteligentes para monitoramento em tempo real
          </p>
        </div>

        <div className='text-center space-y-4'>
          <div className='mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center'>
            <svg viewBox='0 0 24 24' className='h-8 w-8 text-green-600 fill-current'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
            </svg>
          </div>
          <h3 className='text-xl font-semibold'>Eficiência Energética</h3>
          <p className='text-muted-foreground'>
            Otimização de processos e redução de desperdícios
          </p>
        </div>

        <div className='text-center space-y-4'>
          <div className='mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center'>
            <svg viewBox='0 0 24 24' className='h-8 w-8 text-green-600 fill-current'>
              <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
            </svg>
          </div>
          <h3 className='text-xl font-semibold'>Impacto Sustentável</h3>
          <p className='text-muted-foreground'>
            Soluções que geram impacto positivo no meio ambiente
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
