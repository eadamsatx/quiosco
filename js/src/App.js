import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import WeatherMain from './components/WeatherMain'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="mui--text-white" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Grid container justify="center" direction="row"
                  alignItems="center">
              <Grid item xs={8}>
                <Typography variant="h5" align="center" color="mui--text-white"
                            paragraph>
                  Hi<WeatherMain></WeatherMain>
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography component="h1" variant="h2" align="center"
                            color="#bbbbbb" gutterBottom>
                  9:17 PM
                </Typography>
              </Grid>
            </Grid>
                        <Grid container justify="center" direction="row"
                  alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h6" align="left" color="mui--text-white" paragraph>
                  <b>July 11</b> @Sunset <i>Donnie Darko</i> film at Republic Square Park</Typography>
                <Typography variant="h6" align="left" color="mui--text-white" paragraph>
                  <b>July 18</b> 5-8pm Third Thursdays on Third Street</Typography>
                <Typography variant="h6" align="left" color="mui--text-white" paragraph>
                  <b>July 25</b> @Sunset <i>Mad Max: Fury Road</i> film at Republic Square Park</Typography>
                <Typography variant="h6" align="left" color="mui--text-white" paragraph>
                  <b>August 8</b> @Sunset <i>ZombieLand</i> film at Republic Square Park</Typography>
              </Grid>

              <Grid item xs={6}>
                <Carousel showArrows={true} autoPlay={true} stopOnHover={false} infiniteLoop={true}>
                <div>
                    <img src="https://dummyimage.com/1x1/5D5C61/5D5C61.png" />
                    <p className="legend"><Typography variant="h5" align="center" color="white"
                            paragraph>
                  Join us this Saturday for the Summer Classic Film Series Hot Tub and Pool Party! Doors at 8pm, show starts at 7.
                </Typography></p>
                </div>
                <div>
                    <img src="https://dummyimage.com/1x1/5D5C61/5D5C61.png" />
                    <p className="legend"><Typography variant="h5" align="center" color="white"
                            paragraph>
                  This message is much shorter.
                </Typography></p>
                </div>
            </Carousel>

              </Grid>
            </Grid>
            <Grid container justify="center" direction="row"
                  alignItems="center">
              <Grid item xs={4}>
                <Typography variant="h5" align="center" color="mui--text-white"
                            paragraph>

                </Typography>

                <Grid item xs={4}>
                  <Typography variant="h5" align="center" color="mui--text-white"
                              paragraph>

                  </Typography>
                </Grid>

              </Grid>

            </Grid>

            {/*<div className={classes.heroButtons}>*/}
            {/*  <Grid container spacing={2} justify="center">*/}
            {/*    <Grid item>*/}
            {/*      <Button variant="contained" color="primary">*/}
            {/*        Main call to action*/}
            {/*      </Button>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*      <Button variant="outlined" color="primary">*/}
            {/*        Secondary action*/}
            {/*      </Button>*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</div>*/}
          </Container>
        </div>
        {/*<Container className={classes.cardGrid} maxWidth="md">*/}
        {/*  /!* End hero unit *!/*/}
        {/*  <Grid container spacing={4}>*/}
        {/*    {cards.map(card => (*/}
        {/*      <Grid item key={card} xs={12} sm={6} md={4}>*/}
        {/*        <Card className={classes.card}>*/}
        {/*          <CardMedia*/}
        {/*            className={classes.cardMedia}*/}
        {/*            image="https://source.unsplash.com/random"*/}
        {/*            title="Image title"*/}
        {/*          />*/}
        {/*          <CardContent className={classes.cardContent}>*/}
        {/*            <Typography gutterBottom variant="h5" component="h2">*/}
        {/*              Heading*/}
        {/*            </Typography>*/}
        {/*            <Typography>*/}
        {/*              This is a media card. You can use this section to describe*/}
        {/*              the content.*/}
        {/*            </Typography>*/}
        {/*          </CardContent>*/}
        {/*          <CardActions>*/}
        {/*            <Button size="small" color="primary">*/}
        {/*              View*/}
        {/*            </Button>*/}
        {/*            <Button size="small" color="primary">*/}
        {/*              Edit*/}
        {/*            </Button>*/}
        {/*          </CardActions>*/}
        {/*        </Card>*/}
        {/*      </Grid>*/}
        {/*    ))}*/}
        {/*  </Grid>*/}
        {/*</Container>*/}
      </main>
    </React.Fragment>
  );
}
