import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './commissions.css';

export default function ContactPage() {

  return (
    <Box id="contact-box" sx={{ padding: '4%'}}>
      <Card id="contact-card" sx={{ border: 1, borderColor: 'gold', background: 'black' }}> 
        <Typography variant="h1" 
            sx={{ color: '#ffff4d',  
            textShadow: " 4px 4px 5px purple", 
            marginTop: '44px', 
            marginBottom: '66px',
            textDecoration: 'underline'}}>
            follow me around!
            </Typography>
         
            <Typography variant="h2" 
            sx={{ color: '#ffff4d',  
            textShadow: " 2px 3px 3px yellow", 
            marginTop: '44px', 
            textDecoration: 'none'}}>
            <a href="https://www.instagram.com/lucasdicenzo/?hl=en" style={{ textDecoration: 'underline' }}> instagram: lucasdicenzo </a>
            </Typography>

            <Typography variant="h2" 
            sx={{ color: '#ffff4d',  
            textShadow: " 2px 3px 3px yellow", 
            marginTop: '44px', 
            textDecoration: 'none'}}>
            <a href="https://www.instagram.com/yungladco/?hl=en" style={{ textDecoration: 'underline'  }}>art instagram: yungladco </a>
            </Typography>

            <Typography variant="h2" 
            sx={{ color: '#ffff4d',  
            textShadow: " 2px 3px 3px yellow", 
            marginTop: '44px', 
            textDecoration: 'none', 
            marginBottom: '54px'}}>
            <a href="https://www.tiktok.com/@lucasdicenzo" style={{ textDecoration: 'underline' }}> tiktok: lucasdicenzo </a>
            </Typography>

        </Card>
    </Box>
  );
};

