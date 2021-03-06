import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import SobreNos from '../pages/SobreNos/SobreNos';
import Carrinho from "../pages/Carrinho/index";
import ProdutoSelecionado from "../pages/ProdutoSelecionado"
import NotFound from '../pages/NotFound';


const RouteList = () => (

        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/produtos/categorias/:category" element={<Produtos />} />
                <Route path="/produtos/:id" element={<ProdutoSelecionado />} />
                <Route path="/sobrenos" element={<SobreNos />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="*" element={<NotFound />} />
        </Routes>
);

export default RouteList;