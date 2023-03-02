import './assets/css/main.css'

import  Header from './components/Header'
import Rodape from './components/Footer'
import Rotas from './routes/Rotas.jsx'
import hero from '/../public/hero-bg.svg'


function App() {
    return (
        <div className="App" >
            <Header />
            <Rotas />
            <Rodape />
        </div>
    )
}

export default App