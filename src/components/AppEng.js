import '../App.css';
import { Container, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import one from './css/1.PNG';
import two from './css/2.PNG';
import three from './css/3.PNG';
import four from './css/4.PNG';
import five from './css/5.PNG';
import six from './css/6.PNG';
import flagPol from './css/flaga.png';
import { Link } from 'react-router-dom';



function App() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <>
            <div className="stars" />
            <div className="glow" />
            <div className="App">
                <header className="App-header">
                    <p>
                        My name is Natalia Chrząścik I am a student of computer science in Krakow, specializing in databases.
                        For several years I have been interested in new technologies and my passion is creating web applications. I'm looking for a job as React front-dev.
        </p>
                </header>
                <div className="body">
                    <Container fixed >
                        <Paper className="paper" variant="outlined" style={{ backgroundColor: '#cad6fc' }} >
                            <Link to="/"><span className="flag"><img src={flagPol} style={{ width: '80px' }, { height: '40px' }} /></span></Link>
                            <h1>Technology stack</h1>
                            <div className="stack">
                                <p className="stackOne">Javascript es6</p>
                                <p className="stackOne">Typescript</p>
                                <p className="stackOne">React.js</p>
                                <p className="stackOne">Redux.js</p>
                                <p className="stackOne">node.js</p>
                                <p className="stackOne">express.js</p>
                                <p className="stackOne">rest api</p>
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
                            </div>
                            <h1>Projects</h1>
                            <Card className="root">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image={one}
                                        title="recipes"
                                    />
                                    <CardContent className="content">
                                        <Typography className="contentTech" gutterBottom variant="h6" component="h3">
                                            Typescript, React, Hooks, Ekspress, MongoDB
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Recipe database from which you can obtain recipes by category or add your own recipe.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://recipes-api-rnt.herokuapp.com')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/newRecipeApi')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>

                            <Card className="root">
                                <CardActionArea>
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
                                            An application that proposes activities that make the time in quarantine more pleasant and scores completed tasks.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/-quarantineApp/')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/-quarantineApp')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>

                            <Card className="root">
                                <CardActionArea>
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
                                            Product card and cart mechanism.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/ShopReact/#/')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/ShopReact')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>

                            <Card className="root">
                                <CardActionArea>
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
                                            Weather app for anywhere in the world.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io/weatherApp/')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/weatherApp')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>

                            <Card className="root">
                                <CardActionArea>
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
                                            Design of a store with clothes and accessories with an item filter.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://nataliachrzascik.github.io')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/nataliachrzascik.github.io')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>

                            <Card className="root">
                                <CardActionArea>
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
                                            Application that provides chat with rooms.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="action">
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://stupefied-leakey-6afad3.netlify.app/?fbclid=IwAR3aFXKVs-JWIQhpsrkEepX7E4hwmZKPzcwp_LpypQ1WzKioZfuB3HNqCAg')}>
                                        See the app
        </Button>
                                    <Button size="small" color="primary" onClick={() => openInNewTab('https://github.com/nataliachrzascik/chatAppReact')}>
                                        See code
        </Button>
                                </CardActions>
                            </Card>


                            <h1>Contact</h1>
                            <div className="contactContainer">
                                <span className="foot"><i className="far contact fa-envelope"></i>natalia.chrzascik1@gmail.com</span>
                                <span className="foot"><i className="fab contact fa-github"></i>https://github.com/nataliachrzascik</span>
                                <span className="foot"><i className="fas contact fa-phone-square-alt"></i>886 507 379</span>
                            </div>
                        </Paper>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default App;