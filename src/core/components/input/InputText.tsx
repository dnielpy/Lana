import { FC } from "react";
import { InputType } from "../../../sections/home/server/types/dynamic";


type InputProps = {
    placeholder: string
    variant: InputType
}

const InputText: FC<InputProps> = ({
    variant,
    placeholder,
}) => {

    const getVariant = (variant: InputType) => {
        switch (variant) {
            case "TEXT":
                return "px-3 py-2 border border-transparent bg-[#2C2C2C] rounded-md w-full text-white ";
            case "DATE":
                return "px-3 py-2 border border-gray-500 rounded-sm text-black ";
            default:
                break;
        }
    }

    return (
        <input placeholder={placeholder} className={getVariant(variant)}></input>
    )
}

export default InputText;