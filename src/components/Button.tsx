import Button from '@mui/material/Button';

type ButtonProps = {
    type?:string
    variant:"contained"|"outlined"|"text"
    onClick? : ()=>void;
    buttonText? : string;
};

export default function Bouton({variant, onClick, buttonText}:ButtonProps){
    return(
        <>           
            <Button 
                variant={variant} onClick={onClick} size="small">
                {buttonText}
            </Button>
        </>
    )
}