import {
    Typography,
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container
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
    const [expanded, setExpanded] = useState(1); // 1 = Cloudnode IT Solutions expanded by default

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
                    boxShadow: { xs: 'none', sm: '0 2px 8px rgba(0,0,0,0.08)' },
                    backgroundColor: { xs: 'transparent', sm: 'white' },
                    '&.Mui-expanded': {
                        boxShadow: { xs: 'none', sm: '0 4px 20px rgba(0,0,0,0.12)' }
                    }
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#6366f1', fontSize: { xs: '1rem', sm: '1.5rem' } }} />}
                    sx={{
                        backgroundColor: { xs: 'transparent', sm: 'white' },
                        borderRadius: { xs: 0, sm: 3 },
                        px: { xs: 0.5, sm: 2 },
                        py: { xs: 0.5, sm: 2 },
                        minHeight: { xs: 40, sm: 56 },
                        transition: 'background 0.2s',
                        '&:hover, &:active': {
                            backgroundColor: { xs: 'rgba(99, 102, 241, 0.08)', sm: 'rgba(99, 102, 241, 0.02)' }
                        }
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {client.personal ? (
                                <Person sx={{ mr: { xs: 1, sm: 2 }, color: '#8b5cf6', fontSize: { xs: '1.2rem', sm: '2rem' } }} />
                            ) : (
                                <Business sx={{ mr: { xs: 1, sm: 2 }, color: '#6366f1', fontSize: { xs: '1.2rem', sm: '2rem' } }} />
                            )}
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#1f2937', fontSize: { xs: '1.1rem', sm: '1.5rem' } }}>
                                {client.client}
                            </Typography>
                        </Box>
                        <Typography
                            variant="body2"
                            color="#6b7280"
                            sx={{
                                backgroundColor: client.personal ? 'rgba(139, 92, 246, 0.08)' : 'rgba(99, 102, 241, 0.08)',
                                border: client.personal ? '1px solid rgba(139, 92, 246, 0.2)' : '1px solid rgba(99, 102, 241, 0.2)',
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
                    backgroundColor: { xs: 'transparent', sm: '#fafafa' } 
                }}>
                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        {client.projects.map((project: any, projectIndex: number) =>
                            <Project
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
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            padding: "40px 0"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#1f2937',
                            mb: 2,
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: { xs: '2rem', sm: '2.8rem' }
                        }}
                    >
                        Projects
                    </Typography>
                    <Typography variant="h6" color="#6b7280" sx={{ fontWeight: 400, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
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