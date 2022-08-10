function Question(props){
    console.log(props);
    return (
        <div>
            <h1>{props.question.question}</h1>
        </div>
    );
}
export default Question