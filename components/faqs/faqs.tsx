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
        <h2 className="text-xl font-bold pb-24">{faqs.title}</h2>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(faqs.questions).map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-start">
                {item[1].question}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {item[1].answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faqs;
