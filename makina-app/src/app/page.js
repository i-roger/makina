import Navbar from './navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="gap-10 bg-zinc-600 flex min-h-screen flex-col items-center">
      <div className="bg-zinc-300 rounded p-4">
        <h1 className="text-[50px] text-red-600">Makina</h1>
      </div>

      <section className="w-full flex justify-center items-center bg-zinc-500 py-[60px]">
        <div className="m-4 flex gap-x-10 gap-y-10 flex-wrap justify-center items-center max-w-[900px]">
          <div className="flex flex-col w-60 bg-zinc-800 rounded">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>

          <div className="rounded flex flex-col w-60 bg-zinc-800">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>

          <div className="rounded flex flex-col w-60 bg-zinc-800">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>

          <div className="rounded flex flex-col w-60 bg-zinc-800">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>

          <div className="rounded flex flex-col w-60 bg-zinc-800">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>

          <div className="rounded flex flex-col w-60 bg-zinc-800">
            <h1 className="text-center text-xl">advertising & content</h1>
            <p className="text-center">Entendemos do seu negócio para gerar ótimos resultados, seja 
              online ou offline</p>
          </div>
        </div>
        
      </section>
    </main>
    </>
  );
}
