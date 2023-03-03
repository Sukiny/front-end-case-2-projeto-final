import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import Funcionalidades from '../pages/Funcionalidades'
import Login from '../pages/Login'
import AdminFuncionalidades from '../pages/Admin/AdminFuncionalidades'
import AdminSobre from '../pages/Admin/AdminSobre'
import NotFound from '../pages/404'

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/funcionalidades" element={<Funcionalidades />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/funcionalidades" element={<AdminFuncionalidades />} />
            <Route path="/admin/sobre" element={<AdminSobre />} />
            <Route path="*" element={<NotFound/>} />

        </Routes>
    )
}

export default Rotas