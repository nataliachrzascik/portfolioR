import './App.css';
import { Container, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import AppEng from "./components/AppEng";
import one from './components/css/1.PNG';
import two from './components/css/2.PNG';
import three from './components/css/3.PNG';
import four from './components/css/4.PNG';
import five from './components/css/5.PNG';
import six from './components/css/6.PNG';
import flag from './components/css/flag.jpg';
import hot from './components/css/hot-desk.PNG';
import { Link, Route, Switch } from 'react-router-dom';


function App() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <Switch>
        <Route exact path="/eng"><AppEng /></Route>
        <Route exact path="/">
          <div className="stars" />
          <div className="glow" />
          <div className="App">
            <header className="App-header">
              <p>
                Nazywam się Natalia Chrząścik jestem studentką informatyki w Krakowie na specjalizacji bazy danych.
                Od kilku lat interesuję się nowymi technologiami i moją pasją jest tworzenie aplikacji internetowych. Poszukuje pracy jako React front-dev.
        </p>
            </header>
            <div className="body">
              <Container fixed >
                <Paper className="paper" variant="outlined" style={{ backgroundColor: '#cad6fc' }} >
                  <Link to="/eng"><span className="flag"><img src={flag} style={{ width: '80px' }, { height: '40px' }} /></span></Link>
                  <h1>Stack technologiczny</h1>
                  <div className="stack">
                    <p className="stackOne">Javascript es6</p>
                    <p className="stackOne">React.js</p>
                    <p className="stackOne">Redux.js</p>
                    <p className="stackOne">node.js</p>
                    <p className="stackOne">express.js</p>
                    <p className="stackOne">rest api</p>
                    <br />
                    <p className="stackOne">YUP Formik</p>
                    <p className="stackOne">Hooks</p>
                    <p className="stackOne">Styled Components</p>
                    <p className="stackOne">GSAP</p>
                    <br />
                    <p className="stackOne">html/css/sass</p>
                    <p className="stackOne">bootstrap</p>
                    <p className="stackOne">material-ui</p>
                    <p className="stackOne">pug</p>
                    <p className="stackOne">mongodb</p>
                    <p className="stackOne">firebase</p>
                    <br />

                    <p className="stackOne">git</p>
                    <p className="stackOne">gimp</p>
                    <p className="stackOne">Adobe XD</p>
                  </div>
                  <h1>Projekty</h1>
                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://dyplomowe.herokuapp.com/')}>
                      <CardMedia
                        className="media"
                        image={one}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h6" component="h3">
                          React, Redux, Hooks, Express, MongoDB
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Projekt systemu blogowego o tematyce kulinarnej. System umożliwia rejestrację/logowanie/dodanie przepisu/przeglądanie bazy przepisów/komentowanie/dodanie do znajomych/obejrzenie profilu użytkownika oraz własnego/zmiane danych osobowych
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://dyplomowe.herokuapp.com/')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/inzynierskie')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>

                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://hot-desk-office.herokuapp.com/')}>
                      <CardMedia
                        className="media"
                        image={hot}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h6" component="h3">
                          React, Redux, Hooks, Express, MongoDB
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Aplikacja umożliwiająca rezerwację wybranego biurka na wybrany dzień oraz podglądu/edycji rezerwacji w widoku profilu użytkownika
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://hot-desk-office.herokuapp.com/')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/hot-desk')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>



                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://nataliachrzascik.github.io/-quarantineApp/')}>
                      <CardMedia
                        className="media"
                        image={two}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h5" component="h3">
                          React, Redux, SASS, Rest Api, Material-Ui
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Aplikacja proponująca zajęcia umilające czas na kwarantannie i punktująca wykonane zadania.
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/-quarantineApp/')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/-quarantineApp')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>

                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://nataliachrzascik.github.io/ShopReact/#/')}>
                      <CardMedia
                        className="media"
                        image={three}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h5" component="h3">
                          React, Javascript, CSS
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Mechanizm karty produktu i koszyka.
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/ShopReact/#/')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/ShopReact')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>

                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://nataliachrzascik.github.io/weatherApp/')}>
                      <CardMedia
                        className="media"
                        image={four}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h5" component="h3">
                          React, Rest Api, SASS
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Aplikacja pokazująca pogode dla dowolnego miejsca na świecie.
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/weatherApp/')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/weatherApp')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>

                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://nataliachrzascik.github.io')}>
                      <CardMedia
                        className="media"
                        image={five}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h5" component="h3">
                          Javascript, Bootstrap, CSS
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Projekt sklepu z ubraniami i akcesoriami posiadający filtr przedmiotów.
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/nataliachrzascik.github.io')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>

                  <Card className="root">
                    <CardActionArea>
                    <div onClick={() => openInNewTab('https://stupefied-leakey-6afad3.netlify.app/?fbclid=IwAR3aFXKVs-JWIQhpsrkEepX7E4hwmZKPzcwp_LpypQ1WzKioZfuB3HNqCAg')}>
                      <CardMedia
                        className="media"
                        image={six}
                        title="recipes"
                      />
                      <CardContent className="content">
                        <Typography className="contentTech" gutterBottom variant="h5" component="h3">
                          React, Node, Socket-io, Hooks
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Aplikacja udostępniająca czat z pokojami.
          </Typography>
                      </CardContent>
                      </div>
                    </CardActionArea>
                    <CardActions className="action">
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://stupefied-leakey-6afad3.netlify.app/?fbclid=IwAR3aFXKVs-JWIQhpsrkEepX7E4hwmZKPzcwp_LpypQ1WzKioZfuB3HNqCAg')}>
                        Zobacz apke
        </Button>
                      <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/chatAppReact')}>
                        Zobacz kod
        </Button>
                    </CardActions>
                  </Card>


                  <h1>Kontakt</h1>
                  <div className="contactContainer">
                    <span className="foot"><i className="far contact fa-envelope"></i>natalia.chrzascik1@gmail.com</span>
                    <span className="foot"><i className="fab contact fa-github"></i>https://github.com/nataliachrzascik</span>
                    <span className="foot"><i className="fas contact fa-phone-square-alt"></i>886 507 379</span>
                  </div>
                </Paper>
              </Container>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
