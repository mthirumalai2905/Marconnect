import { ContactForm } from "./contact-form";

type Props = {
  kicker?: string;
  title?: string;
  text?: string;
  image?: string;
  alt?: string;
};

export function ContactClose({
  kicker = "Bring them home",
  title = "Find them while it still matters.",
  text = "Tell us about the vessel. We’ll talk about how the people on it can be found.",
  image = "/img/step-reach.jpg",
  alt = "A rescuer gripping the hand of a person in the water",
}: Props) {
  return (
    <section className="close" id="contact">
      <div className="close-media">
        <img src={image} alt={alt} />
      </div>
      <div className="close-copy">
        <p className="kicker" style={{ color: "#fff" }}>{kicker}</p>
        <h2 className="h-lg">{title}</h2>
        <p>{text}</p>
        <ContactForm />
      </div>
    </section>
  );
}
