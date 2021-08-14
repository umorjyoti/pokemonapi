import React,{useState, useEffect} from "react";
import { getALLPokemon,getPokemon } from "./services/Pokemon";
import styled from "styled-components";
import Card from "./components/Card";

function App() {
  const [pokemonData,setPokemonData]=useState([]);
  const[nextUrl,setNextUrl] = useState('');
  const [prevUrl,setPrevUrl]= useState('');
  const [loading,setLoading] =useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';
  

  useEffect(()=>{
    async function fetchData(){
      let response = await getALLPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.prev);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  },[])

  const loadingPokemon = async (data)=>{
    let _pokemonData = await Promise.all(data.map(async pokemon =>{
      let pokemonRecord =await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }
  console.log(pokemonData);
  return (
    <AppStyled>
      {loading? <h1>Loading..</h1>: (
        <>
          <div className="flexbox">
            {pokemonData.map((pokemon,i) => {
              return <Card key={i} pokemon={pokemon}/>
            })}
          </div>
        </>
      )}
    </AppStyled>
  );
}

const AppStyled= styled.div` 
  padding: 5rem;
  h1{
    align-self: center;
    justify-self: center;
  }
  .flexbox{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;


export default App;
