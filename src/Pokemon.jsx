import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";


export const Pokemon = () => {

  const {pokemons, page, isLoading} = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
    <h1>PokemonApp</h1>
    <hr />
    <span>Loading: { isLoading ? "True" : "False"}</span>
    <ul>
      {
        pokemons.map(pokemon => {
          return (<li key={pokemon.name}>{pokemon.name}</li>)
        })
      }
    </ul>

      <button disabled = { isLoading } onClick={ () => dispatch(getPokemons(page)) }>
        Next
      </button>
    </>
  )
}
