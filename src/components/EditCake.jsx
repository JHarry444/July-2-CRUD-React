import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Consts from '../data/consts.json';

function EditCake() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    async function getCake() {
      const { data: cake } = await axios.get(`${Consts.API_URL}/cakes/getCake/${id}`);
      setName(cake.name);
      setAmount(cake.amount);
      setCost(cake.cost);
    }
    getCake();
  }, [id]);

  const editHandler = async (e) => {
    e.preventDefault();
    await axios.patch(`${Consts.API_URL}/cakes/updateCake/${id}?name=${name}&cost=${cost}&amount=${amount}`);
    navigate('/');
  };

  return (
    <form>
      <label htmlFor="nameInput">
        Name
        <br />
        <input type="text" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="costInput">
        Cost
        <br />
        <input type="text" id="costInput" value={cost} onChange={(e) => setCost(e.target.value)} />
      </label>
      <label htmlFor="amountInput">
        Amount
        <br />
        <input type="text" id="amountInput" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit" onClick={editHandler}>Submit</button>
    </form>
  );
}

export default EditCake;
