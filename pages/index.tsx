import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/date`)
//   const data = await res.json()
//   return { props: { dateStringSSG: data.date } }
// }

// interface HomeProps {
//   dateStringSSG: string
// }

export default function Home() {
  const { data: session, status } = useSession();
  const newUser = session?.user?.name
  console.log(session, status);

const userFromGithub = async () => {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
            "data": {
                "name": newUser
            }

    })
  });
    const data = await response.json()
    console.log(data);
}

  return (
    <>
      <Head>
        <title>Camille</title>
      </Head>
      <main>
        <h1>hello</h1>
      </main>
    </>
  )
}

// fetch("/api/user")
// .then((response) => response.json())
// .then((data) => {
//   console.log(data);
// });