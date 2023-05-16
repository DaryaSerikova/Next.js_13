// import Image from 'next/image'
// import styles from './page.module.css'
import Button from '@/components/Button/Button';
import styles from '../styles/Home.module.scss';
import Htag from '@/components/Htag/Htag';

import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import { Noto_Sans, Inter } from '@next/font/google'


// const noto_Sans = Noto_Sans({
//   variable: '--noto-sans-font',
//   weight: ['300', '400', '500', '700'],
//   style: ['normal'],
//   fallback: ['sans-serif'],
//   subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
//   preload: true,
// })

// const inter = Inter({
// subsets: ['latin'],
// variable: '--inter-font',
// preload: true,
// })


export default function Home(): JSX.Element {
  
  return (
    <main className={styles.main}>
      Hello, Next!
      <Htag tag="h1">h1</Htag>
      <Htag tag="h2">h2</Htag>
      <Htag tag="h3">h3
      Lorem ipsum dolor sit amet.</Htag>
      <Button appearance='primary' arrow='right'>Primary button</Button>
      <Button appearance='ghost'>Ghost button</Button>
<div className='div1'>
  <div className='div2'>
    <div className='div3'>
      <div className='div4'>
        <div className='div5'>
          <div className='div6'>
            <div className='div7'>
              <div className='div8'>
                <div className='div9'>
                  <div className='div10'>
                    <div className='div11'>
  <p id='id1' className='cl1'>111</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <p id='id0' className='cl0' style={{color: blue}}>000</p> */}
  <p id='id2' className='cl2'>222</p>
  <p id='id3' className='cl3'>333</p>
</div>
<div className="main"></div>


    </main>
  )
}
