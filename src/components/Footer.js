import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        width: 'auto',
        padding: '2rem 0',
        marginTop: '4rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: '2rem',
        }}
      >
        <Box>
          <Typography variant="h6">Sobre</Typography>
          <Typography variant="body2">
            Encontre treinos e execuções especificas para sua evolução.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">Contato</Typography>
          <Typography variant="body2">Email: cicone.professional@gmail.com</Typography>
          <Typography variant="body2">Telefone: (11) 1234-5678</Typography>
        </Box>

        <Box>
          <Typography variant="h6">Redes Sociais</Typography>
          <Stack direction="row" spacing={2}>
            <a style={{ color: '#FFFF' }} href="https://instagram.com" aria-label="Instagram">
              Instagram
            </a>
            <a style={{ color: '#FFFF' }} href="https://twitter.com" aria-label="Twitter">
              Twitter
            </a>
            <a style={{ color: '#FFFF' }} href="https://facebook.com" aria-label="Facebook">
              Facebook
            </a>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: '2rem',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #FFFFFF',
        }}
      >
        <Box>
          <Typography variant="h6">
            <img
              src={Logo}
              alt="logo-footer"
              className="logo-footer-img"
              style={{ height: '200px' }}
            />
          </Typography>
        </Box>

        <Box>
          <Typography style={{ marginTop: '45px' }} variant="body2"> &copy; 2025 CycloneFit. Todos os direitos reservados.</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Footer;
