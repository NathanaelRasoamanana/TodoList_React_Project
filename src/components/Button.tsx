import Button from '@mui/material/Button';
import type {ButtonProps} from '../types/ButtonProps';

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