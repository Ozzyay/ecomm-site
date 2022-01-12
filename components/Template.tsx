import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Template: FC = ({children}) => {
  return( 
    <div className="flex flex-col min-h-screen">
  <Header></Header>
  {children}
  <Footer></Footer>
  </div>
  )
};


export default Template;
