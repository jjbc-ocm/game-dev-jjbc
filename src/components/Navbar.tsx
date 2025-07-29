import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, Info, Work, ContactMail, Description } from '@mui/icons-material';
import { Button } from './ui/Button';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { to: 'home', label: 'Home', icon: <Home /> },
    { to: 'about', label: 'About', icon: <Info /> },
    { to: 'projects', label: 'Projects', icon: <Work /> },
    { to: 'contact', label: 'Contact', icon: <ContactMail /> },
    { to: 'resume', label: 'Resume', icon: <Description /> }
  ];

  const handleNavClick = (to: string) => {
    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setDrawerOpen(false);
  };

  const handleLogoClick = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Helper method to render navigation buttons
  const renderNavButton = (to: string, label: string, icon: React.ReactNode) => (
    <Button 
      variant="navigation"
      onClick={() => handleNavClick(to)}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 64,
        px: 2,
        py: 1,
        gap: 1,
      }}
    >
      <Box
        sx={{
          fontSize: '1.3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Box>
    </Button>
  );

  // Render the navbar
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, sm: 64 } }}>
          {/* Logo on the left */}
          <Box 
            onClick={handleLogoClick}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <Box
              sx={{
                width: { xs: 32, sm: 40 },
                height: { xs: 32, sm: 40 },
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: { xs: 1, sm: 2 },
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Consolas, 'Courier New', monospace",
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1
                }}
              >
                {'{J}'}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: 'white',
                display: { xs: 'none', sm: 'block' },
                fontSize: { xs: '1.1rem', sm: '1.3rem' }
              }}
            >
              Jilmer Cariaso
            </Typography>
          </Box>

          {/* Navigation on the right */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => 
                renderNavButton(item.to, item.label, item.icon)
              )}
            </Box>
          )}

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ 
              sx: { 
                width: 280, 
                background: 'white',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
              } 
            }}
          >
            <Box sx={{ mt: 2, p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: '#6366f1',
                  mb: 2,
                  textAlign: 'center',
                  fontSize: '1.2rem'
                }}
              >
                Menu
              </Typography>
              <List>
                {navItems.map((item) => (
                  <ListItem
                    component="button"
                    disableGutters
                    key={item.to}
                    onClick={() => handleNavClick(item.to)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      borderRadius: 2,
                      margin: '4px 0',
                      padding: '12px 16px',
                      fontWeight: 500,
                      color: '#1f2937',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'background 0.2s, color 0.2s',
                      boxShadow: 'none',
                      minHeight: 48,
                      width: '100%',
                      '&:hover, &:focus': {
                        background: '#f3f4f6',
                        color: '#6366f1',
                        outline: 'none',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: '#6366f1', minWidth: 36, mr: 1 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} sx={{ '.MuiListItemText-primary': { fontWeight: 500, fontSize: '1.05rem' } }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}