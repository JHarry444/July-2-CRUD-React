import axios from 'axios';
import { useEffect, useState } from 'react';
import CakeContainer from './CakeContainer';
import CakeForm from './CakeForm';
import Consts from '../data/consts.json';

function Home() {
  const [cakes, setCakes] = useState([]);

  const { API_URL } = Consts;

  useEffect(() => {
    async function getCakes() {
      const { data } = await axios.get(`${API_URL}/cakes/getAllCakes`);
      setCakes(data.map(({ __v, ...cake }) => cake));
    }
    getCakes();
  }, []);

  const submitHandler = async (e, cake) => {
    e.preventDefault();
    const { data: { __v, ...newCake } } = await axios.post(`${API_URL}/cakes/createCake`, cake);
    setCakes([...cakes, newCake]);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`${API_URL}/cakes/removeCake/${id}`);
    setCakes((oldCakes) => oldCakes.filter(({ _id }) => _id !== id));
  };
  return (
    <main style={{ display: 'flex', justifyContent: 'space-around' }}>
      <section>
        <CakeForm submitHandler={submitHandler} />
      </section>
      <section>
        <CakeContainer cakes={cakes} deleteHandler={deleteHandler} />
      </section>
    </main>
  );
}

export default Home;
