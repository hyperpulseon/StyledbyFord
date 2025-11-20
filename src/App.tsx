import { ThemeProvider } from './ThemeContext'
import Home from './pages/Home'
import './App.css'
import './Style.css'

function App() {
    return (
        <ThemeProvider>
            <Home />
        </ThemeProvider>
    )
}

export default App
