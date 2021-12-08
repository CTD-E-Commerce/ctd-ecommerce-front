import { Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import ProdutoSelecionado from "../pages/ProdutoSelecionado"


const RouteList = () => (

    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/home" element={<Home />} />

        {/* Feitos ajustes no path de categorias para evitar conflitos com produtos. revisar demais partes da aplicação */}
        <Route path ="/produtos/categorias/:category" element={<Produtos />} />

        <Route path ="/produtos/:id" element={<ProdutoSelecionado />} />
        <Route path ="/carrinho" element={<Carrinho />} />
    </Routes>
);

export default RouteList;