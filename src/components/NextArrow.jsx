import { MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className={"h-[40px] w-[40px] rounded-full shadow-md flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer hover:text-white hover:bg-greeny"}
      onClick={onClick}
    >
      <MdKeyboardArrowRight/>
    </div>
  );
};

export default NextArrow;