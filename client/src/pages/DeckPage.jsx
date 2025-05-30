import { useEffect } from 'react'
import { useDecksStore } from '../../store/useDecksStore'

function DeckPage() {
  const { decks, loading, error, fetchDecks } = useDecksStore()

  useEffect(() => {
    fetchDecks()
  }, [fetchDecks])

  console.log(decks)

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center text-blue-900">
        <h1 className="text-4xl font-bold mb-4 text-slate-950">Decks</h1>
        {loading && <p className="text-lg text-slate-600">Loading decks...</p>}
        {error && <p className="text-lg text-red-600">{error}</p>}
        {!loading && !error && (
          <ul className="space-y-4">
            {decks.map(deck => (
              <li key={deck.id} className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold">{deck.name}</h2>
                <p>{deck.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}

export default DeckPage