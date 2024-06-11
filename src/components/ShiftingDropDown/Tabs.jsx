import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tab from "./Tab";
import Content from "./Content";

const Tabs = ({ tabsData }) => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {tabsData.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && (
          <Content dir={dir} selected={selected} tabsData={tabsData} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tabs;
