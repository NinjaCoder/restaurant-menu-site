import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { menuCategories } from "@/lib/menu-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold">Jack in the Box Menu</div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <a href="/menu" className="hover:text-red-200 transition-colors">
                Full Menu
              </a>
              <a href="/hours" className="hover:text-red-200 transition-colors">
                Work Hours
              </a>
              <a href="/careers" className="hover:text-red-200 transition-colors">
                Jobs & Careers
              </a>
              <a href="/rewards" className="hover:text-red-200 transition-colors">
                Earn Rewards
              </a>
              <a href="/coupons" className="hover:text-red-200 transition-colors">
                Coupons & Deals
              </a>
              <a href="/privacy" className="hover:text-red-200 transition-colors">
                Privacy Policy
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white hover:text-red-200">
                Menu
              </Button>
            </div>
          </nav>
          <div className="text-center pb-4">
            <a href="/value" className="text-sm hover:text-red-200 transition-colors">
              Value Menu
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Jack in The Box Menu Prices – June 4, 2025</h1>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 leading-relaxed">
            <p>
             Welcome to Jackinthebox-menu.com! We’ve rounded up every tasty item from the legendary Jack in the Box just for you. Craving burgers, chicken, or those irresistible breakfast combos? You’ll find them all here.
            </p>
            <p>
             The best part? Every menu item comes with the info you actually care about — prices, calories, ingredients, and nutrition facts — so you can decide what hits the spot. Our clean, easy-to-use layout makes finding your favorites super simple. So go ahead — explore the menu and treat yourself to all the Jack in the Box goodness, right at your fingertips!
            </p>
          </div>
        </div>

        {/* Menu Categories Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Discover Jack in the Box Menu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Link href={category.href} key={index}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                    <h3 className="font-semibold text-gray-800 text-sm leading-tight">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Menu Guide?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-4">💰</div>
                <h4 className="font-semibold text-gray-800 mb-2">Updated Prices</h4>
                <p className="text-gray-600 text-sm">Get the most current pricing information for all menu items</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">📊</div>
                <h4 className="font-semibold text-gray-800 mb-2">Nutritional Info</h4>
                <p className="text-gray-600 text-sm">
                  Complete calorie counts and nutritional details for informed choices
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">🔍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Easy Navigation</h4>
                <p className="text-gray-600 text-sm">Find your favorite items quickly with our organized menu layout</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/menu" className="hover:text-gray-300">
                    Full Menu
                  </a>
                </li>
                <li>
                  <a href="/locations" className="hover:text-gray-300">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="/nutrition" className="hover:text-gray-300">
                    Nutrition
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/help" className="hover:text-gray-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="hover:text-gray-300">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/accessibility" className="hover:text-gray-300">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-gray-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Jack in the Box Menu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
