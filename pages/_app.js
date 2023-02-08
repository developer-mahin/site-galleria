import Navbar from '@/components/Navbar/Navbar'
import RightSideBar from '@/components/RightSideBar/RightSideBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className='grid lg:grid-cols-6 container'>
    <div className='col-span-4'>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
    <div className='col-span-2'>
      <RightSideBar></RightSideBar>
    </div>
  </div>
}
