import React, { useState } from 'react';
import '../stylesheets/mulimages.css';
import '../stylesheets/style.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MulImages({ imags = [{ "url": '' }] }) {
    // console.log(imags);
    const [mainImge, setMainImge] = useState(imags[0]);
    return (<>
        <div className="multple-imgs">
            <img src={mainImge.url} alt="product-img" className='prdct--img' />
        </div>
        {/* <div className="grid2 grid-four-column"> */}
        <Carousel
            showArrows={false}
            // showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={false}
            centerSlidePercentage={50}
            swipeable={true}

        >
            {
                imags.map((curElm, index) => {
                    return (
                        <ImgMul onClick={() => setMainImge(curElm)} key={index}>
                            <img src={curElm.url} alt='product-img' className='singl--prdct--img' />
                        </ImgMul>

                    )
                })
            }
        </Carousel>
        {/* </div> */}
    </>
    )
};
const ImgMul = styled.div`
    margin-top:15px;
    margin-bottom:15px;
    height:130px;
    width:130px;
    overflow:hidden;
`


export default MulImages