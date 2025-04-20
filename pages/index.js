
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <Head>
        <title>Luxus Ágynemű</title>
      </Head>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-2">Exkluzív Méretre Szabható Ágyneműk</h1>
        <p className="text-lg text-gray-600">Tervezze meg álmai ágyneműjét – luxus anyagok, kifinomult színek, egyedi méretek.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-4">Testreszabás</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="material" className="block mb-1">Anyag</label>
              <select id="material" className="w-full p-2 border rounded">
                <option>Pamut (2655 Ft/m)</option>
                <option>Lenvászon (6360 Ft/m)</option>
              </select>
            </div>
            <div>
              <label htmlFor="color" className="block mb-1">Szín</label>
              <input id="color" className="w-full p-2 border rounded" placeholder="Pl.: hófehér, szürkésbézs..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="width" className="block mb-1">Szélesség (cm)</label>
                <input id="width" type="number" className="w-full p-2 border rounded" placeholder="Pl.: 140" />
              </div>
              <div>
                <label htmlFor="length" className="block mb-1">Hosszúság (cm)</label>
                <input id="length" type="number" className="w-full p-2 border rounded" placeholder="Pl.: 220" />
              </div>
            </div>
            <button className="w-full bg-black text-white p-2 rounded mt-4">Árajánlat kérése</button>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Miért válasszon minket?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Centiméterre pontos méretre szabás</li>
            <li>Minőségi prémium anyagok</li>
            <li>Letisztult, elegáns stílus</li>
            <li>Online rendelés, házhoz szállítás</li>
          </ul>
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LuxusÁlom. Minden jog fenntartva.
      </footer>
    </div>
  )
}
