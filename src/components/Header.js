import './Header.css';
import React, {useState} from 'react';

    
function Header() {
    const [title, setTitle] = useState("Quiz");
    const [isClicked , setIsClicked] = useState(false);
    
    return (
        <div className={"header"}>
           <h1>{title}</h1>
           <button className={"headerButton"} onClick={()=>{
                 if (!isClicked){
                    setTitle("This is now a Kahoot");
                    setIsClicked(true);
                }else{
                    setTitle("Quiz!");
                    setIsClicked(false);
                }
            }
           }>change state</button>
        </div>
    );
}

export default Header;