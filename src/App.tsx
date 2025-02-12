import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Brands from '@/components/Brands'
import Features from '@/components/Features'
import Process from '@/components/Process'
import Users from '@/components/Users'
import Blog from '@/components/Blog'
import Cta from '@/components/Cta'
import ReactLenis from 'lenis/react'

const index = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />
        <main>
          <Hero />
          <Brands />
          <Features />
          <Process />
          <Users />
          <Blog />
          <Cta />
        </main>
      </div>
    </ReactLenis>
  )
}

export default index