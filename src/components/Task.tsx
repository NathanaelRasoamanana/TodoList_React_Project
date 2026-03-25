import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { TaskProps } from '../types/TaskProps';

export default function Task({title,date,description,done,late}:TaskProps){
    return (
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
            }}>
                <CardContent sx={{ height: '50%'}}>
                    <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ textDecoration: done? "line-through":"none"}}
                    >
                        {title}
                        {late && !done && (
                            <span style={{ color: "red"}}>
                                (en retard)
                            </span>
                        )}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"                         
                        sx={{ textDecoration: done? "line-through":"none"}}
                    >
                        {date}           
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ textDecoration: done? "line-through":"none"}}
                    >
                        {description}              
                    </Typography>
                </CardContent>
            </Box>
        </>
    )   
}    