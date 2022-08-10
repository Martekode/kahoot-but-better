import { useEffect, useState } from 'react';
import { decode } from 'html-entities';

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
        // .from(b64, "base64").toString();
        let questionAsSTRING = decode(props.question);
        setQuestionText(questionAsSTRING);
        console.log(questionAsSTRING);
    }, [questionText])

    return (
        <div style={divstyle}>
            <h1>{questionText}</h1>
        </div>
    );
}
export default Question