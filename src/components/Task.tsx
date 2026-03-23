import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { TaskProps } from '../types/TaskProps';

export default function Task({title,description,date}:TaskProps){
    return (
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            }}>
                <CardContent sx={{ height: '50%' }}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {date}             
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}              
                    </Typography>
                </CardContent>
            </Box>
        </>
    )   
}    