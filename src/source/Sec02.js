import React from "react";
import data from './data.json'


function Sec02(){
    return(
        <div>
            {
            data.map(
                (item,index)=>{return(
                    <p key={index}>{item}</p>
                )}
            )
            }
        </div>
    )
}


export default Sec02