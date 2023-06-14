import React, { useState } from 'react'
import '../stylesheets/mulimages.css'
import styled from 'styled-components';

function MulImages({ imags = [{ "url": '' }] }) {
    // console.log(imags);
    const [mainImge, setMainImge] = useState(imags[0]);
    return (<>
        <div className="multple-imgs">
            <img src={mainImge.url} alt="product-img" className='prdct--img' />
        </div>
        <div className="grid2 grid-four-column">
            {
                imags.map((curElm, index) => {
                    return (
                        <ImgMul>
                            <figure key={index}>
                                <img src={curElm.url} alt='product-img' className='singl--prdct--img' onClick={() => setMainImge(curElm)} />
                            </figure>
                        </ImgMul>
                    )
                })
            }
        </div>
    </>
    )
};
const ImgMul = styled.div`
    height:65px;
    width:100px;
    overflow:hidden;
`


export default MulImages