import { AppBar, Toolbar, Typography, Switch, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import fsaLogo from '../fsa.png';

export default function MyAppBar({ darkMode, onToggleDarkMode }) {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)', // Brighter blue gradient
        boxShadow: '0 8px 32px 0 rgba(25,118,210,0.18)',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
      }}
    >
      <Toolbar sx={{ minHeight: 100, px: 4 }}>
        {/* University Logo on the left */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Box sx={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: '50%',
            boxShadow: '0 4px 16px rgba(25, 118, 210, 0.18)',
            p: 1.2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            width: 80,
            mr: 2.5
          }}>
            <img src={fsaLogo} alt="University Logo" style={{ height: 64, width: 64, objectFit: 'contain', borderRadius: '50%' }} />
          </Box>
        </Box>
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontWeight: 900,
            fontFamily: 'Poppins, Montserrat, Segoe UI, Arial, sans-serif',
            fontSize: { xs: 32, sm: 42, md: 52 },
            letterSpacing: 7,
            textTransform: 'uppercase',
            color: '#fff',
            textShadow: '0 4px 24px #1565c0, 0 1px 0 #fff',
            mb: 0.5,
          }}
        >
          IAE <span style={{ color: '#ffd600', fontWeight: 900, letterSpacing: 10, textShadow: '0 2px 12px #ffd600, 0 1px 0 #fff' }}>RAG</span>
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
          px: 2,
          py: 0.5,
          ml: 2,
        }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              color: '#e3f2fd',
              fontWeight: 700,
              fontSize: 20,
              mx: 0.5,
              borderRadius: 2,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
              },
            }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
            sx={{
              color: '#e3f2fd',
              fontWeight: 700,
              fontSize: 20,
              mx: 0.5,
              borderRadius: 2,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/upload"
            sx={{
              color: '#e3f2fd',
              fontWeight: 700,
              fontSize: 20,
              mx: 0.5,
              borderRadius: 2,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
              },
            }}
          >
            Upload
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/ask"
            sx={{
              color: '#e3f2fd',
              fontWeight: 700,
              fontSize: 20,
              mx: 0.5,
              borderRadius: 2,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
              },
            }}
          >
            Ask
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/documents"
            sx={{
              color: '#e3f2fd',
              fontWeight: 700,
              fontSize: 20,
              mx: 0.5,
              borderRadius: 2,
              transition: 'background 0.2s, color 0.2s',
              '&:hover': {
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
              },
            }}
          >
            Documents
          </Button>
        </Box>
        {/* Removed dark mode switch */}
      </Toolbar>
    </AppBar>
  );
}