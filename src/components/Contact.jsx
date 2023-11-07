import { contacts } from "../data";

const Contact = () => {
  return (
    <section id="contact" className=" py-20 px-2 bg-white | sm:px-4 | md:py-28">
      <div className="flex flex-col gap-20">
        <h2 className="font-bold text-3xl text-center">Contact</h2>
        <div className="flex flex-col items-center gap-8 w-full justify-between container mx-auto | md:flex-row md:gap-0 | lg:max-w-4xl">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 | md:flex-row md:text-left"
            >
              <div className="h-10 w-10">{contact.icon}</div>
              <div>
                <h3 className="font-bold text-xl">{contact.title}</h3>
                {contact.link ? (
                  <a href={contact.link}>{contact.username}</a>
                ) : (
                  <p className="font-medium">{contact.username}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
