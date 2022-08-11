import React from "react";
import { decode } from "html-entities";
import SingleAnswer from "./SingleAnswer";
class Answers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            correctAnswer : <li>{this.props.answer.correct_answer}</li>,
            incorrectAnswers : this.props.answer.incorrect_answers,
            allAnswers : this.merge(this.props.answer.correct_answer,this.props.answer.incorrect_answers),
            hover : false,
            styles : {
                divStyle : {
                    color: "yellow",
                    display : "flex",
                    flexDirection:"row",
                    flexWrap: "wrap"
                }
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
        <ul style={this.state.styles.divStyle}>
            {this.state.allAnswers.map((answer,i) =>{
                return  <SingleAnswer answer={answer} key={i}/>
            })}
        </ul>
        )
    }
}

export default Answers 