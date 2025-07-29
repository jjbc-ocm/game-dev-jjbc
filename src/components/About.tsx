import { Box, Typography, Container, Paper, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person } from '@mui/icons-material';
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
    return (
        <section id="about" style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            padding: "80px 0"
        }}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Person sx={{ fontSize: 40, mr: 2, color: '#6366f1' }} />
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#1f2937',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
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
                        backgroundColor: 'white',
                        mb: 4
                    }}
                >
                    {aboutData.bio.map((line: string, index: number) => (
                        <Typography key={index} variant="body1" color="#6b7280" sx={{ lineHeight: 1.8, fontSize: '1.1rem', textAlign: 'center', mb: 2 }}>
                            {line}
                        </Typography>
                    ))}
                </Paper>
                <Paper elevation={0} sx={{ p: 3, mb: 4, background: "rgba(99,102,241,0.05)" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: "#6366f1" }}>
                        Technologies I Use
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {aboutData.technologies.map((tech: string) => (
                            <Chip key={tech} label={tech} color="primary" variant="outlined" />
                        ))}
                    </Box>
                </Paper>
                <Paper elevation={0} sx={{ p: 3, background: "rgba(16,185,129,0.05)" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: "#10b981" }}>
                        Highlights
                    </Typography>
                    <List>
                        {aboutData.highlights.map((item: { icon: string; text: string }, idx: number) => (
                            <ListItem key={idx}>
                                <ListItemIcon>{iconMap[item.icon as keyof typeof iconMap]}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </section>
    );
}