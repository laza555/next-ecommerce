import type { AppProps } from 'next/app'
import Header from '@/fragments/Header'
import Topnav from '@/fragments/Topnav'
import Footer from '@/fragments/Footer'
import SocketBar from '@/fragments/SocketBar'
import '@/styles/globals.css'
// import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section dir='rtl'>
      {/* <HydrationOverlay> */}
      <section dir='rtl'>
        <Topnav
          lastupdate='Today'
          prices={['$20', '$100']}
          date1='۱۴۰۲/۰۸/۱۰'
          date2='۲۰۲۳/۱۱/۰۱'
        />

        <Header logo_alt='logo'/>

        <Component {...pageProps} />

        <Footer
          logo_alt='logo'
          tel='09025940921'
          email='alireza.ataee01@gmail.com'
          workSchedule='24/7'
          address='Address ...'
          lists={[
            {
              head: {
                title: 'My Brand',
                link: '#'
              },
              items: [
                {
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },
              ]
            },{
              head: {
                title: 'My Brand',
                link: '#'
              },
              items: [
                {
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                },
              ]
            },{
              head: {
                title: 'My Brand',
                link: '#'
              },
              items: [
                {
                  title: 'about us',
                  link: '#'
                },{
                  title: 'about us',
                  link: '#'
                }
              ]
            },
          ]}
        />

        <SocketBar
          medias={[
            {
              name: 'instagram',
              link: '#',
              alt: ''
            },{
              name: 'aparat',
              link: '#',
              alt: ''
            },{
              name: 'linkedin',
              link: '#',
              alt: ''
            },{
              name: 'twitter',
              link: '#',
              alt: ''
            },{
              name: 'youtube',
              link: '#',
              alt: ''
            },{
              name: 'telegram',
              link: '#',
              alt: ''
            },
          ]}
        />
      </section>
    {/* </HydrationOverlay> */}
    </section>
  )
}
