import type { ButtonProps } from "../types/ButtonProps";

export default function Button({onClick, buttonText}:ButtonProps){
    return(
        <>
            <button onClick={onClick}>
                {buttonText}
            </button>
        </>
    )
}