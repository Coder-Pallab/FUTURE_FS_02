const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-100 px-6 md:px-16 lg:px-24 xl:px-32">
      
      <div className="flex flex-col md:flex-row gap-10 py-12 border-b border-gray-300">

        {/* Brand Info */}
        <div className="md:w-1/3">
          <h1 className="text-4xl italic font-bold text-primary">OneBuy</h1>
          <p className="mt-5 text-gray-600 max-w-sm">
            OneBuy is your one-stop online shopping destination. 
            Shop electronics, fashion, groceries, home essentials and more 
            with fast delivery, secure payments, and easy returns.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-2/3 gap-8 text-gray-600">

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Mobiles</a></li>
              <li><a href="#" className="hover:underline">Fashion</a></li>
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Home & Furniture</a></li>
              <li><a href="#" className="hover:underline">Grocery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Orders</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About OneBuy</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} OneBuy. All Rights Reserved.  
        <br />
        Built by{" "}
        <a
          href="https://fullstackpallab.vercel.app"
          className="underline hover:text-primary"
        >
          Pallab Duarah
        </a>
      </div>

    </footer>
  )
}

export default Footer
