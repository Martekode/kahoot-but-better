import { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import Answers from './Answers';

function Question(props){
    const [questionText, setQuestionText] = useState(""); 
    const divstyle = {
        border: "1px solid red",
        color: "red",
        marginBottom: "1em",
        width:"60%",
        borderRadius: "10px",
        padding:"1em",
        marginLeft:"20%"
    }

    useEffect(() => {
        let questionAsSTRING = decode(props.question.question);
        setQuestionText(questionAsSTRING);
    }, [questionText])

    return (
        <div style={divstyle}>
            <h1>{questionText}</h1>
            <Answers answer={props.question}/>
        </div>
    );
}
export default Question