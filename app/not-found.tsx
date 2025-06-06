import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-6xl mb-6">🍔</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Menu Item Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the menu item or category you're looking for. It might have been removed or the URL
        might be incorrect.
      </p>
      <Button asChild>
        <Link href="/">Return to Menu</Link>
      </Button>
    </div>
  )
}
