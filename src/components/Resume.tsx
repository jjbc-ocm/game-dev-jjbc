import React from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Paper,
    Divider,
    List,
    ListItem,
    ListItemText,
    Chip,
    Button
} from '@mui/material';
import { Description, Download } from '@mui/icons-material';
import aboutData from '../data/about.json';
import projectsData from '../data/projects.json';

function renderResumeContent() {
    return `
    <div id="resume-section" style="font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif; background: white; color: #1f2937; padding: 40px; max-width: 900px; margin: auto;">
        <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem;">Jilmer John Cariaso</h1>
            <h2 style="font-size: 1.25rem; font-weight: 600; color: #6b7280; margin-bottom: 0.5rem;">Software Developer</h2>
            <div style="color: #6b7280; font-size: 1rem;">+63 920 813 0511 • jjbconecodeman@gmail.com • 
                <a href="${aboutData.portfolio_url}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: none; font-weight: 500;">
                    Portfolio
                </a> • 
                <a href="${aboutData.github_url}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: none; font-weight: 500;">
                    GitHub
                </a>
            </div>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Summary</h3>
            <div style="font-size: 1rem; color: #374151; line-height: 1.6;">${aboutData.short_summary}</div>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Technical Skills</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${aboutData.technologies.map((tech) => `<span style="background: #6366f1; color: white; font-weight: 500; font-size: 0.95rem; padding: 2px 12px; border-radius: 16px; display: inline-block; margin-bottom: 2px; margin-right: 4px; letter-spacing: 0.5px; vertical-align: middle;">${tech}</span>`).join('')}
            </div>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Professional Experience</h3>
            ${projectsData.filter(client => !client.personal).map((client) => `
                <div style="margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span style="font-size: 1.1rem; font-weight: 700;">${client.client}</span>
                        <span style="font-size: 0.95rem; color: #6b7280;">${client.duration}</span>
                    </div>
                    ${client.projects.map((project) => `
                        <div style="margin-left: 16px; margin-bottom: 12px;">
                            <div style="font-size: 1rem; font-weight: 600; color: #374151; margin-bottom: 2px;">${project.name} - ${project.role}</div>
                            <div style="font-size: 0.98rem; color: #6b7280; margin-bottom: 4px;">${project.description}</div>
                            ${project.metrics && project.metrics.length > 0 ? `
                                <ul style="margin-left: 18px; margin-bottom: 4px;">
                                    ${project.metrics.map((metric) => `<li style="font-size: 0.95rem; color: #374151; margin-bottom: 2px;">${metric.value}</li>`).join('')}
                                </ul>
                            ` : project.responsibilities && project.responsibilities.length > 0 ? `
                                <ul style="margin-left: 18px; margin-bottom: 4px;">
                                    ${project.responsibilities.map((resp) => `<li style="font-size: 0.95rem; color: #374151; margin-bottom: 2px;">${resp}</li>`).join('')}
                                </ul>
                            ` : ''}
                            <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px;">
                                ${project.tools.map((tool) => `<span style="background: #f3f4f6; color: #374151; font-size: 0.85rem; padding: 2px 12px; border-radius: 16px; display: inline-block; margin-bottom: 2px; margin-right: 4px; letter-spacing: 0.5px; vertical-align: middle;">${tool}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
        ${aboutData.education && aboutData.education.length > 0 ? `
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Education</h3>
            ${aboutData.education.map((edu) => `
                <div style="margin-bottom: 10px;">
                    <div style="font-size: 1rem; font-weight: 600; color: #374151;">${edu.degree}</div>
                    <div style="font-size: 0.98rem; color: #6b7280;">${edu.school}</div>
                    <div style="font-size: 0.98rem; color: #6b7280;">${edu.duration}</div>
                </div>
            `).join('')}
        </div>
        ` : ''}
        ${aboutData.references && aboutData.references.some(ref => ref.name && ref.name.trim() !== "") ? `
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <div style="margin-bottom: 32px;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Character References</h3>
            ${aboutData.references.filter(ref => ref.name && ref.name.trim() !== "").map((ref) => `
                <div style="margin-bottom: 10px;">
                    <div style="font-size: 1rem; font-weight: 600; color: #374151;">${ref.name}</div>
                    <div style="font-size: 0.98rem; color: #6b7280;">${ref.position} • ${ref.company}</div>
                    <div style="font-size: 0.98rem; color: #6b7280;">${ref.email}</div>
                </div>
            `).join('')}
        </div>
        ` : ''}
        <style>
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body { background: white !important; }
          #resume-section { box-shadow: none !important; border: none !important; }
        }
        </style>
    `;
}

export default function Resume() {
    const handleOpenPrintWindow = () => {
        const printWindow = window.open('', '_blank', 'width=1024,height=800');
        if (printWindow) {
            printWindow.document.write(`<!DOCTYPE html><html><head><title>Jilmer John Cariaso Resume</title></head><body>${renderResumeContent()}</body></html>`);
            printWindow.document.close();
        }
    };

    return (
        <div id="resume" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
            padding: "80px 0"
        }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Description sx={{ fontSize: 40, mr: 2, color: '#6366f1' }} />
                        <Typography 
                            variant="h2" 
                            component="h2" 
                            sx={{ 
                                fontWeight: 800, 
                                color: 'white',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Resume
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="#d1d5db" sx={{ fontWeight: 400, mb: 3 }}>
                        Professional Experience & Skills
                    </Typography>
                    {/* <Button
                        variant="contained"
                        startIcon={<Download />}
                        onClick={handleOpenPrintWindow}
                        sx={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: 'white',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 25px rgba(99, 102, 241, 0.4)'
                            },
                            '@media print': {
                                display: 'none'
                            },
                            my: 1
                        }}
                    >
                        Open in New Window
                    </Button> */}
                    <Button
                        variant="contained"
                        startIcon={<Download />}
                        href="/assets/pdf/Jilmer Cariaso Resume.pdf"
                        download="Jilmer Cariaso Resume.pdf"
                        sx={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: 'white',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #5b5ee6 0%, #7c3aed 100%)',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 25px rgba(99, 102, 241, 0.4)'
                            },
                            '@media print': {
                                display: 'none'
                            },
                            my: 1
                        }}
                    >
                        Download PDF
                    </Button>
                </Box>

                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 4, 
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        '@media print': {
                            boxShadow: 'none',
                            border: 'none'
                        }
                    }}
                >
                    {/* Header */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: '#1f2937', mb: 1 }}>
                            Jilmer John Cariaso
                        </Typography>
                        <Typography variant="h6" color="#6b7280" sx={{ mb: 2 }}>
                            Software Developer
                        </Typography>
                        <Typography variant="body1" color="#6b7280">
                            +63 920 813 0511 • jjbconecodeman@gmail.com •{' '}
                            <a
                                href={aboutData.portfolio_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}
                            >
                                Portfolio
                            </a>{' '}
                            •{' '}
                            <a
                                href={aboutData.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 500 }}
                            >
                                GitHub
                            </a>
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Summary */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
                            Summary
                        </Typography>
                        <Typography variant="body1" color="#374151" sx={{ lineHeight: 1.6 }}>
                            {aboutData.short_summary}
                        </Typography>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Skills */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
                            Technical Skills
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {aboutData.technologies.map((tech, index) => (
                                <Chip 
                                    key={index}
                                    label={tech}
                                    sx={{ 
                                        backgroundColor: '#6366f1',
                                        color: 'white',
                                        fontWeight: 500
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    {/* Experience */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1f2937', mb: 3 }}>
                            Professional Experience
                        </Typography>
                        
                        {projectsData.filter(client => !client.personal).map((client, clientIndex) => (
                            <Box key={clientIndex} sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937' }}>
                                        {client.client}
                                    </Typography>
                                    <Typography variant="body2" color="#6b7280">
                                        {client.duration}
                                    </Typography>
                                </Box>
                                
                                {client.projects.map((project, projectIndex) => (
                                    <Box key={projectIndex} sx={{ ml: 2, mb: 2 }}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#374151', mb: 1 }}>
                                            {project.name} - {project.role}
                                        </Typography>
                                        <Typography variant="body2" color="#6b7280" sx={{ mb: 1 }}>
                                            {project.description}
                                        </Typography>
                                        
                                        {/* Show metrics first if available */}
                                        {project.metrics && project.metrics.length > 0 && (
                                            <List sx={{ py: 0, ml: 2, mb: 1 }}>
                                                {project.metrics.map((metric, metricIndex) => (
                                                    <ListItem key={metricIndex} sx={{ py: 0.5 }}>
                                                        <ListItemText 
                                                            primary={`• ${metric.value}`}
                                                            sx={{
                                                                '& .MuiListItemText-primary': {
                                                                    color: '#374151',
                                                                    fontSize: '0.875rem',
                                                                    fontWeight: 500
                                                                }
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                        
                                        {/* Show responsibilities only if no metrics available */}
                                        {(!project.metrics || project.metrics.length === 0) && project.responsibilities.length > 0 && (
                                            <List sx={{ py: 0, ml: 2, mb: 1 }}>
                                                {project.responsibilities.map((responsibility, respIndex) => (
                                                    <ListItem key={respIndex} sx={{ py: 0.5 }}>
                                                        <ListItemText 
                                                            primary={`• ${responsibility}`}
                                                            sx={{
                                                                '& .MuiListItemText-primary': {
                                                                    color: '#374151',
                                                                    fontSize: '0.875rem'
                                                                }
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        )}
                                        
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                                            {project.tools.map((tool, toolIndex) => (
                                                <Chip 
                                                    key={toolIndex}
                                                    label={tool}
                                                    size="small"
                                                    sx={{ 
                                                        backgroundColor: '#f3f4f6',
                                                        color: '#374151',
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>

                    {/* Education */}
                    {aboutData.education && aboutData.education.length > 0 && (
                        <Box sx={{ mb: 4 }}>
                            <Divider sx={{ mb: 4 }} />
                            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
                                Education
                            </Typography>
                            {aboutData.education.map((edu, idx) => (
                                <Box key={idx} sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#374151' }}>{edu.degree}</Typography>
                                    <Typography variant="body2" color="#6b7280">{edu.school}</Typography>
                                    <Typography variant="body2" color="#6b7280">{edu.duration}</Typography>
                                </Box>
                            ))}
                        </Box>
                    )}

                    {/* References */}
                    {aboutData.references && aboutData.references.some(ref => ref.name && ref.name.trim() !== "") && (
                        <Box sx={{ mb: 4 }}>
                            <Divider sx={{ mb: 4 }} />
                            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
                                Character References
                            </Typography>
                            {aboutData.references.filter(ref => ref.name && ref.name.trim() !== "").map((ref, idx) => (
                                <Box key={idx} sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#374151' }}>{ref.name}</Typography>
                                    <Typography variant="body2" color="#6b7280">{ref.position} • {ref.company}</Typography>
                                    <Typography variant="body2" color="#6b7280">{ref.email}</Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Paper>
            </Container>
        </div>
    );
} 