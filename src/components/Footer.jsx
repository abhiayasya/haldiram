export default function Footer() {
  return (
    <footer className="bg-[#fff2e2] text-black text-sm">
      <div className="mx-auto px-6 pt-10 pb-6">
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className=" border-gray-300 pb-8 lg:border-r border-b grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-1 max-lg:items-center w-full">
            <div className="lg:pr-8">
              <img
                src="https://www.haldiram.com/Haldiram_Logo-9GN.png"
                alt="Haldiram's"
                className="w-48 mb-4"
              />
              <h2 className="text-3xl font-light text-red-600">
                With Love, From Haldiram's
              </h2>
              <p className="text-xl">
                Subscribe to our newsletter for Haldiram's offers.
              </p>
              <div className="mt-4 flex gap-4 text-xl items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-4 max-w-[500px] w-full border-2 border-red-500 rounded-lg outline-none"
                />
                <button className="bg-red-600 text-white p-4 px-6 rounded-lg">
                  →
                </button>
              </div>
            </div>

            {/* Corporate Office */}
            <div className="grid lg:grid-cols-2 grid-cols-1 md:justify-items-end">
              <div>
                <h3 className="text-xl my-6 mb-4">CORPORATE OFFICE</h3>
                <p className="text-gray-700">
                  HALDIRAM MARKETING PRIVATE LIMITED B-1 / F-12,
                  <br />
                  Mohan Co-Operative Industrial Estate,
                  <br />
                  Main Mathura Road, Badarpur, South Delhi,
                  <br />
                  Delhi, 110044
                </p>
              </div>
              <div className="flex self-end lg:justify-end gap-4 pr-14 max-lg:mt-6 ">
                {/* facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600 text-xl cursor-pointer lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewidth="2"
                  strokelinecap="round"
                  strokelinejoin="round"
                  className="text-pink-600 text-xl cursor-pointer lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600 text-xl lucide lucide-youtube cursor-pointer"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* right Links */}
          <div className="flex lg:justify-center w-full lg:pl-20 ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 w-full">
              <div>
                <h3 className=" text-xl mb-8">Menu</h3>
                <ul className="mt-2 space-y-4 text-gray-700">
                  <li>Savouries</li>
                  <li>Mithai</li>
                  <li>Bakery Cookies and Chocolates</li>
                  <li>Ready To Eat And Frozen</li>
                  <li>Pantry And Kitchen</li>
                  <li>Trail Mixes and Dry Fruits</li>
                </ul>
              </div>

              <div>
                <h3 className=" text-xl mb-8">Support</h3>
                <ul className="mt-2 space-y-4 text-gray-700">
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Find Your Nearest Store</li>
                </ul>
              </div>

              <div>
                <h3 className=" text-xl mb-8">Corporate</h3>
                <ul className="mt-2 space-y-4 text-gray-700">
                  <li>About Us</li>
                  <li>Dealership Form</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between text-gray-600 text-xs">
          <div className="flex space-x-4">
            <a href="#">Shipping Policy</a>
            <a href="#">Returns & Cancellation</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms And Conditions</a>
          </div>
          <p className="mt-4 md:mt-0">
            Copyright © 2025 Haldiram. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
