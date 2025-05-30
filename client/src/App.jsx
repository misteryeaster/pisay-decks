import { Button } from "./components/ui/button"
import Navbar from "./components/ui/Navbar"
import DeckPage from "./pages/DeckPage"
import HomePage from "./pages/HomePage"
import SubjectsPage from "./pages/SubjectsPage"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subjects/:subjectId/decks" element={<DeckPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
      </Routes>
    </div>
  )
}

export default App
