import React from 'react'
import styled from 'styled-components'
import { FaThList } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

function Sort() {
    return (<Wraper>
        <div>
            <FaThList />
            <BsFillGrid3X3GapFill />
        </div>
        <div>center</div>
        <div>right</div>
    </Wraper>
    )
}
const Wraper = styled.div`
width:80%;
display:flex;
justify-content:space-between;
padding:15px 0;
/* margin:30px 0; */
background-color: #f5f5f5;
`

export default Sort