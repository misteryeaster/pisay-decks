import { useEffect } from 'react'
import { useDecksStore } from '../../store/useDecksStore'

function DeckPage() {
  const { decks, loading, error, fetchDecks } = useDecksStore()

  useEffect(() => {
    fetchDecks()
  }, [fetchDecks])

  console.log(decks)

  return (
    <div>Decks</div>
  )
}

export default DeckPage