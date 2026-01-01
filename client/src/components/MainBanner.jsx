import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const banners = [
  {
    desktop: 'https://images.unsplash.com/photo-1633464129147-777bdcc97c1d',
    mobile: 'https://images.unsplash.com/photo-1633464129147-777bdcc97c1d',
  },
  {
    desktop: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc',
    mobile: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc',
  },
  {
    desktop: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
    mobile: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db',
  },
]

const MainBanner = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-md">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((item, index) => (
          <div key={index} className="min-w-full">
            <img
              src={item.desktop}
              className="w-full h-[500px] object-cover hidden md:block"
              alt="banner"
            />
            <img
              src={item.mobile}
              className="w-full h-[400px] object-cover md:hidden"
              alt="banner"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 bg-black/30">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left max-w-xl">
          Everything at Your Doorstep
        </h1>

        <div className="flex gap-4 mt-6">
          <Link
            to="/products"
            className="px-8 py-3 bg-blue-950 hover:bg-blue-500 transition text-white rounded"
          >
            Shop Now
          </Link>

          <Link
            to="/products"
            className="hidden md:block px-8 py-3 bg-white text-black rounded"
          >
            Explore Deals
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default MainBanner
