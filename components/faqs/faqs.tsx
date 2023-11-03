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
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start">
              How can I check on the progress of my project?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              Don&apos;t worry, we share our files with you so you can check it
              whenever you desire!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              Is there any way for the client to be able to change the website
              after the delivery?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              Of course, no website is completely static! Normally for the post
              delivery part we agree with the client the terms if there is the
              need to change anything later down the line.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              What is the delivery time for a project?
            </AccordionTrigger>
            <AccordionContent className="text-start">
              It broadly depends on the project and if it is a design, a
              development project or maybe both.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faqs;
