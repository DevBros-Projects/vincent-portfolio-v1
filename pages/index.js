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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vincent Obbeng</title>
        <meta name="description" content="Vincent Obbeng Fiifi" />
        <link rel="icon" href="" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
