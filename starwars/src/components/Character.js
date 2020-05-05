// Write your Character component here
import React from "react";

const Character = (props) => {
    console.log("props from character section", props)
    if(props.data){
        return (
            <div>
                {props.data.map(data => {
                    return (
                    <div>
                        {/* <div className="characterHeader"> */}
                            {/* <h2 className="characterName">{props.data.name}</h2> */}
                            {/* <img alt="character image" className="characterImg" src={props.image}/> */}
                        {/* </div> */}
    
                        {/* <div>{props.data.origin}</div>
                        <div>{props.data.species}</div>
                        <div>{props.data.gender}</div> */}
                    </div>)
                })}
                
            </div>
        )
    } else {
        return <div>loading</div>
    }

}

export default Character;