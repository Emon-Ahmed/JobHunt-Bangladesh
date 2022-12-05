import Head from "next/head";
import Header from "../components/Header/Header";
import JobsList from "../components/JobsList";
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
        <meta
          property="og:image"
          content="https://jobhunt-bangladesh.vercel.app/media/img/JobHunt.png"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <JobsList />
      </main>
      <footer></footer>
    </div>
  );
}
