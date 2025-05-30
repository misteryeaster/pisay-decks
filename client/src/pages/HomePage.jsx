import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center text-blue-900">
      <h1 className="text-4xl font-bold mb-4 text-slate-950">Welcome to PisayDecks</h1>
      <p className="text-lg text-slate-600 mb-8 text-center max-w-md">
        Your go-to platform for mastering the Philippine Science High School curriculum with interactive flashcards.
      </p>
      
      <div className="flex space-x-4">
        <Button className="bg-slate-950 text-white px-6 py-2 rounded-xl shadow hover:bg-slate-800 transition">
          <Link to="/decks" className="text-white">
            Browse Subjects
          </Link>
        </Button>
        <Button className="border border-slate-950 text-slate-950 bg-white px-6 py-2 rounded-xl bg hover:bg-slate-100 transition">
          <Link to="/profile">
            Go to Profile
          </Link>
        </Button>
      </div>
      
    </main>
  )
}
