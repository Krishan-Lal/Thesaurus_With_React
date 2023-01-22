import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query';

import ResultScreen from './ResultScreen';
import { soundslikeS, spelledsimilarlyS, rhymeS } from './ApiServices/ApiService';
import './App.css'

function App() {
  const [word, setWord] = useState("");

  const valueChange = (e) => {
    reFetching();
    reFetching1();
    reFetching2();
    setWord(e.target.value);
    
  };

  const { data, isLoading, refetch: reFetching} = useQuery('wordLookup', () => soundslikeS(word));
  const { data: data1, isLoading1, refetch: reFetching1} = useQuery('wordLookup1', () => spelledsimilarlyS(word));
  const { data: data2, isLoading2, refetch: reFetching2} = useQuery('wordLookup2', () => rhymeS(word));

  if (isLoading || isLoading1 || isLoading2) return <p>Loading...</p>;

  console.log(data);
  console.log(data1);
  console.log(data2);

  const responesData = <ResultScreen data={data}/>
  const responesData1 = <ResultScreen data={data1}/>
  const responesData2 = <ResultScreen data={data2}/>

  return (
    <div className='header'>
      <span className='title'>{word ? word : "Search a Word"}</span>
      <input className='textbox' type='text' placeholder='Type Here' onChange={(e) => valueChange(e)}></input>
      <div className='resultBox'>
      <span className='resultTab'>Sounds Like:{responesData}</span>
      <span className='resultTab'>Spelled Similarly:{responesData1}</span>
      <span className='resultTab'>Rhymes:{responesData2}</span>
      </div>
    </div>
  )
}

export default App
