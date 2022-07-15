import React from "react";

// 
import data from './data.json'

function Sec01(){
    return(
        <ul>
            {data.map(
                (item,index)=>{
                    return(
                        <li key={index}>{item.title}</li>
                    )}
            )}
            {/* <li>반복문 만들기 </li> */}
        </ul>
    )
}

export default Sec01