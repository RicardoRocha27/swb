import Container from "../container";
import ContactsForm from "./contacts-form";
import ContactsInfo from "./contacts-info";

const Contacts = () => {
  return (
    <div className="bg-foreground relative" id="contacts">
      <Container>
        <div className="hidden md:flex flex-col md:flex-row md:space-x-28">
          <ContactsForm />
          <ContactsInfo />
        </div>
      </Container>
      <div className="flex flex-col md:hidden space-y-28">
        <Container>
          <ContactsForm />
        </Container>
        <div className="bg-[#463F50] w-full h-full pb-64 md:hidden relative">
          <Container>
            <ContactsInfo />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
