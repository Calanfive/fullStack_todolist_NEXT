import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/date`)
  const data = await res.json()
  return { props: { dateStringSSG: data.date } }
}

interface HomeProps {
  dateStringSSG: string
}

export default function Home(props : HomeProps) {
  const [date, setDate] = useState<Date | null>(null)
  const { data: session, status } = useSession();

  console.log(session, status);
  

  useEffect(() => {
    setInterval(async () => {
      const res = await fetch(`http://localhost:3000/api/date`)
      const data = await res.json()
      setDate(new Date())
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Camille</title>
      </Head>
      <main>
        <h1>{date && date.toISOString()}</h1>
        <p>{props.dateStringSSG}</p>
      </main>
    </>
  )
}