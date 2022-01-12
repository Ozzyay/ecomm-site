import { NextPage } from "next";
import Head from "next/head";
import Cart from "../../components/Cart";
import Template from "../../components/Template";

const Checkout: NextPage = () => {
  return <Template>
    <Head>
      <title>Checkout</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Cart />
  </Template>
};

export default Checkout
