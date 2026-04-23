import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './store/CartDrawer'

function getSessionId(): string {
  let sid = sessionStorage.getItem('_vbk_sid')
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('_vbk_sid', sid)
  }
  return sid
}

export default function Layout() {
  const { pathname } = useLocation()
  const prevPath = useRef<string>('')

  // Scroll to top on navigation
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  // Page visit tracking
  useEffect(() => {
    if (pathname === prevPath.current) return
    prevPath.current = pathname
    const payload = {
      path: pathname,
      referrer: document.referrer || '',
      session_id: getSessionId(),
    }
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => { /* silently ignore */ })
  }, [pathname])

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-[68px]">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
