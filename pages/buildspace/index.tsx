import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'

export default function Buildspace() {
  const [showGames, setShowGames] = useState(true)

  return (
    <>
      <Head>
        <title>buildspace</title>
        <meta name="description" content="buildspace guild" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto my-24">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <img className="h-40 w-40 rounded-full" src="/img/buildspace.jpeg" />
              <h1 className="mb-2 text-3xl font-semibold">buildspace</h1>
            </div>

            {/* <div className="flex w-[600px] items-center justify-between text-sm">
              <p className="font-medium">Guild Leader: Farza</p>
              <a href="https://discord.gg/buildspace" target="_blank">
                <img className="h-5 w-5" src="/img/discord.png" />
              </a>
            </div> */}

            <div className="flex w-[600px] justify-end gap-2 text-sm">
              <button className={`${showGames && 'underline'}`} onClick={() => setShowGames(true)}>
                Games
              </button>
              |
              <button
                className={`${!showGames && 'underline'}`}
                onClick={() => setShowGames(false)}
              >
                Sessions
              </button>
            </div>

            {showGames ? (
              <div className="flex w-[600px] flex-col items-center justify-center rounded-lg border border-zinc-300">
                <Link
                  href="/buildspace/lol"
                  className="flex w-full items-center justify-between gap-4 border-zinc-300 p-4 hover:bg-zinc-100"
                >
                  <div className="flex items-center gap-4">
                    <img className="h-24 w-24 rounded-md" src="/img/lol.png" />
                    <h2 className="text-lg font-medium">League of Legends</h2>
                  </div>
                  <div className="flex -space-x-4">
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/farza.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/ando.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/raza.jpeg"
                    />
                  </div>
                </Link>

                <Link
                  href="/buildspace/lol"
                  className="flex w-full items-center justify-between gap-4 border-t border-zinc-300 p-4 hover:bg-zinc-100"
                >
                  <div className="flex items-center gap-4">
                    <img className="h-24 w-24 rounded-md" src="/img/valorant.png" />
                    <h2 className="text-lg font-medium">Valorant</h2>
                  </div>
                  <div className="flex -space-x-4">
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/alex.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/farza.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/farhaj.jpeg"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 ring-4 ring-white">
                      <span>+3</span>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/buildspace/lol"
                  className="flex w-full items-center justify-between gap-4 border-t border-zinc-300 p-4 hover:bg-zinc-100"
                >
                  <div className="flex items-center gap-4">
                    <img className="h-24 w-24 rounded-md" src="/img/apex.png" />
                    <h2 className="text-lg font-medium">Apex Legends</h2>
                  </div>
                  <div className="flex -space-x-4">
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/farhaj.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/tair.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/ando.jpeg"
                    />
                  </div>
                </Link>

                <Link
                  href="/buildspace/lol"
                  className="flex w-full items-center justify-between gap-4 border-t border-zinc-300 p-4 hover:bg-zinc-100"
                >
                  <div className="flex items-center gap-4">
                    <img className="h-24 w-24 rounded-md" src="/img/dota2.png" />
                    <h2 className="text-lg font-medium">Dota 2</h2>
                  </div>
                  <div className="flex -space-x-4">
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/farza.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/alex.jpeg"
                    />
                    <img
                      className="h-12 w-12 rounded-full ring-4 ring-white"
                      src="/img/tair.jpeg"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 ring-4 ring-white">
                      <span>+5</span>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex w-[600px] flex-col items-center justify-center">
                <div className="flex w-full flex-col gap-4">
                  <h3 className="font-medium">
                    Dec 23 <span className="text-zinc-400">Friday</span>
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-8">
                      <p>4:00 PM</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex -space-x-2">
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/farza.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/ando.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/raza.jpeg"
                          />
                        </div>
                        <h4 className="text-lg font-medium">LOL: Grind</h4>
                        <span className="flex items-center gap-2 text-xs text-zinc-400">
                          Created by farza
                        </span>
                      </div>
                    </div>
                    <img
                      className="h-24 w-40 rounded-lg bg-center object-cover"
                      src="/img/lol.png"
                    />
                  </div>
                </div>
                <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
                <div className="flex w-full flex-col gap-4">
                  <h3 className="font-medium">
                    Dec 24 <span className="text-zinc-400">Saturday</span>
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-8">
                      <p>4:00 PM</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex -space-x-2">
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/farza.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/ando.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/raza.jpeg"
                          />
                        </div>
                        <h4 className="text-lg font-medium">LOL: Grind</h4>
                        <span className="flex items-center gap-2 text-xs text-zinc-400">
                          Created by farza
                        </span>
                      </div>
                    </div>
                    <img
                      className="h-24 w-40 rounded-lg bg-center object-cover"
                      src="/img/lol.png"
                    />
                  </div>
                </div>
                <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
                <div className="flex w-full flex-col gap-4">
                  <h3 className="font-medium">
                    Dec 25 <span className="text-zinc-400">Sunday</span>
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-8">
                      <p>4:00 PM</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex -space-x-2">
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/farza.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/ando.jpeg"
                          />
                          <img
                            className="h-8 w-8 rounded-full ring-4 ring-white"
                            src="/img/raza.jpeg"
                          />
                        </div>
                        <h4 className="text-lg font-medium">LOL: Grind</h4>
                        <span className="flex items-center gap-2 text-xs text-zinc-400">
                          Created by farza
                        </span>
                      </div>
                    </div>
                    <img
                      className="h-24 w-40 rounded-lg bg-center object-cover"
                      src="/img/lol.png"
                    />
                  </div>
                </div>
                <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
