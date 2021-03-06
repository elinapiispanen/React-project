import './App.css';
import Navigation from './components/Navigation';
import { createMuiTheme, MuiThemeProvider, CssBaseline, Paper } from '@material-ui/core';
import { lightGreen, grey, brown } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
      <BrowserRouter>
         <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
               <Navigation />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/prod' component={Products} />
                  <Route path='/about' component={AboutUs} />
               </Switch>
            </div>
            <div className="App-footer">
            <Footer/>
            </div>
         </MuiThemeProvider>
      </BrowserRouter>
   );
}

const theme = createMuiTheme({
   palette: {
      primary: { main: '#43a674', contrastText: '#FFFFFF' },
      secondary: { main: '#FFFFFF', contrastText: lightGreen[50] },
      text: { primary: '#43a674', secondary: brown[50] },
   },
   card: {
      marginTop: 30,
      marginLeft: 20,
      width: 250,
      height: 300,
      minWidth: 200,
      minHeight: 250,
      backgroundColor: 'white',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
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
   formContainer: {
      marginTop: 40,
      marginLeft: 20,
      padding: 20,
   },
   paper: {
      zIndex: 1,
      position: 'relative',
      padding: 50,
   },
});

export default App;
