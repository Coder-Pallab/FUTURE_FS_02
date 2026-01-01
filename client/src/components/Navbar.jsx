import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const [searchFocused, setSearchFocused] = React.useState(false)
  const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, axios } = useAppContext()

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout')
      if(data.success){
        toast.success(data.message)
        setUser(null)
        navigate('/')
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products")
    }
  }, [searchQuery])

  return (
    <>
      {/* Backdrop for mobile menu */}
      {open && (
        <div 
          onClick={() => setOpen(false)} 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Main Navbar */}
      <nav className="bg-slate-900 sticky top-0 z-50 shadow-md">
        {/* Top Bar */}
        <div className="border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16">
              
              {/* Logo */}
              <NavLink to="/" className="flex-shrink-0">
                <img 
                  src="./OneBuy logo.png" 
                  alt="Logo" 
                  className="h-8 sm:h-10 w-40"
                />
              </NavLink>

              {/* Search Bar - Desktop & Tablet */}
              <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
                <div className={`flex w-full rounded-md overflow-hidden transition-all ${searchFocused ? 'ring-2 ring-orange-400' : ''}`}>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="flex-1 px-4 py-2.5 bg-white text-slate-900 outline-none placeholder-slate-500 text-sm"
                    type="text"
                    placeholder="Search for products, brands and more"
                  />
                  <button className="px-5 bg-orange-500 hover:bg-orange-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 sm:gap-4">
                
                {/* User Account - Desktop */}
                {!user ? (
                  <button
                    onClick={() => setShowUserLogin(true)}
                    className="hidden md:flex items-center gap-1 px-3 py-2 hover:border border-white/30 rounded transition group"
                  >
                    <div className="text-white text-left">
                      <div className="text-xs text-slate-300">Hello, Sign in</div>
                      <div className="text-sm font-semibold">Account & Lists</div>
                    </div>
                  </button>
                ) : (
                  <div className="hidden md:block relative group">
                    <button className="flex items-center gap-1 px-3 py-2 hover:border border-white/30 rounded transition">
                      <div className="text-white text-left">
                        <div className="text-xs text-slate-300">Hello, {user.name}</div>
                        <div className="text-sm font-semibold flex items-center gap-1">
                          Account & Lists
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* Dropdown */}
                    <div className="absolute right-0 mt-1 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        <button
                          onClick={() => navigate("my-orders")}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-3"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          My Orders
                        </button>
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-3 border-t"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Orders - Desktop */}
                {user && (
                  <button
                    onClick={() => navigate("my-orders")}
                    className="hidden lg:flex items-center px-3 py-2 hover:border border-white/30 rounded transition"
                  >
                    <div className="text-white text-left">
                      <div className="text-xs text-slate-300">Returns</div>
                      <div className="text-sm font-semibold">& Orders</div>
                    </div>
                  </button>
                )}

                {/* Cart */}
                <button
                  onClick={() => navigate("/cart")}
                  className="relative flex items-center gap-2 px-2 sm:px-3 py-2 hover:border border-white/30 rounded transition group"
                >
                  <div className="relative">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {getCartCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {getCartCount()}
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:block text-white text-sm font-semibold">Cart</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="md:hidden p-2 text-white hover:bg-slate-800 rounded"
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {open ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Desktop */}
        <div className="hidden md:block bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-10 h-10 text-sm">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-orange-400 transition font-medium ${isActive ? 'text-orange-400' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-white hover:text-orange-400 transition font-medium ${isActive ? 'text-orange-400' : ''}`
                }
              >
                All Products
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white hover:text-orange-400 transition font-medium ${isActive ? 'text-orange-400' : ''}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden border-t border-slate-700 px-4 py-2">
          <div className={`flex rounded-md overflow-hidden ${searchFocused ? 'ring-2 ring-orange-400' : ''}`}>
            <input
              
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 px-3 py-2 bg-white text-slate-900 outline-none placeholder-slate-500 text-sm"
              type="text"
              placeholder="Search products"
            />
            <button className="px-4 bg-orange-500">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white font-semibold">
                {user ? user.name.charAt(0).toUpperCase() : '👤'}
              </div>
              <div className="text-white">
                <div className="text-sm font-semibold">
                  {user ? `Hello, ${user.name}` : 'Hello, Sign in'}
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          
          <div className="flex-1 overflow-y-auto">
            <div className="py-4">
              <div className="px-6 py-2 text-xs font-semibold text-slate-500 uppercase">Navigation</div>
              
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:bg-slate-100 border-b border-slate-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Home</span>
              </NavLink>

              <NavLink
                to="/products"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:bg-slate-100 border-b border-slate-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="font-medium">All Products</span>
              </NavLink>

              {user && (
                <NavLink
                  to="/my-orders"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:bg-slate-100 border-b border-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="font-medium">My Orders</span>
                </NavLink>
              )}

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:bg-slate-100 border-b border-slate-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Contact</span>
              </NavLink>
            </div>

            {/* Account Section */}
            <div className="border-t-8 border-slate-200 py-4">
              <div className="px-6 py-2 text-xs font-semibold text-slate-500 uppercase">Account</div>
              
              {!user ? (
                <button
                  onClick={() => {
                    setOpen(false)
                    setShowUserLogin(true)
                  }}
                  className="w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-100 font-medium"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false)
                    logout()
                  }}
                  className="flex items-center gap-3 w-full text-left px-6 py-3 text-slate-700 hover:bg-slate-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Sign Out</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar