import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { menuCategories, menuItems } from "@/lib/menu-data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Find the category based on the URL slug
  const category = menuCategories.find((cat) => cat.href === `/${params.category}`)

  // If category doesn't exist, show 404
  if (!category) {
    notFound()
  }

  // Get items for this category
  const items = menuItems.filter((item) => item.category === params.category)

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
        {/* Back button and category title */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Menu Categories
          </Link>
          <div className="mt-6 flex items-center">
            <span className="text-4xl mr-4">{category.icon}</span>
            <h1 className="text-3xl font-bold text-gray-800">{category.name}</h1>
          </div>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Explore our {category.name.toLowerCase()} selection with detailed prices, calories, and ingredients. Updated
            as of June 4, 2025.
          </p>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                  <div className="text-6xl">{item.emoji}</div>
                </div>
                <CardContent className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                    <span className="font-bold text-lg text-red-600">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Calories: {item.nutrition.calories}</p>
                    <p>
                      Protein: {item.nutrition.protein}g | Carbs: {item.nutrition.carbs}g | Fat: {item.nutrition.fat}g
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* No items message */}
        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found in this category.</p>
          </div>
        )}
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
