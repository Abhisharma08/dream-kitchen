import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "Difference between single vs double-glazed?",
      answer: "Single-glazed: Offers transparency and affordability. DGU: Double-pane with insulated air/gas layer—superior soundproofing, energy efficiency, and condensation control."
    },
    {
      question: "Is it easy to maintain?",
      answer: "Yes—glass requires simple wipes; aluminium resists corrosion. DGU helps prevent moisture on surfaces."
    },
    {
      question: "Can I match my office's interior branding?",
      answer: "Absolutely—choose from frosted, tinted, or clear glass, plus custom frame finishes to complement your interiors."
    },
    {
      question: "How quick is installation?",
      answer: "Modular, prefabricated profiles and concealed fittings allow swift, low-impact installations."
    },
  ]
  
  export default function FaqSection() {
    return (
      <section id="faq" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">FAQs</h2>
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
  