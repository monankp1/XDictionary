import React, {useState, useEffect} from 'react'

const Dictionary = () => {


    const [input, setInput] = useState('');
    const [data, setData] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];
    
    const handleSearch = () => {
        const word = input.toLowerCase();
        let found = false;
            dictionary.forEach((item) => {
                if(word === item.word.toLowerCase()){
                    setData(item.meaning);
                    setIsVisible(true);
                    found = true;
                }
            });
        if(!found) {
            setData("Word not found in the dictionary.");
            setIsVisible(true);
        }


    };


  return (
    <div>
        <h1>Dictionary App</h1>
        <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <h4>Definition:</h4>
        {isVisible? (<p>{data}</p>) : ('')}
    </div>
  )
}

export default Dictionary