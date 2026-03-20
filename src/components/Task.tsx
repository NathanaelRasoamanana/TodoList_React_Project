import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Bouton from "../components/Button";



export default function Task({value,date,time,onDone,onRemove}:{
    value:string,
    date:string, 
    time:string,
    onDone:()=>void,
    onRemove:()=>void,
    }){    

    return (
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            }}>
                <CardContent sx={{ height: '50%' }}>
                    <Typography variant="h5" component="div">
                        {value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date} | {time}              
                    </Typography>
                </CardContent>
            </Box>
            
            <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& button': { p: 0.5, m: 2 },
                }}
                >
                <Bouton onClick={onDone} buttonText="done" />
                <Bouton onClick={onRemove} buttonText="remove" />
            </Box>
        </>
    )   
}    