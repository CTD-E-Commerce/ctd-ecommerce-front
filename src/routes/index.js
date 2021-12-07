import { Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import ProdutoSelecionado from "../pages/ProdutoSelecionado"


const RouteList = () => (

    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/home" element={<Home />} />
        <Route path ="/produtos" element={<Produtos />} />
        <Route path ="/produtos/:category" element={<Produtos />} />
        <Route path ="/produtos/:id" element={<ProdutoSelecionado />} /> {/* Ir para detalhes do produto */}
        <Route path ="/carrinho" element={<Carrinho />} />

        {/* rota teste para construir página-modelo para produto selecionado */}
        <Route path ="/produtos/teste" element={<ProdutoSelecionado />} />

    </Routes>
);

export default RouteList;