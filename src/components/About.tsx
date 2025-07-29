import { Box, Typography, Container, Paper, Chip, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { SportsEsports } from '@mui/icons-material';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LoopIcon from '@mui/icons-material/Loop';
import DevicesIcon from '@mui/icons-material/Devices';
import SpeedIcon from '@mui/icons-material/Speed';
import aboutData from '../data/about.json';

const iconMap = {
    Build: <BuildIcon color="primary" />,
    SportsEsports: <SportsEsportsIcon color="secondary" />,
    Loop: <LoopIcon color="success" />,
    Devices: <DevicesIcon color="primary" />,
    Speed: <SpeedIcon color="success" />
};

export default function About() {
    const theme = useTheme();
    
    return (
        <section id="about" style={{
            minHeight: "100vh",
            background: theme.palette.custom.gradients.dark,
            padding: "80px 0"
        }}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <SportsEsports sx={{ fontSize: 40, mr: 2, color: theme.palette.custom.iconColors.primary }} />
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: theme.palette.text.primary,
                            background: theme.palette.custom.gradients.primary,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        About Me
                    </Typography>
                </Box>
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: theme.palette.background.paper,
                        mb: 4
                    }}
                >
                    {aboutData.bio.map((line: string, index: number) => (
                        <Typography 
                            key={index} 
                            variant="body1" 
                            sx={{ 
                                color: theme.palette.text.secondary,
                                lineHeight: 1.8, 
                                fontSize: '1.1rem', 
                                textAlign: 'center', 
                                mb: 2 
                            }}
                        >
                            {line}
                        </Typography>
                    ))}
                </Paper>
                
                <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: theme.palette.background.paper }}>
                    <Typography 
                        variant="subtitle1" 
                        sx={{ 
                            fontWeight: 700, 
                            mb: 1, 
                            color: theme.palette.primary.main 
                        }}
                    >
                        Technologies I Use
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {aboutData.technologies.map((tech: string) => (
                            <Chip key={tech} label={tech} color="primary" variant="outlined" />
                        ))}
                    </Box>
                </Paper>
                
                <Paper 
                    elevation={0} 
                    sx={{ 
                        p: 3, 
                        backgroundColor: theme.palette.custom.sectionBackground.accent 
                    }}
                >
                    <Typography 
                        variant="subtitle1" 
                        sx={{ 
                            fontWeight: 700, 
                            mb: 1, 
                            color: theme.palette.success.main 
                        }}
                    >
                        Highlights
                    </Typography>
                    <List>
                        {aboutData.highlights.map((item: { icon: string; text: string }, idx: number) => (
                            <ListItem key={idx}>
                                <ListItemIcon>{iconMap[item.icon as keyof typeof iconMap]}</ListItemIcon>
                                <ListItemText 
                                    primary={item.text} 
                                    sx={{ 
                                        '& .MuiListItemText-primary': { 
                                            color: theme.palette.text.primary 
                                        } 
                                    }} 
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </section>
    );
}