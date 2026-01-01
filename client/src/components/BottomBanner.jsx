import React from 'react'

const features = [
  {
    title: "Free Fast Delivery",
    description: "Free delivery on all orders above ₹499",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
  },
  {
    title: "Secure Payments",
    description: "100% secure payment with SSL encryption",
    icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days",
    icon: "https://cdn-icons-png.flaticon.com/512/929/929426.png",
  },
  {
    title: "24/7 Customer Support",
    description: "Friendly support anytime you need",
    icon: "https://cdn-icons-png.flaticon.com/512/3059/3059518.png",
  },
]

const BottomBanner = () => {
  return (
    <div className="mt-24 bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 md:px-20 rounded-xl">
      
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-12">
        Why Shop With Us?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-14 h-14 mb-4"
            />
            <h3 className="text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BottomBanner
