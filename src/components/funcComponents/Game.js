import './Game.css';
import { useState } from 'react';
import Question from './Question';

function Game(){
    const url = "https://opentdb.com/api.php?amount=10&category=20";

    const [result , setResult] = useState([]);
//something seems awfully hardcoded here, if only the user could change these settings!
    const getQuestions = async () => {
        const res = await  fetch(url);
        const data = await res.json();
        //console.log(data.results);
        setResult(data.results);
    }
    return (
        <div className={'gameQuestions'}>
            <button onClick={getQuestions}>getQuestions</button>
            <div className={'Questions'}>
                {
                result.map((question, i) => {
                    //console.log(question);
                    return <Question question={question} key={i}/>
                })}
            </div>
            <button>submit</button>
        </div>
    );
}
export default Game