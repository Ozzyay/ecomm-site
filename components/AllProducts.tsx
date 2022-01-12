import Product from "./Product";

interface Products {
  productId: string;
  img: string;
  price: number;
  title: string;
  description: string;
}

const AllProducts = (props: {products: Products[]}) => {
  console.log(props.products);
  const mappedProds = props.products.map(elem => 
    <Product key={elem.productId} productId={elem.productId} img={elem.img} price={elem.price} title={elem.title} description={elem.description} />
  )
  return <div className="flex flex-col items-center justify-center mt-16 gap-8">
  {mappedProds}
  </div>
};

export default AllProducts;