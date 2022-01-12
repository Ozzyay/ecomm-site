import { NextPage } from "next";
import Head from "next/head";
import AllProducts from "../../components/AllProducts";
import Loading from "../../components/Loading";
import Template from "../../components/Template";
import useProducts from "../../hooks/useProducts";

const Products: NextPage = () => {
  const [data, error, loading] = useProducts();
  return <Template>
    <Head>
      <title>Products</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {loading && <Loading/>}
    {data && <AllProducts products={data}/>}
    {!loading && !data && error && <p className="text-red-500 flex items-center justify-center mt-[15vh]">An error has occured...Please try again.</p>}

  </Template>
};


export default Products;