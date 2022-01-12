import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const cartTotal = useSelector<RootState>(state => state.cart.totalPrice);
  const checkoutHandler = () => {
    alert("checkout feature implementation coming soon!")
  }
  return <div className="flex flex-col items-center justify-center mt-36 mx-auto w-max gap-8 bg-white px-0 py-2 md:px-8 md:py-4 rounded-xl shadow-xl">
    <p className="font-black text-xl text-center">Your Cart</p>
    {cart.map(elem => <CartItems key={elem.productId} productId={elem.productId} price={elem.price} quantity={elem.quantity} title={elem.title} description={elem.description} img={elem.img} />)}
    <p className="text-center font-bold">Total: {"$" + cartTotal}</p>
    <button className="rounded-xl bg-blue-200 w-max p-2 transition-all duration-500 hover:bg-blue-800 hover:text-white" onClick={checkoutHandler}>Checkout</button>
  </div>
};

export default Cart;