import './App.css';
import Navigation from './components/Navigation';
import { createMuiTheme, MuiThemeProvider, CssBaseline, Paper } from '@material-ui/core';
import { lightGreen, grey, brown } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar';
import Home from './components/Home';
import Moi from './components/config/Moi';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static">
            <Navigation />
          </AppBar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/prod' component={Home} />
            <Route path='/about' component={Moi} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: { main: '#43a674', contrastText: '#FFFFFF' },
    secondary: { main: grey[900], contrastText: lightGreen[50] },
    text: { primary: brown[800], secondary: brown[50] },
  },
  card: {
    marginTop: 30,
    marginLeft: 20,
    width: 250,
    height: 300,
    minWidth: 200,
    minHeight: 250,
    backgroundColor: 'white'
  },
  redbutton: {
    margin: 10,
    padding: 10,
    backgroundColor: 'red'
  },
  greenbutton: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightGreen',
    color: 'white',
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginBottom: 10

  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'],
    color: 'black',
    marginTop: 10,
    marginLeft: 30,
  },
  formContainer: {
    marginTop: 40,
    marginLeft: 20,
    padding: 20,
  }

});

export default App;
