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
        <meta property="og:image" content="/media/img/JobHunt-Logo.png" />
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
