import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FaqSection() {
  return (
    <section
      id='faq'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          <span className='text-green-600'>Perguntas Frequentes</span>
        </h2>
      </div>
      <div className='mx-auto text-center md:max-w-[58rem]'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Como contratar os serviços da Cubevis?</AccordionTrigger>
            <AccordionContent className='text-left'>
              <p>
                Entre em contato conosco através do formulário de contato ou 
                clique no botão <span className='font-bold'>Conhecer Projetos</span> 
                para agendar uma consultoria gratuita. Nossa equipe analisará suas 
                necessidades e apresentará uma proposta personalizada.
              </p>
              <p>
                Oferecemos consultoria inicial gratuita para entender melhor 
                como podemos ajudar sua empresa com soluções tecnológicas sustentáveis.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Para quem são os serviços da Cubevis?</AccordionTrigger>
            <AccordionContent className='text-left'>
              <p>
                Empresas que buscam soluções tecnológicas sustentáveis
              </p>
              <p>Organizações que querem reduzir seu impacto ambiental</p>
              <p>
                Empresas que desejam otimizar processos e melhorar eficiência energética
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Qual o prazo de entrega dos projetos?
            </AccordionTrigger>
            <AccordionContent className='text-left'>
              O prazo varia conforme a complexidade do projeto. Projetos simples podem ser entregues em 2-4 semanas, enquanto projetos mais complexos podem levar 2-6 meses. Sempre apresentamos um cronograma detalhado na proposta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Vocês oferecem suporte pós-entrega?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Sim. Oferecemos suporte técnico especializado por 3 meses após a entrega do projeto, incluindo treinamento da equipe e manutenção preventiva.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Como funciona o acompanhamento do projeto?</AccordionTrigger>
            <AccordionContent className='text-left'>
              Mantemos comunicação constante através de reuniões semanais, relatórios de progresso e acesso a uma plataforma de acompanhamento onde você pode visualizar o desenvolvimento em tempo real.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FaqSection;
