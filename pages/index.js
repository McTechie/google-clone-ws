import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <p className='mt-10 text-center text-3xl font-bold text-slate-400'>
        Let&#39;s Build...
      </p>

      <h1 className='text-9xl text-center mt-[180px]'>
        <span className='text-sky-500'>G</span>
        <span className='text-rose-500'>o</span>
        <span className='text-amber-500'>o</span>
        <span className='text-sky-500'>g</span>
        <span className='text-green-500'>l</span>
        <span className='text-rose-500'>e</span>
      </h1>

      <h3 className='text-2xl text-center mt-20 text-slate-400'>
        using <span className='font-bold underline text-black'>Next.js</span> and&nbsp; 
        <span className='font-bold underline text-sky-500'>Tailwind CSS</span>!
      </h3>
    </div>
  )
}
