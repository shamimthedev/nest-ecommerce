import { MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"h-[45px] w-[45px] rounded-full 2xl:mr-4 flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute top-1/2 right-20 -translate-y-1/2 cursor-pointer hover:text-white hover:bg-greeny"}
      onClick={onClick}
    >
      <MdKeyboardArrowRight/>
    </div>
  );
};

export default NextArrow;