import { NextPage } from "next";
import Head from "next/head";
import Template from "../../components/Template";

const About: NextPage = () => {
  return <Template>
    <Head>
      <title>About Beautique</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="mt-36 flex items-center justify-center mx-8 md:mx-0">
    <p className="text-amber-600 max-w-[75ch] text-center">Here at Beautique, we are dedicated to providing the highest quality skincare and makeup products without resorting to animal cruelty or testing. Based out of Australia, all our products ship internationally and only use scientifically tested and backed ingredients.</p>
    </div>
  </Template>
};

export default About;