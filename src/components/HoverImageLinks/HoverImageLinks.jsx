import Link from "./Link";

const HoverImageLinks = () => {
  return (
    <>
      <div className="h-[30vh] bg-neutral-950" />

      <section className="bg-neutral-950 p-4 md:p-8">
        <div className="mx-auto max-w-5xl">
          <Link
            heading="About"
            subheading="Learn what we do here"
            imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Link
            heading="Clients"
            subheading="We work with great people"
            imgSrc="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Link
            heading="Portfolio"
            subheading="Our work speaks for itself"
            imgSrc="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Link
            heading="Careers"
            subheading="We want cool people"
            imgSrc="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Link
            heading="Fun"
            subheading="Incase you're bored"
            imgSrc="https://images.unsplash.com/photo-1619537901863-9807597cb0b2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>

      <div className="h-[20vh] bg-neutral-950 " />
    </>
  );
};

export default HoverImageLinks;
