import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import { likeProduce } from '../../store/produce';

function ProduceDetails({ produce, setShowCart }) {
  const cartItem = {};
  const dispatch = useDispatch();
  const [updater, setUpdater] = useState(false);

  useEffect(() => {}, [produce]);

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => {
            dispatch(likeProduce(produce.id));
            setUpdater(!updater);
          }}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={(e) => {
            setShowCart(true);
            dispatch(addToCart(produce.id))}
          }
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
