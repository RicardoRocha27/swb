import { CustomLocale } from "@/types";
import Container from "../container";
import ContactsForm from "./contacts-form";
import ContactsInfo from "./contacts-info";
import { getDictionary } from "@/lib/get-dictionary";

const Contacts = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const contacts = dictionary.contacts;

  return (
    <div className="bg-foreground relative" id="contacts">
      <Container>
        <div className="hidden md:flex flex-col md:flex-row md:space-x-28">
          <ContactsForm
            heading={contacts.heading}
            inputs={contacts.form.inputs}
            buttonLabel={contacts.form.buttonLabel}
            messageError={contacts.form["message-error"]}
            toasts={contacts.form.toasts}
          />
          <ContactsInfo heading={contacts.subHeading} city={contacts.city} />
        </div>
      </Container>
      <div className="flex flex-col md:hidden space-y-28">
        <Container>
          <ContactsForm
            heading={contacts.heading}
            inputs={contacts.form.inputs}
            buttonLabel={contacts.form.buttonLabel}
            messageError={contacts.form["message-error"]}
            toasts={contacts.form.toasts}
          />
        </Container>
        <div className="bg-[#463F50] w-full h-full pb-64 md:hidden relative">
          <Container>
            <ContactsInfo heading={contacts.subHeading} city={contacts.city} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
