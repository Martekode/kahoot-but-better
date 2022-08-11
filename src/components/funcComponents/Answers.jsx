import React from "react";
import { decode } from "html-entities";
class Answers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            correctAnswer : <li>{this.props.answer.correct_answer}</li>,
            incorrectAnswers : this.props.answer.incorrect_answers,
            allAnswers : this.merge(this.props.answer.correct_answer,this.props.answer.incorrect_answers),
            divStyle : {
                color: "yellow",
                display : "felx",
                flexDirection:"row",
                flexWrap: "wrap",
                border: "1px solid yellow",
                borderRadius: "10px"
            },
            listStyle: {
                display: "inline-block",
                width:"20%",
                textAlign:"center",
                margin:"0",
                marginLeft:"5%"
            }
        }
    }
    merge(a,b){
        let allAnswers = [a];
        b.map(element =>{
            allAnswers.push(element);
        });
        allAnswers = this.shuffle(allAnswers);
        return allAnswers;

    }
    shuffle(array){
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    
    render(){
        return (
        <ul style={this.state.divStyle}>
            {this.state.allAnswers.map((answer,i) =>{
                return <li style={this.state.listStyle} key={i}>
                    <label htmlFor="checkies">{decode(answer)}</label>
                    <br/><input type="checkbox" name = "checkies" value={decode(answer)}/>
                    </li>
            })}
        </ul>
        )
    }
}

export default Answers 