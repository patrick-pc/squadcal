import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>SquadCal</title>
        <meta name="description" content="Easily schedule game sessions with your squad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen w-full items-center justify-center">
          <Link href="/buildspace">
            <button className="rounded-lg bg-black px-4 py-2 text-white">buildspace guild</button>
          </Link>
        </div>
      </main>
    </>
  )
}
