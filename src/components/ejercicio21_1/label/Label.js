import React from "react";

const MyLabel = ({tag, text}) => {
    switch(tag){
        case "label":
            return <label>{text}</label>;
        case "h1":
            return <h1>{text}</h1>
        default:
            return(
                <div>
                    <h3>No hay elemento label</h3>
                </div>
            )
    }
}

export default MyLabel;