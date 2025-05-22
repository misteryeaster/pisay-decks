import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center text-blue-900">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to PisayDecks</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
        Create, study, and master flashcards tailored for Pisay students. Track your progress and rise up the leaderboard.
      </p>
      
      <div className="flex space-x-4">
        <Button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          <Link to="/decks" className="text-white">
            Browse Subjects
          </Link>
        </Button>
        <Button className="border border-blue-600 text-blue-600 bg-white px-6 py-2 rounded-xl bg hover:bg-blue-50 transition">
          <Link to="/profile">
            Go to Profile
          </Link>
        </Button>
      </div>
      
    </main>
  )
}
