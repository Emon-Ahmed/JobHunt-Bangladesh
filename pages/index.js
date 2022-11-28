import Head from "next/head";
import Header from "../components/Header/Header";
import Navbar from "../components/Utilities/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Job Hunt - Bangladesh || It's a plartform for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Header/>
      </main>
      <footer></footer>
    </div>
  );
}
