import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <section className="py-20 bg-brand-muted">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-text-muted">
            Tire suas dúvidas e veja por que somos a escolha certa.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-xl shadow-sm p-2"
        >
          <AccordionItem value="item-1" className="border-b-0 px-4">
            <AccordionTrigger className="text-lg font-semibold text-text hover:text-brand hover:no-underline py-4">
              Já uso outra marca de genética, por que mudar?
            </AccordionTrigger>
            <AccordionContent className="text-text-muted leading-relaxed pb-4">
              Não pedimos exclusividade, pedimos resultado. A Cogent Brasil
              possui touros líderes em fertilidade e sólidos. Nosso convite é
              para você comparar os dados: faça um teste em parte do rebanho ou
              use no gado de reposição e veja a diferença na taxa de concepção e
              na qualidade das bezerras.
            </AccordionContent>
          </AccordionItem>
          <div className="h-px bg-gray-100 mx-4"></div>
          <AccordionItem value="item-2" className="border-b-0 px-4">
            <AccordionTrigger className="text-lg font-semibold text-text hover:text-brand hover:no-underline py-4">
              Genética de ponta não é muito caro?
            </AccordionTrigger>
            <AccordionContent className="text-text-muted leading-relaxed pb-4">
              O caro é a vaca que não emprenha ou que produz pouco. O
              investimento em sêmen representa menos de 2% do custo total da
              produção, mas define 100% do futuro do seu rebanho. Temos planos e
              condições que se pagam com o próprio aumento de produtividade e
              redução de descartes involuntários.
            </AccordionContent>
          </AccordionItem>
          <div className="h-px bg-gray-100 mx-4"></div>
          <AccordionItem value="item-3" className="border-b-0 px-4">
            <AccordionTrigger className="text-lg font-semibold text-text hover:text-brand hover:no-underline py-4">
              Meu problema hoje é falta de pasto, como o JIGGS ajuda?
            </AccordionTrigger>
            <AccordionContent className="text-text-muted leading-relaxed pb-4">
              O JIGGS é a solução ideal para quem busca alta lotação e custo
              baixo. Ele é resistente, responde rápido à adubação e tem ótimo
              valor nutricional. Nossa consultoria não vende apenas a muda,
              entregamos o protocolo de plantio e manejo para você ter "comida
              no cocho" (ou melhor, no pasto) o ano todo, reduzindo
              drasticamente o uso de ração e silagem cara.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
