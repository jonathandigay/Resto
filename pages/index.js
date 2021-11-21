import Head from "next/head";
import { Container } from "react-bootstrap";

import Banner from "../components/Home/banner";
import FeaturedDish from "../components/Home/featureddish";
import Testimonial from "../components/Home/testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Resto | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
        <script
          src="https://kit.fontawesome.com/fe2e019d14.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="home">
        <Banner />
        <FeaturedDish />

        <Testimonial />
      </div>
    </div>
  );
}
