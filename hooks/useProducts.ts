import {useState, useEffect} from 'react';
import axios from 'axios';

interface Product {
  productId: string;
  img: string;
  price: number;
  title: string;
  description: string;
}

const useProducts = () => {
  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const fetchedData: {data: Product[]} = await axios.get('/api/products');
        if (!fetchedData) {
          throw new Error("Fetch Error");
        }
        const returnData = fetchedData.data;
        setData(returnData);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
      }
    }
    fetch();
  }, [])

  return [data, loading, error] as const;
};

export default useProducts;