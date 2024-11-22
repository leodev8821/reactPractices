import React from "react";

const MyInput = ({tag, placeholder}) => {
    switch(tag){
        case "input":
            return(
                <input type="text" placeholder={placeholder}/>
            )
        case "textarea":
            return(
                <textarea rows={4}  placeholder={placeholder}/>
            )
        case "email":
            return(
                <input type="email" placeholder={placeholder}/>
            )
        default:
            return(
                <div>
                    <h3>No hay elemento Input</h3>
                </div>
            )
    }
}

export default MyInput;