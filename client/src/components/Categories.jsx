import React from 'react'
import { useAppContext } from '../context/AppContext'

const categories = [
  {
    text: "Mobiles",
    path: "mobiles",
    image: "https://cdn-icons-png.flaticon.com/512/186/186239.png",
    bgColor: "#EAF2FF",
  },
  {
    text: "Fashion",
    path: "fashion",
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    bgColor: "#FFF0F5",
  },
  {
    text: "Electronics",
    path: "electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    bgColor: "#F3F4F6",
  },
  {
    text: "Home & Furniture",
    path: "home",
    image: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
    bgColor: "#F0FFF4",
  },
  {
    text: "Appliances",
    path: "appliances",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    bgColor: "#FFFDEA",
  },
  {
    text: "Beauty",
    path: "beauty",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    bgColor: "#FFF5EE",
  },
  {
    text: "Grocery",
    path: "grocery",
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    bgColor: "#F0FFF0",
  },
  {
    text: "Sports",
    path: "sports",
    image: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
    bgColor: "#F0F8FF",
  },
  {
    text: "Books",
    path: "books",
    image: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
    bgColor: "#FAF5FF",
  },
  {
    text: "Toys",
    path: "toys",
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png",
    bgColor: "#FFF7ED",
  },
]

const Categories = () => {
  const { navigate } = useAppContext()

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium mb-6">
        Shop by Category
      </p>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-1">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${category.path}`)
              scrollTo(0, 0)
            }}
            style={{ backgroundColor: category.bgColor }}
            className="min-w-[120px] cursor-pointer flex flex-col items-center justify-center gap-2 p-4 rounded-xl hover:scale-105 transition"
          >
            <img
              src={category.image}
              alt={category.text}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm font-medium text-center">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
