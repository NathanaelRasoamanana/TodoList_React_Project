import Button from '@mui/material/Button';

type ButtonProps = {
    type:"submit"|"button"|"reset"
    variant?:"contained"|"outlined"|"text"
    onClick? : ()=>void;
    buttonText? : string;
    txtColor? :string;
    bgcolor? : string;
};

export default function Bouton({type, variant, onClick, buttonText, txtColor, bgcolor}:ButtonProps){
    return(
        <>           
            <Button 
                type={type}
                variant={variant} 
                onClick={onClick} 
                size="small"
                sx={{
                    color: txtColor,
                    bgcolor: bgcolor
                    }}>
                {buttonText}
            </Button>
        </>
    )
}