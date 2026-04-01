export type ButtonProps = {
    type:"submit"|"button"|"reset"
    variant?:"contained"|"outlined"|"text"
    onClick? : ()=>void;
    buttonText? : string;
    txtColor? :string;
    bgcolor? : string;
};