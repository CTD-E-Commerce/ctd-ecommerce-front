import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'

export const Item = ({id, produto, descricao, preco, imagem}) => {
    return (
        <>
            <div className="card-produto shadow p-3 mb-5 bg-white rounded" key={id}>
                <img className="item-img" src={imagem} alt="" />
                <div>
                    <h1>{produto}</h1>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                </div>
                <button className="item-btn">Comprar</button>
            </div>
        </>
    )
}