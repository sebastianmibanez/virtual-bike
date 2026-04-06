import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './store/CartDrawer'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on navigation
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const revealAll = () =>
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    revealAll()
    const mo = new MutationObserver(revealAll)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { observer.disconnect(); mo.disconnect() }
  }, [pathname])

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
