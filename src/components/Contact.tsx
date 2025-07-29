import { useState } from 'react';
import { 
    Box, 
    Typography, 
    Container, 
    Paper, 
    Snackbar, 
    Alert,
    CircularProgress,
    Grid,
    Link
} from '@mui/material';
import { Email, Send, GitHub, LinkedIn, Description } from '@mui/icons-material';
import { Button } from './ui/Button';
import { TextField } from './ui/TextField';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof FormData) => (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = event.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            // EmailJS configuration
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'jjbconecodeman@gmail.com, jjbcariaso@gmail.com'
            };
            
            // You'll need to replace these with your actual EmailJS credentials
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
            );
            
            if (result.status === 200) {
                setSnackbar({
                    open: true,
                    message: 'Message sent successfully! I\'ll get back to you soon.',
                    severity: 'success'
                });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again or contact me directly.',
                severity: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    return (
        <section id="contact" style={{ 
            minHeight: "100vh", 
            background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
            padding: "80px 0"
        }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <Email sx={{ fontSize: 40, mr: 2, color: '#6366f1' }} />
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
                            Contact
                        </Typography>
                    </Box>
                    <Typography variant="h6" color="#d1d5db" sx={{ fontWeight: 400 }}>
                        Let's work together
                    </Typography>
                </Box>

                {/* Social Links */}
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link 
                            href="https://github.com/jjbc-ocm" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                color: '#d1d5db', 
                                textDecoration: 'none',
                                p: 1,
                                borderRadius: 1,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    color: '#6366f1',
                                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <GitHub sx={{ fontSize: 24, mr: 1 }} />
                            <Typography variant="body1">GitHub</Typography>
                        </Link>
                        <Box
                            onClick={() => {
                                const el = document.getElementById('resume');
                                if (el) {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}
                            sx={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                color: '#d1d5db', 
                                textDecoration: 'none',
                                p: 1,
                                borderRadius: 1,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: '#6366f1',
                                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <Description sx={{ fontSize: 24, mr: 1 }} />
                            <Typography variant="body1">Resume</Typography>
                        </Box>
                    </Box>
                </Box>
                
                <Paper 
                    elevation={0}
                    sx={{ 
                        p: 4, 
                        borderRadius: 3,
                        backgroundColor: 'white',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        maxWidth: 600,
                        mx: 'auto'
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Name"
                                value={formData.name}
                                onChange={handleInputChange('name')}
                                error={!!errors.name}
                                helperText={errors.name}
                                disabled={isSubmitting}
                            />
                        </Box>
                        
                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                error={!!errors.email}
                                helperText={errors.email}
                                disabled={isSubmitting}
                            />
                        </Box>
                        
                        <Box sx={{ mb: 3 }}>
                            <TextField
                                label="Subject"
                                value={formData.subject}
                                onChange={handleInputChange('subject')}
                                error={!!errors.subject}
                                helperText={errors.subject}
                                disabled={isSubmitting}
                            />
                        </Box>
                        
                        <Box sx={{ mb: 4 }}>
                            <TextField
                                label="Message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange('message')}
                                error={!!errors.message}
                                helperText={errors.message}
                                disabled={isSubmitting}
                            />
                        </Box>
                        
                        <Box sx={{ textAlign: 'center' }}>
                            <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                loading={isSubmitting}
                                startIcon={<Send />}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
            
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbar.severity}
                    sx={{ 
                        width: '100%',
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </section>
    );
}