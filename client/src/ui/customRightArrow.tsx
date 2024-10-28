import { HiArrowRight } from "react-icons/hi";

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-8 m-auto h-8 w-8 flex items-center justify-center rounded-full border-[1px] border-skyText text-skyText hover:bg-skyText hover:text-white duration-200 "
      aria-label="Next"
    >
      <HiArrowRight className="text-base" />
    </button>
  );
};

export default CustomRightArrow;