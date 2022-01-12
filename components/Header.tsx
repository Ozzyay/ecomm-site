import Link from "next/link";
import { FC, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header: FC = () => {
  const totalItems = useSelector<RootState>(state => state.cart.totalItems);
  return (
      <nav className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-evenly justify-center pt-8 items-center text-white">
        <h1 className="text-2xl font-black">Beautique</h1>
        <ul className="flex gap-8 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/store">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/checkout" passHref={true}>
            {totalItems === 0 ? <div key={Math.random()} className="hover:cursor-pointer"> Cart [{totalItems}]</div> : <div key={Math.random()} className="animate-once hover:cursor-pointer"> Cart [{totalItems}]</div>}
            </Link></li>
        </ul>
      </nav>
  )
};

export default Header;
