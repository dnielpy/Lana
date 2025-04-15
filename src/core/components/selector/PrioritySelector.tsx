import { FC, useState } from "react";

const PrioritySelector: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [priority, setPriority] = useState("🖖🏻 Priority")
    const options = ["🔥 High", "🤞🏻 Medium", "💨 Low"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left min-w-[120px]">
            <button
                onClick={toggleDropdown}
                className="w-full py-2 bg-[#2C2C2C] text-white rounded-md"
            >
                {priority}
            </button>
            {isOpen && (
                <ul className="absolute mt-2 w-full border border-transparent rounded-2xl bg-[#2C2C2C] text-white shadow-lg">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer"
                            onClick={() => {
                                setPriority(option);
                                console.log(`Selected: ${option}`);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PrioritySelector;