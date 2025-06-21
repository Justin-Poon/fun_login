export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-gray-600">
              Brief description of your site or brand.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-600 hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tools" className="text-gray-600 hover:text-blue-600">
                  Tools
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: your@email.com<br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 