import Container from "../container";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";

const Faqs = () => {
  return (
    <div className="py-32">
      <Container>
        <h1 className="text-xl font-bold pb-24">
          Frequently Asked Questions (FAQs)
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Como é que o Gyokeres é tão máquina?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Porque é que o Paulinho ainda joga no Sporting?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Porque é que o Esgaio ainda não foi para o City por 110M?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faqs;
