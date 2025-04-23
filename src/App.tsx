import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import {ThemeProvider} from './context/ThemeContext';
import './App.css'

function App() {
  return (
    <ThemeProvider>
        <AppHeader />
        <AppContent />
    </ThemeProvider>
  );
}

export default App
