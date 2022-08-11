import React from "react";
class Answers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            correctAnswer : <li>{this.props.answer.correct_answer}</li>,
            incorrectAnswers : this.props.answer.incorrect_answers,
            allAnswers : this.merge(this.props.answer.correct_answer,this.props.answer.incorrect_answers)
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
        <ul>
            {this.state.allAnswers.map(answer =>{
                return <li>{answer}</li>
            })}
        </ul>
        )
    }
}

export default Answers 