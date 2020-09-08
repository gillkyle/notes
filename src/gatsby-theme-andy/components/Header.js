/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Box, jsx } from 'theme-ui';

const Header = ({ siteMetadata }) => (
  <header>
    <Box py={2} px={3} sx={{ borderBottom: '1px solid', borderColor: '#dcddde' }}>
      <Link to="/" sx={{ fontWeight: 'bold', color: 'text', textDecoration: 'none' }}>
        {siteMetadata.title}
      </Link>
      <Link to="/overview" sx={{ color: 'secondary', textDecoration: 'none', ml: 2 }}>
        Graph Overview
      </Link>
    </Box>
  </header>
);

export default Header;
