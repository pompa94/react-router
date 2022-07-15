import React from 'react'
import "./page.css"

// 추가 컴포넌트
import Sec01 from '../source/Sec01'

function Sample01(){
    return(
        <>
        <article id='sample01'>
            <h1>sample01 페이지 입니다</h1>
            <p>welcom sample01</p>
            <Sec01 />
        </article>
        </>
    )
}

export default Sample01