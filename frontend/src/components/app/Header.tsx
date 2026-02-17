







import { Button } from '../ui/button'
import { ChevronDown, Combine, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SidebarTrigger } from '@/components/ui/sidebar'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isDashboard = location.pathname.startsWith("/dashboard")
  const isHomepage = location.pathname === "/"

  // Hide header completely on desktop dashboard
  if (isDashboard && window.innerWidth >= 768) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow">
      <header className="border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Left: SidebarTrigger on mobile dashboard OR Logo */}
            <div className="flex items-center gap-3 ">
              {isDashboard && (
                <div className="md:hidden">
                  <SidebarTrigger />
                </div>
              )}
              <div className="flex items-center  ">
                <div className="w-7 h-7 bg-green-900 rounded-sm flex items-center justify-center mr-2">
                  <Combine className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-semibold text-[#244238]">
                  Clause
                </span>
              </div>
            </div>

            {/* Desktop Nav (homepage only) */}
            {isHomepage && (
              <nav className="hidden md:flex items-center space-x-8 ml-20">
                <div className="flex items-center space-x-1 font-semibold text-[#323534] hover:text-emerald-950 cursor-pointer transition-colors">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1 font-semibold text-[#323534] hover:text-emerald-950 cursor-pointer transition-colors">
                  <span>Customers</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <span className="font-semibold hover:text-emerald-950 text-[#323534] cursor-pointer transition-colors">
                  Pricing
                </span>
              </nav>
            )}

            {/* Desktop Actions (homepage only) */}
            {isHomepage && (
              <div className="hidden md:flex items-center space-x-4">
                <NavLink to="/login">
                  <Button variant="ghost" className="text-green-900 py-6 px-6 bg-white shadow-2xl hover:text-gray-900 ">
                    Log In
                  </Button>
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "bg-green-900 text-white rounded-lg" : ""
                  }
                >
                  <Button className="bg-[#13392c] hover:bg-green-900 text-lime-300 px-6 py-6 shadow-2xl rounded-lg">
                    Start Now
                  </Button>
                </NavLink>
              </div>
            )}

            {/* Mobile Hamburger (homepage only) */}
            {isHomepage && (
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-[#323534] hover:text-emerald-950 transition-colors p-2"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Navigation (homepage only) */}
          {mobileMenuOpen && isHomepage && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center justify-between font-semibold text-[#323534] hover:text-emerald-950 cursor-pointer transition-colors px-2 py-2">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between font-semibold text-[#323534] hover:text-emerald-950 cursor-pointer transition-colors px-2 py-2">
                  <span>Customers</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <span className="font-semibold hover:text-emerald-950 text-[#323534] cursor-pointer transition-colors px-2 py-2">
                  Pricing
                </span>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <NavLink to="/login">
                    <Button
                      variant="ghost"
                      className="text-green-900 py-3 bg-white shadow-lg hover:text-gray-900 transition-colors w-full"
                    >
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      isActive ? "bg-green-900 text-white rounded-lg" : ""
                    }
                  >
                    <Button className="bg-[#13392c] hover:bg-green-900 text-lime-300 px-6 py-6 shadow-2xl rounded-lg w-full">
                      Start Now
                    </Button>
                  </NavLink>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header;








