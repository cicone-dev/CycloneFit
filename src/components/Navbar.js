import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: 'auto', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="30px"
      alignItems="flex-end"
      marginBottom="30px"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#00AEEF', borderBottom: '3px solid #00AEEF' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#00AEEF' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
