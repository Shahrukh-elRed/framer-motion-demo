import PricingContent from "./PricingContent";
import FlyoutLink from "./FlyoutLink";

const FlyoutLinkExample = () => {
  return (
    <div className="flex h-[700px] justify-center pt-48 bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  );
};

export default FlyoutLinkExample;
