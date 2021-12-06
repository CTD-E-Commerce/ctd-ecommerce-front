import React from 'react';
import './style.scss'
import toTopIcon from "../../assets/to-top.png"

const ToTop = () => {
    return (
        <div>
            <a href="#top">
                <img id="to-top" src={toTopIcon} alt="botão para voltar ao topo da página" />
            </a>
        </div>
    )
}

export default ToTop;
