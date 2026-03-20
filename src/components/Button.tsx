import Button from '@mui/material/Button';

type ButtonProps = {
    onClick : ()=>void;
    buttonText : string;
};

export default function Bouton({ onClick, buttonText}:ButtonProps){
    return(
        <>           
            <Button variant="outlined" onClick={onClick} size="small">
                {buttonText}
            </Button>
        </>
    )
}

