import Head from "next/head";
import NavBar from "../components/Frontend/Header/NavBar";
import Headers from "../components/Frontend/Header/Header";
import JobsList from "../components/Frontend/Home/JobsList";
import CandidatesList from "../components/Frontend/Home/CandidatesList";
import HireAndApply from "../components/Frontend/Home/HireAndApply";
import Newsletter from "../components/Frontend/Home/Newsletter";
import Footer from "../components/Frontend/Footer/Footer";
import TrustedCompanyList from "../components/Frontend/Home/TrustedCompanyList";
import RecruitersList from "../components/Frontend/Home/RecruitersList";

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
        <NavBar />
        <Headers />
      </header>

      <main>
        <JobsList />
        <CandidatesList />
        <TrustedCompanyList />
        <RecruitersList />
        <HireAndApply />
        <Newsletter />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
