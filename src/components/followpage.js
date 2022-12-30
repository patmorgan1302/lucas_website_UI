import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import './routes.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function RecipeReviewCard() {

  return (
      <Box id="cert-box"  sx={{ border: 1, borderColor: 'gold', bgcolor: '#fffcbfe2'}}>
        <h1 id="dirty-secret">Certificates and Permits</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    // image={require('../alexgrey.jpg')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Food Handlers Permit - UT
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
      
              </Card>
            </Item>
          </Grid>
        
          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
               
                  <CardMedia
                    component="img"
                    height="140"
                    // image={require('../alexgrey.jpg')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      ServSafe Food Certified
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
               
              </Card>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
               
                  <CardMedia
                    component="img"
                    height="140"
                    // image={require('../alexgrey.jpg')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Global Red Meta Standard (GRMS) 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
              
              </Card>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item> 
              <Card sx={{ maxWidth: 'auto' }}>
              
                  <CardMedia
                    component="img"
                    height="140"
                    // image={require('../alexgrey.jpg')}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                       Kitchen Manager Certification (Utah)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
               
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>

  );
}