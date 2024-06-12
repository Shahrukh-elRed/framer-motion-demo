import Card from "./Card";

const SquishyCard = () => {
  return (
    <section className="flex items-center h-screen bg-neutral-900 px-4 py-12">
      <div className="mx-auto w-fit mt-[10vh]">
        <Card />
      </div>
    </section>
  );
};

export default SquishyCard;
