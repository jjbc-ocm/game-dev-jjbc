import { Box, Typography, Container, useTheme } from '@mui/material';
import { Button } from './ui/Button';
import { SportsEsports, Casino, Gamepad } from '@mui/icons-material';
import aboutData from '../data/about.json';

export default function Header() {
    const { header } = aboutData;
    const theme = useTheme();
    
    return (
        <section id="home" style={{ 
            minHeight: "100vh", 
            background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Floating game icons background */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                pointerEvents: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                padding: 4,
                '& > svg': {
                    fontSize: '3rem',
                    color: theme.palette.primary.main,
                    animation: 'float 6s ease-in-out infinite',
                    '&:nth-of-type(2n)': {
                        animationDelay: '2s',
                    },
                    '&:nth-of-type(3n)': {
                        animationDelay: '4s',
                    }
                },
                '@keyframes float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    }
                }
            }}>
                {[...Array(15)].map((_, i) => (
                    <Box key={i} sx={{ opacity: 0.7 }}>
                        {i % 3 === 0 ? <SportsEsports /> : i % 3 === 1 ? <Casino /> : <Gamepad />}
                    </Box>
                ))}
            </Box>

            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: 2, 
                        mb: 3 
                    }}>
                        <SportsEsports sx={{ 
                            fontSize: { xs: '2rem', md: '3rem' },
                            color: theme.palette.primary.main
                        }} />
                        <Typography 
                            variant="h1" 
                            component="h1" 
                            sx={{ 
                                fontWeight: 800,
                                color: 'white',
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            {header.greeting}
                        </Typography>
                    </Box>
                    <Typography 
                        variant="h4" 
                        sx={{ 
                            color: theme.palette.text.secondary,
                            mb: 3,
                            fontWeight: 400,
                            fontSize: { xs: '1.2rem', md: '1.7rem' }
                        }}
                    >
                        {header.tagline}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: theme.palette.text.primary,
                            mb: 4,
                            fontWeight: 400,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            maxWidth: 600,
                            mx: 'auto',
                            lineHeight: 1.7
                        }}
                    >
                        {header.description}
                    </Typography>
                    <Button
                        variant="primary"
                        size="large"
                        scrollTo="projects"
                        scrollDuration={500}
                        startIcon={<Gamepad />}
                    >
                        {header.cta_button}
                    </Button>
                </Box>
            </Container>
        </section>
    );
}