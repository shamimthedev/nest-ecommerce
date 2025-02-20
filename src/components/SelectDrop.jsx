import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";


const SelectDrop = ({ data, placeholder, onSelect }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenSelect(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeSelect = (index, item) => {
        setSelectedIndex(index);
        setSelectedItem(item); // Fix: Use `item` instead of `name`
        setIsOpenSelect(false);
        if (onSelect) onSelect(item);
    };

    return (
        <div
            ref={dropdownRef}
            className="relative flex items-center gap-2 px-2 xl:px-5 text-[#253D4E] text-xs xl:text-sm font-bold cursor-pointer"
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            aria-expanded={isOpenSelect}
        >
            <span>{selectedItem}</span> {/* Selected item now updates correctly */}
            <IoIosArrowDown className="text-[#7E7E7E]" />

            {isOpenSelect && (
                <div className="absolute top-full left-0 p-3 bg-white shadow-lg border border-[#ECECEC] w-[250px] h-auto z-50 mt-2">
                    <input
                        className="w-full h-[40px] px-3 text-[#B6B6B6] text-sm rounded-sm border border-[#ECECEC] outline-none"
                        type="text"
                        placeholder="Search categories..."
                    />
                    <ul className="w-full mt-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                        {data.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => closeSelect(index, item)} // ✅ Fixed the missing `name`
                                className={`p-2 cursor-pointer rounded-sm hover:bg-greeny hover:text-white ${selectedIndex === index ? "bg-greeny text-white" : ""
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectDrop;
