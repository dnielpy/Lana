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
            case "DESCRIPTION":
                return "px-3 py-2 border border-transparent bg-[#2C2C2C] rounded-md w-full text-white resize-none overflow-y-hidden "; // Se agrega overflow-y-hidden
            case "DATE":
                return "px-3 py-2 border border-gray-500 rounded-sm text-black ";
            default:
                throw new Error(`Unsupported variant: ${variant}`);
        }
    };

    return (
        <>
            {variant === "TEXT" && (
                <input placeholder={placeholder} className={getVariant(variant)} />
            )}
            {variant === "DESCRIPTION" && (
                <textarea
                    placeholder={placeholder}
                    className={getVariant(variant)}
                    rows={4}
                />
            )}
        </>
    );
};

export default InputText;