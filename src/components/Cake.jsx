import PropTypes from 'prop-types';

function Cake({
  name, cost, amount, deleteHandler, editHandler,
}) {
  return (
    <div>
      <p>{`Name: ${name}`}</p>
      <p>{`Cost: ${cost}`}</p>
      <p>{`Amount: ${amount}`}</p>
      <button type="button" onClick={editHandler}>Edit</button>
      <button type="button" onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default Cake;

Cake.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
};
