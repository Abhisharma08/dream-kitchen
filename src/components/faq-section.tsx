import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "How long does it take to complete home interiors?",
      answer: "Typically 4–8 weeks, depending on scope and customisations."
    },
    {
      question: "Can I choose materials and colours?",
      answer: "Absolutely! We offer full customisation for all rooms."
    },
    {
      question: "Do you provide design consultations?",
      answer: "Yes, our expert team offers free site visits and 3D layout planning."
    },
    {
      question: "Is EMI or phased payment available?",
      answer: "Yes, flexible payment options are available for your convenience."
    },
  ]
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-body text-primary sm:text-4xl">FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">{`Q${index+1}: ${faq.question}`}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  