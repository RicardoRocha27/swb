import { CustomLocale } from "@/types";
import Container from "../container";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../ui/accordion";
import { getDictionary } from "@/lib/get-dictionary";

const Faqs = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const faqs = dictionary.faqs;

  return (
    <div className="py-32">
      <Container>
        <h1 className="text-xl font-bold pb-24">{faqs.title}</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start">
              Como é que o Gyokeres é tão máquina?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              Porque é que o Paulinho ainda joga no Sporting?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              Porque é que o Esgaio ainda não foi para o City por 110M?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faqs;
