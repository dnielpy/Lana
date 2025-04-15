import { FC } from "react";
import { ButtonType } from "../../sections/home/server/types/dynamic";

type ButtonProps = {
    text: string,
    url: string,
    variant: ButtonType
}

const Button: FC<ButtonProps> = ({
    text,
    url,
    variant
}) => {
    const getVariant = (variant: ButtonType) => {
        switch (variant) {
            case "PRIMARY":
                return "text-black bg-white font-normal border px-4 py-2 rounded-md transform transition-transform duration-300 hover:scale-103";
            case "SECONDARY":
                return "text-white bg-transparent font-normal border border-transparent px-4 py-2 rounded-md transform transition-transform duration-300 hover:scale-103"; 
            default:
                return "";
        }
    };

    return (
        <button className={getVariant(variant)}>{text}</button>
    );
}


export default Button;