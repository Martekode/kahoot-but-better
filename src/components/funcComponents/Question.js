import { useEffect, useState } from 'react';
import './Question.css';

function Question(props){
    const [questionText, setQuestionText] = useState(""); 
    


    useEffect(() => {
        // .from(b64, "base64").toString();
        let questionAsSTRING = decodeURI(props.question).toString();
        setQuestionText(questionAsSTRING);
        console.log(questionAsSTRING);
    }, [questionText])

    return (
        <div className="ratata">
            <h1>{questionText}</h1>
        </div>
    );
}
export default Question