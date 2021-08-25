import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.scss';
import './assets/scss/styles.scss';
import "react-toggle/style.css"
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRoute } from './routes';


function App() {
  
  
  return (
    <ThemeProvider>
      <Router>
        <AppRoute />
      </Router>
    </ThemeProvider>
  );
}

export default App;
