import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Utilities/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <meta property="og:image" content="https://jobhunt-bangladesh.vercel.app/_next/image?url=%2Fmedia%2Fimg%2FJobHunt-Logo.png&w=256&q=75" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navbar />
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
