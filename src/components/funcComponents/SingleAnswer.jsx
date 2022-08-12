import React from "react";
import { decode } from "html-entities";
class SingleAnswer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover : false,
            styles: {
                listStyleHover: {
                    display: "inline-block",
                    width:"20%",
                    textAlign:"center",
                    margin:"0",
                    marginLeft:"2.5%",
                    marginRight:"2.5%",
                    backgroundColor:"green",
                    borderRadius:"10px",
                    height:"auto",
                    color : "white"
                },
                listStyle: {
                    display: "inline-block",
                    width:"20%",
                    textAlign:"center",
                    margin:"0",
                    marginLeft:"2.5%",
                    marginRight:"2.5%",
                    backgroundColor:"blue",
                    borderRadius:"10px",
                    height:"auto",
                    color:"white"
                },
                noSelectStyle: {
                    backgroundColor : "red",
                    borderRadius:"10px",
                    width: "40%",
                    marginLeft:"30%",
                    height: "30%",
                    paddingTop:"1em"
                },
                selectedStyle:{
                    backgroundColor : "lightgreen",
                    borderRadius:"10px",
                    width: "40%",
                    marginLeft:"30%",
                    height: "30%",
                    paddingTop:"1em"
                }
            }
        }
    }

    enter = () => {
        console.log("enter happy")
        this.setState({hover : true,});
    }
    leave= ()=> {
        console.log("leave happy")
        this.setState({hover : false,});
    }

    placeStylingLi(hover){
        if(!hover){
            return this.state.styles.listStyle;
        }else{
            return this.state.styles.listStyleHover;
        }
    }
    placeStylingP(hover){
        if(!hover){
            return this.state.styles.noSelectStyle;
        }else{
            return this.state.styles.selectedStyle;
        }
    }
    render(){
        return (
            <li onMouseEnter={this.enter} onMouseLeave={this.leave} style={this.placeStylingLi(this.state.hover)}>
                <p>{decode(this.props.answer)}</p>
                <p style={this.placeStylingP(this.state.hover)}>{this.state.hover ? "select" : "no select"}</p>
            </li>
        );
    }
}
export default SingleAnswer