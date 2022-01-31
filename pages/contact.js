import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import bg from "../public/assets/banner1.jpg";
import { useAuthContext } from "../context/AuthProvider";
export default function Contact() {
  const { currentUser } = useAuthContext();
  return (
    <div>
      <Head>
        <title>Resto | Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe2e019d14.js"
        crossOrigin="anonymous"
      ></Script>

      <div className="contacts">
        <h1>Contact us</h1>

        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="bg"
          alt="img"
        />

        <form>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="First Name..."
              value={currentUser && currentUser.displayName}
            />
          </div>
          <div className="input-group">
            <label>Email </label>
            <input
              type="text"
              placeholder="First Name..."
              value={currentUser && currentUser.email}
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea type="text" placeholder="Your Concern..." />
          </div>
          <div className="btn">
            <button type="button" onClick={() => location.reload()}>
              Send up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}