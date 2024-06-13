import "./bubble-text.css";

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Bubbbbbbbble text".split("").map((child, index) => (
        <span className="bubble-text-hover-animation" key={index}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
