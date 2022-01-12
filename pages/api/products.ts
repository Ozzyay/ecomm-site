import type { NextApiRequest, NextApiResponse } from 'next'


interface Product {
  productId: string;
  img: string;
  price: number;
  title: string;
  description: string;
}

const dummyData: Product[] = [{
  productId: "1",
  img: 'https://picsum.photos/200',
  price: 30,
  title: "Beautique Unique Mascara",
  description: "Let your lashes come to life...A once in a lifetime mascara created by the experts working in the labs of Beautique. Certified Cruelty-Free."
},
{
  productId: "2",
  img: "https://picsum.photos/200",
  price: 46,
  title: "Beautique Special Serum",
  description: "Feel young again...A once in a lifetime age rejuvenation serum created by the experts working in the labs of Beautique. Certified Cruelty-Free."
},
{
  productId: "3",
  img: "https://picsum.photos/200",
  price: 100,
  title: "Beautique Starter Kit",
  description: "Contains samples of all our specialised products, enough for daily usage for 4 weeks. Certified Cruelty-Free."
}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(dummyData);
}
