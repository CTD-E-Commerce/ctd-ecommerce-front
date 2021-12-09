import { CartState } from '../../../context/Context.js';
import { Link } from 'react-router-dom';
import './style.scss';

const Item = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    return (
        <div className="card-produto" key={prod.id}>
            <Link to={"/produtos/" + prod.id}>
                <img className="item-img" src={prod.image} alt="" />
            </Link>
            <div className="item-description">
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
                }} className="item-btn">Remover</button>
            ) : (<button onClick={() => {
                dispatch({
                    type: "ADD_TO_CART",
                    payload: prod
                })
            }} className="item-btn">Comprar</button>)
            }
        </div>
    )
}

export default Item;