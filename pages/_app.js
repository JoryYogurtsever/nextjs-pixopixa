import Link from 'next/link'
import "../styles/global.css"

export default function App({Component, pageProps}) {
  return (
    <>
      <header
    style={{
      background: `#03cea4`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Pixo Pixa
        </Link>
      </h1>
    </div>
  </header>
  <div style={{background: '#f4f4f4', paddingTop: '10px'}}>
    <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
      <li><Link className="main-nav-link" href="/">Home</Link></li>
      <li><Link className="main-nav-link" href="/products">Products</Link></li>
      <li><Link className="main-nav-link" href="/about">About</Link></li>
      <li><Link className="main-nav-link" href="/blog">Blog</Link></li>
      <li><Link className="main-nav-link" href="/sign-up">Sign Up</Link></li>
    </ul>
    </div>
    <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
    <Component {...pageProps}/>
    </main>
      </div>
        <footer style={{position: "relative", bottom: "0", width: "100%"}}>
          <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly', backgroundColor: "#eab700", width: "100%", margin: "0", minHeight: "5em", paddingTop: "2em", fontSize: "0.7em"}}>
            <li> © {new Date().getFullYear()}, PixoPixa Inc.</li>
            <li><Link className="main-nav-link" href="/terms">Terms and Conditions</Link></li>
            <li><Link className="main-nav-link" href="/about">About Us</Link></li>
            <li><Link className="main-nav-link" href="/contact-us">Contact Us</Link></li>
            <li><Link className="main-nav-link" href="/faq">FAQ</Link></li>
          </ul>
        </footer>
    </>
  )
}