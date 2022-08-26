import { useState } from 'react';
import PropTypes from 'prop-types';

function CakeForm({ submitHandler }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(0);

  const createCake = async (e) => {
    await submitHandler(e, { name, amount, cost });
    setName('');
    setAmount(0);
    setCost(0);
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
      <button type="submit" onClick={createCake}>Submit</button>
    </form>
  );
}

export default CakeForm;

CakeForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
