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
        <div>

        </div>
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
background-color: #f5f5f561;
border-radius: 25px;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.21);
`

export default Sort