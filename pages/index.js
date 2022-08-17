/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 17/08/2022 - 12:56:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/08/2022
 * - Author          : Michael
 * - Modification    :
 **/
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vincent Obbeng</title>
        <meta name="description" content="Vincent Obbeng Fiifi" />
        <link rel="icon" href="" />
      </Head>
      {/* navbar */}
      <Navbar />
      {/* body */}
      <main className="p-5 md:p-12">
        <About />
        <Skills />
      </main>
      {/* footer */}
    </div>
  );
}
