import Image from "next/image";
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice';
import { CartDispatch } from "../store/store";
interface ProductProps {
  productId: string;
  img: string;
  price: number;
  title: string;
  description: string;
}

const Product = ({productId, img, price, title, description}:ProductProps) => {
  const itemPrice = "$" + price.toString()
  const dispatch = useDispatch<CartDispatch>();
  const addToCartHandler = () => {
    const toDispatch = {productId, img, price, title, description, quantity: 1}
    dispatch(cartActions.addToCart(toDispatch));
  };

  return (<div className="flex justify-between items-center w-[300px] md:w-[600px] h-auto md:h-[200px] gap-8 outline-4 outline outline-[rgba(255,255,255,0.2)] rounded-xl shadow-xl px-4">
    <div className="flex flex-col items-start gap-2">
    <p className="text-white">{title}</p>
    <p className="text-orange-300">{itemPrice}</p>
    <p className="text-amber-300">{description}</p>
    <button type="button" onClick={addToCartHandler} className="py-1 px-2 bg-emerald-800 rounded-xl text-white transition-all hover:bg-sky-900 duration-300" >Add to Cart</button>
    </div>
    <div className="flex w-max h-max shrink-0">
    <Image src={img} alt={title} width="100px" height="100px" className="rounded-full"></Image>
    </div>
  </div>)
};

export default Product;