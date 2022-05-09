import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function List() {
    const location = useLocation()
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        const fetchCharacters = async () => {
            const url = 'https://rickandmortyapi.com/api/character'
            const res = await fetch(url);
            const { results } = await res.json()
            setCharacters(results)
        }
        fetchCharacters()
    }, [location.search])

  return (
    <>
        <h1>Character List</h1>
            <section>
                {characters.map((character) => (
                    <article key={character.id}>
                        <Link to={`/characters/${character.id}`}>
                            <h3>{character.name}</h3>
                        </Link>
                        <p>{character.species}</p>
                        <p>Status: {character.status}</p>
                    </article>
                ))}
            </section>
    </>
  )
}
