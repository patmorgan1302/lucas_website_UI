import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


import './commissions.css';

export default function ContactPage() {

  return (
    <Box id="contact-box" sx={{ padding: '4%'}}>
      <Card id="contact-card" sx={{ border: 1, borderColor: 'gold', background: 'black' }}> 
        <Typography variant="h4" sx={{ color: '#ffff4d',  textShadow: " 2px 3px 3px grey", marginTop: '44px'}}>check out these sweet commissions</Typography>
        <Container>
        
            <Card  sx={{ maxWidth: "100%", marginTop: "45px", backgroundColor: '#b3b3b3', border: 2, borderColor: 'gold' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image={require("./lucas_site_1.jpg")}
                />
                <CardContent sx={{ borderTop: 1, borderColor: "black"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Dranky Ghost
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        This is an example of a potential commission that could be posted to the site in 
                        hopes that people will order something like it.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Share!</Button>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Learn More!</Button>
                </CardActions>
            </Card>

            <Card  sx={{ maxWidth: "100%", marginTop: "45px", backgroundColor: '#b3b3b3', border: 2, borderColor: 'gold' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image={require('./lucas_site_3.jpg')}
                />
                <CardContent sx={{ borderTop: 1, borderColor: "black"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Boo-ro
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        This is an example of a potential commission that could be posted to the site in 
                        hopes that people will order something like it.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Share</Button>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Learn More</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: "100%", marginTop: "45px", backgroundColor: '#b3b3b3', border: 2, borderColor: 'gold' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="auto"
                    image={require("./lucas_site_2.jpg")}
                />
                <CardContent sx={{ borderTop: 1, borderColor: "black"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Nightmare Horse
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        This is an example of a potential commission that could be posted to the site in 
                        hopes that people will order something like it.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Share</Button>
                    <Button sx={{ color: "black" }} color="success" variant="outlined" size="large">Learn More</Button>
                </CardActions>
            </Card>

        <Accordion id="accordion" sx={{ marginTop: '35px', background: 'radial-gradient(circle, rgba(255,254,248,1) 50%, rgba(255,2,2,1) 100%)' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <h2>
                you want one? let me know bruv
              </h2>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField             
            id="fullWidth"
            fullWidth label="Put Your Name Here!"             
            />
            <TextField sx={{ marginTop : '14px' }}            
            id="fullWidth"
            fullWidth label="Put Your Contact Info Here!"             
            />
            <TextField sx={{ marginTop : '14px' }} 
             fullWidth label="Put Your Message Here!" id="fullWidth"
            />
            <Button sx={{ marginTop: "15px", float: 'right', marginBottom: '16px', marginRight: '4px' }} variant="contained" color="success">
              SEND
            </Button>
          </AccordionDetails>
        </Accordion>
 
        </Container>
        </Card>
    </Box>
  );
};

