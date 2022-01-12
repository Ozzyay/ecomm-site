import { useDispatch } from "react-redux";
import { cartActions } from '../store/cartSlice';
interface CartProps {
  productId: string;
  price: number;
  quantity: number;
  title: string;
  description: string;
  img: string;
}

const CartItems = (props: CartProps) => {
  const dispatch = useDispatch()
  const plusHandler = () => {
    const dispatchData = {productId: props.productId}
    dispatch(cartActions.addOne(dispatchData));
  };

  const minusHandler = () => {
    const dispatchData = {productId: props.productId};
    dispatch(cartActions.removeFromCart(dispatchData));
  };
  return <div className="flex justify-center items-center gap-4"><button className="text-2xl transition-all duration-300 rounded-full hover:bg-blue-200 w-[35px] h-[35px] flex items-center justify-center" onClick={minusHandler}>-</button>
  <div className="outline-2 outline-blue-400 outline p-4 rounded-xl w-[222px]">
    <p>{props.title}</p>
    <p>{props.quantity}</p>
    <p>{props.price * props.quantity}</p>
  </div>
  <button className="text-2xl transition-all duration-300 p-2 rounded-full hover:bg-blue-200 w-[35px] h-[35px] flex items-center justify-center" onClick={plusHandler}><p>+</p></button>
  </div>
};


export default CartItems;