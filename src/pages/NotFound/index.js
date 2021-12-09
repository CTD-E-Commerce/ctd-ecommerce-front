import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function NotFound() {

  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const tick = () => {
      setSeconds(seconds - 1);
    }

    let timer = setInterval(tick, 1000);

    return () => {
      if (seconds === 0) {
        clearInterval(timer);
        navigate("/home")
      }
    };
  }, [seconds, navigate])

  return (
    <div className="error container-fluid d-flex flex-row">
      <div className="container-message">
        <h1>Oops!</h1>
        <h2>404: Nada por aqui!</h2>
        <p>Você será redirecionada(o)</p>
        <p>em {seconds} sedundos :)</p>
      </div>
    </div>
  )
}

export default NotFound;