import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';

const useAxios = (url) => {

  //Define states dos dados requisitados
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(url);

        //Retorno de êxito da requisição - 200
        setData(response.data);
      } catch (error) {

        //Retorno de falha da requisição - 400
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadData();
  }, [url]);

  return data;
}

export default useAxios;