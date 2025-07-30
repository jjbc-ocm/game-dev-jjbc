import {
    Typography,
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    useTheme
} from '@mui/material';
import {
    ExpandMore,
    Business,
    Person
} from '@mui/icons-material';
import projectsData from '../../data/projects.json';
import { Project } from './Project';
import React, { useState } from 'react';


export default function Projects() {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(0); // 0 = Personal Projects expanded by default

    const handleAccordionChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : -1);
    };

    const renderClientAccordion = (client: any, clientIndex: number) => {
        return (
            <Accordion
                key={clientIndex}
                expanded={expanded === clientIndex}
                onChange={handleAccordionChange(clientIndex)}
                sx={{
                    mb: 3,
                    borderRadius: { xs: 0, sm: 3 },
                    '&:before': { display: 'none' },
                    boxShadow: { xs: 'none', sm: `0 2px 8px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)'}` },
                    backgroundColor: { xs: 'transparent', sm: theme.palette.background.paper },
                    '&.Mui-expanded': {
                        boxShadow: { xs: 'none', sm: `0 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.12)'}` }
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main, fontSize: { xs: '1rem', sm: '1.5rem' } }} />}
                    sx={{
                        backgroundColor: { xs: 'transparent', sm: theme.palette.background.paper },
                        borderRadius: { xs: 0, sm: 3 },
                        px: { xs: 0.5, sm: 2 },
                        py: { xs: 0.5, sm: 2 },
                        minHeight: { xs: 40, sm: 56 },
                        transition: 'background 0.2s',
                        '&:hover, &:active': {
                            backgroundColor: { 
                                xs: `${theme.palette.primary.main}14`, 
                                sm: `${theme.palette.primary.main}08` 
                            }
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {client.personal ? (
                                <Person sx={{ mr: { xs: 1, sm: 2 }, color: theme.palette.secondary.main, fontSize: { xs: '1.2rem', sm: '2rem' } }} />
                            ) : (
                                <Business sx={{ mr: { xs: 1, sm: 2 }, color: theme.palette.primary.main, fontSize: { xs: '1.2rem', sm: '2rem' } }} />
                            )}
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.text.primary, fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
                                {client.client}
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                backgroundColor: client.personal 
                                    ? `${theme.palette.secondary.main}14` 
                                    : `${theme.palette.primary.main}14`,
                                border: client.personal 
                                    ? `1px solid ${theme.palette.secondary.main}33` 
                                    : `1px solid ${theme.palette.primary.main}33`,
                                px: { xs: 1, sm: 2 },
                                py: { xs: 0.2, sm: 0.5 },
                                borderRadius: 2,
                                fontWeight: 500,
                                fontSize: { xs: '0.85rem', sm: '1rem' },
                                mt: { xs: 0.5, sm: 0 },
                            }}
                        >
                            {client.duration}
                        </Typography>
                    </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ 
                    p: { xs: 1, sm: 3 }, 
                    backgroundColor: { 
                        xs: 'transparent', 
                        sm: theme.palette.mode === 'dark' 
                            ? theme.palette.background.default 
                            : theme.palette.background.paper 
                    }
                }}>
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        {client.projects.map((project: any, projectIndex: number) =>
                            <Project
                                key={projectIndex}
                                project={project}
                                projectIndex={projectIndex}
                                totalProjects={client.projects.length}
                            />
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        );
    };

    return (
        <section id="projects" style={{
            minHeight: "100vh",
            background: theme.palette.custom.gradients.dark,
            padding: "40px 0"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: theme.palette.text.primary,
                            mb: 2,
                            background: theme.palette.custom.gradients.primary,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', sm: '2.8rem' }
                        }}
                    >
                        Projects
                    </Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            color: theme.palette.text.secondary, 
                            fontWeight: 400, 
                            fontSize: { xs: '1rem', sm: '1.25rem' } 
                        }}
                    >
                        A showcase of my professional work and achievements
                    </Typography>
                </Box>

                {projectsData.map((client, clientIndex) =>
                    renderClientAccordion(client, clientIndex)
                )}
            </Container>
        </section>
    );
}