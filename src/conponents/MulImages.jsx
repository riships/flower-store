import React, { useState } from 'react'
import '../stylesheets/mulimages.css'

function MulImages({ imags = [{ "url": '' }] }) {
    // console.log(imags);
    const [mainImge, setMainImge] = useState(imags[0]);
    return (<>
        <div className="multple-imgs">
            <img src={mainImge.url} alt="product-img" />
        </div>
        <div className="grid2 grid-four-column">
            {
                imags.map((curElm, index) => {
                    return (
                        <figure>
                            <img src={curElm.url} key={index} alt='product-img' onClick={() => setMainImge(curElm)} />
                        </figure>
                    )
                })
            }
        </div>
    </>
    )
};


export default MulImages