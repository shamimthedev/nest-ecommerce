import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"h-[45px] w-[45px] 2xl:ml-4 rounded-full flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute top-1/2 left-20 -translate-y-1/2 z-10 cursor-pointer hover:text-white hover:bg-greeny"}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
};

export default PrevArrow;