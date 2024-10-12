import Section from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section>
      <h1 className="text-3xl font-black text-center">
        Frequently Asked Questions
      </h1>
      <br />
      <br />
      <br />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            How can I place an order using the AI chatbot?
          </AccordionTrigger>
          <AccordionContent>
            Learn how to order your favorite burger directly through our AI
            chatbot.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            Can I customize my burger when ordering through the chatbot?
          </AccordionTrigger>
          <AccordionContent>
            Yes, You can customize your burger with your choice of toppings and
            condiments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            What are your store hours?
          </AccordionTrigger>
          <AccordionContent>
            Mon-Fri: 9:00 AM - 5:00 PM & Sat-Sun: 10:00 AM - 2:00 PM
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
}
