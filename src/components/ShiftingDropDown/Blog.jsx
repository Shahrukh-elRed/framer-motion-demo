import { FiArrowRight } from "react-icons/fi";
import blogImage1 from "../../assets/images/M_image.png";
import blogImage2 from "../../assets/images/kunernetes.png";

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <span className="cursor-pointer">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src={blogImage1}
            alt=""
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </span>
        <span className="cursor-pointer">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src={blogImage2}
            alt=""
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </span>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Blog;
