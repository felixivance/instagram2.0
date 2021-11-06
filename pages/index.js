import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
   <div className="">
     <Head>
       <title>Instagram 2.0</title>
     </Head>
     {/* header */}
     <Header />
     {/* feed */}
     <Feed />
     {/* modal */}
   </div>  

  )
}
