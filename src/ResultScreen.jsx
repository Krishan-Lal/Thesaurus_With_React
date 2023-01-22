import React from 'react'

import App from './App';

function ResultScreen(data) {

    const resultData = data.data.map((word) =>{
        return <li>{word.word}</li>
    });
    return(
    <div>
      {resultData} 
    </div>
    );
}

export default ResultScreen