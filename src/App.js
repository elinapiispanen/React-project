import logo from './logo.svg';
import './App.css';
import './components/Navigation';
import Navigation from './components/Navigation';
import { createMuiTheme, MuiThemeProvider, CssBaseline, Paper } from '@material-ui/core';
import { lightGreen, grey, brown } from '@material-ui/core/colors'
import SmallCard from './components/config/SmallCard';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Navigation />

        <header className="App-header">
          <p>
            MOI NIKI APINAVAUVA
        </p>
         <SmallCard/>
         <SmallCard/>
         <SmallCard/>

        </header>

      </div>
    </MuiThemeProvider>
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
  }

});

export default App;
