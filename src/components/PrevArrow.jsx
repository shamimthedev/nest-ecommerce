import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={"h-[40px] w-[40px] rounded-full flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute top-1/2 left-5 -translate-y-1/2 z-10 cursor-pointer shadow-md hover:text-white hover:bg-greeny"}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
};

export default PrevArrow;