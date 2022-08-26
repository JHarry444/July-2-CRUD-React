import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Cake from './Cake';

function CakeContainer({ cakes, deleteHandler }) {
  const navigate = useNavigate();
  return (
    <>
      {cakes.map(({
        _id, amount, name, cost,
      }) => (
        <Cake
          key={_id}
          amount={amount}
          cost={cost}
          name={name}
          deleteHandler={() => deleteHandler(_id)}
          editHandler={() => navigate(`/cake/${_id}`)}
        />
      ))}
    </>
  );
}

export default CakeContainer;

CakeContainer.propTypes = {
  cakes: PropTypes.arrayOf(PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
