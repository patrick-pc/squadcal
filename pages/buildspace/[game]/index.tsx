import Head from 'next/head'
import { toast } from 'react-hot-toast'

export default function Game() {
  return (
    <>
      <Head>
        <title>Create Session</title>
        <meta name="description" content="Create game session" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen w-full items-center justify-center gap-16">
          <div className="flex w-full max-w-sm flex-col gap-8">
            <div className="flex w-full flex-col gap-3 rounded-lg border border-zinc-300 p-6 text-sm">
              <div className="flex items-center gap-2">
                <h3>Session:</h3>
                <input
                  className="h-8 w-full rounded border border-zinc-300 px-2 focus:outline-none"
                  type="text"
                  placeholder="Christmas Grind"
                />
              </div>
              <div className="flex items-center gap-2">
                <h3>When:</h3>
                <div className="flex w-full items-center justify-evenly">
                  <button>Now</button>
                  <button className="underline">Today</button>
                  <button>Tomorrow</button>
                  <button>Sat 24</button>
                  <button>Sun 25</button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3>At:</h3>
                  <select
                    className="h-6 w-full rounded border border-zinc-300 focus:outline-none"
                    defaultValue="04"
                  >
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  <select className="h-6 w-full rounded border border-zinc-300 focus:outline-none">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <h3>For:</h3>
                  <button>1</button>
                  <button className="underline">2</button>
                  <button>3</button>
                  <button>4</button>
                  Hours
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h3>Invite:</h3>
                <input
                  className="h-8 w-full rounded border border-zinc-300 px-2 focus:outline-none"
                  type="text"
                  placeholder="@ando @tair @raza"
                />
              </div>
              <button
                className="mt-4 w-full rounded-lg bg-black py-2 text-white"
                onClick={() => toast.success('Invite sent!')}
              >
                Create Session
              </button>
            </div>

            <img className="h-60 w-full rounded-lg object-cover" src="/img/lol.png" />
          </div>

          <div className="flex w-[300px] flex-col items-center justify-center">
            <div className="mb-4 flex w-[300px] justify-end gap-2 text-xs">
              <button className="underline">List View</button>|<button>Calendar View</button>
            </div>

            <div className="flex w-full flex-col gap-4">
              <h3 className="font-medium">
                Dec 23 <span className="text-zinc-400">Friday</span>
              </h3>
              <div className="flex items-start justify-between gap-2">
                <p>4:00 PM</p>
                <div className="flex gap-8">
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
              </div>
            </div>
            <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
            <div className="flex w-full flex-col gap-4">
              <h3 className="font-medium">
                Dec 24 <span className="text-zinc-400">Saturday</span>
              </h3>
              <div className="flex items-start justify-between gap-2">
                <p>4:00 PM</p>
                <div className="flex gap-8">
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
              </div>
            </div>
            <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
            <div className="flex w-full flex-col gap-4">
              <h3 className="font-medium">
                Dec 25 <span className="text-zinc-400">Sunday</span>
              </h3>
              <div className="flex items-start justify-between gap-2">
                <p>4:00 PM</p>
                <div className="flex gap-8">
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
              </div>
            </div>
            <div className="mt-8 mb-4 w-full border-b border-zinc-300"></div>
          </div>
        </div>
      </main>
    </>
  )
}
