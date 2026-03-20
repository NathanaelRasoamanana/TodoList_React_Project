type ButtonProps = {
    onClick : ()=>void;
    buttonText : string
};

export default function Button({onClick, buttonText}:ButtonProps){
    return(
        <>
            <button onClick={onClick}>
                {buttonText}
            </button>
        </>
    )
}