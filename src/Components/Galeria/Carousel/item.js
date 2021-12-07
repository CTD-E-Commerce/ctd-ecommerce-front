import 'bootstrap/dist/css/bootstrap.min.css';
import {CartState} from '../../../context/Context.js';
import './style.scss'

const Item = ({prod}) => {

    const {
            state: {cart},
            dispatch,
         } = CartState();

    console.log(cart);

    return (
        <div className="card-produto shadow p-3 mb-5 rounded" key={prod.id}>
                <img className="item-img" src={prod.image} alt="" />
                <div>
                    <h1>{prod.title}</h1>
                    <p>{prod.shortdescription}</p>
                    <span>R$ {prod.price}</span>
                </div>

                {cart.some(p => p.id === prod.id) ? (
                        <button onClick={() => {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        })
                    }} className="item-btn">Remover do carrinho</button>
                    ) : (<button onClick={() => {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: prod
                        })
                    }} className="item-btn">Adicionar ao carrinho</button>)
                }                
            </div>
    )
}

export default Item;