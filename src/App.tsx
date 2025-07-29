import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

// Create a custom theme with Batman-inspired dark color palette
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold
      light: '#FFE55C',
      dark: '#B29700',
    },
    secondary: {
      main: '#C0C0C0', // Silver/Gray
      light: '#E6E6E6',
      dark: '#808080',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1E1E1E', // Slightly lighter dark
    },
    error: {
      main: '#FF4444',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    custom: {
      sectionBackground: {
        primary: '#121212',
        secondary: '#1E1E1E',
        accent: 'rgba(255, 215, 0, 0.05)', // Gold with low opacity
      },
      gradients: {
        primary: 'linear-gradient(135deg, #FFD700 0%, #FFE55C 100%)',
        secondary: 'linear-gradient(135deg, #C0C0C0 0%, #E6E6E6 100%)',
        dark: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
      },
      iconColors: {
        primary: '#FFD700',
        secondary: '#C0C0C0',
        accent: '#4CAF50',
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: '#FFD700',
          color: '#FFD700',
          '&.MuiChip-outlinedPrimary': {
            borderColor: '#FFD700',
            color: '#FFD700',
          },
        },
      },
    },
  },
});

// Add custom palette to theme type
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      sectionBackground: {
        primary: string;
        secondary: string;
        accent: string;
      };
      gradients: {
        primary: string;
        secondary: string;
        dark: string;
      };
      iconColors: {
        primary: string;
        secondary: string;
        accent: string;
      };
    };
  }
  interface PaletteOptions {
    custom?: {
      sectionBackground?: {
        primary?: string;
        secondary?: string;
        accent?: string;
      };
      gradients?: {
        primary?: string;
        secondary?: string;
        dark?: string;
      };
      iconColors?: {
        primary?: string;
        secondary?: string;
        accent?: string;
      };
    };
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </ThemeProvider>
  )
}

export default App;
