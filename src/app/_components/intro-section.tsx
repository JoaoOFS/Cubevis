'use client';
import { track } from '@vercel/analytics';

import { ModeToggle } from './mode-toggle';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function IntroSection() {
  return (
    <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
        aria-hidden='true'
      >
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#10B981' />
            <stop offset='1' stopColor='#059669' />
          </radialGradient>
        </defs>
      </svg>
      <div className='container flex max-w-[64rem] flex-col items-center text-center gap-4'>
        <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
          🌱 Tecnologia Sustentável
          <ModeToggle />
        </span>
        <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
          <span className='text-green-600'>Cubevis</span>
          <br />
          Incubadora de <span className='text-green-600'>Tecnologia Verde</span>
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Desenvolvemos projetos tecnológicos inovadores voltados para sustentabilidade. 
          Alinhamos tecnologia de ponta a soluções sustentáveis, ajudando empresas a 
          otimizar processos e reduzir desperdícios.
        </p>
        <div className='space-x-4'>
          <a
            href='#investment'
            className='bg-green-600 hover:bg-green-700 py-2 px-2 text-sm text-white rounded shadow-lg font-bold transition-colors'
            onClick={() => {
              track('enrollment', { location: 'intro' });
            }}
          >
            Conhecer Projetos
          </a>
          <a
            href='#feature'
            className='border-2 border-gray-300 text-white hover:border-green-600 hover:text-green-600 py-2 px-2 text-sm rounded font-bold transition-all duration-200'
            onClick={() => {
              track('features');
            }}
          >
            Nossa Missão
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
