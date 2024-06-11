import Tabs from "./Tabs";
import { tabsData } from "./tabsData";

const ShiftingDropDown = () => {
  return (
    <>
      <div className="h-[40vh] bg-neutral-950" />
      <div className="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
        <Tabs tabsData={tabsData} />
      </div>
    </>
  );
};

export default ShiftingDropDown;
