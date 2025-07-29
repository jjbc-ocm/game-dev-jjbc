import { Work } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

interface IProps {
    responsibilities: string[];
}

export const Responsibilities = (props: IProps) => {
    if (!props.responsibilities || props.responsibilities.length === 0) return null;

    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Work sx={{ fontSize: 16, mr: 1, color: '#8b5cf6' }} />
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                    Responsibilities
                </Typography>
            </Box>
            <Paper elevation={0} sx={{
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                p: 2,
                borderRadius: 2
            }}>
                <List dense sx={{ py: 0 }}>
                    {props.responsibilities.map((responsibility, respIndex) => (
                        <ListItem key={respIndex} sx={{ py: 0.5, px: 0 }}>
                            <ListItemText
                                primary={
                                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                        • {responsibility}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};
