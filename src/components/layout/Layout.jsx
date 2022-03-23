import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout ({ children }) {
  return (
    <>
      <header></header>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
