import { HiArrowLeft } from "react-icons/hi";

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-8 m-auto h-8 w-8 flex items-center justify-center rounded-full border-[1px] border-skyText text-skyText hover:bg-skyText hover:text-white duration-200"
      aria-label="Next"
    >
      <HiArrowLeft className="text-base" />
    </button>
  );
};

export default CustomLeftArrow;