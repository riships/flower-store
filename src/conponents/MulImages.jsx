import React, { useState } from 'react';
import '../stylesheets/mulimages.css';
import '../stylesheets/style.css';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactModal from 'react-modal';

function MulImages({ imags = [{ "url": '' }] }) {
    // console.log(imags);
    const [mainImge, setMainImge] = useState(imags[0]);
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <ReactModal
            appElement={document.getElementById('root')}
            className="RectModal"
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
        // overlayClassName="custom-overlay-styles"
        >
            <img src={mainImge.url} alt="product-img" className='prdct--img--full--view' />
        </ReactModal>
        <div className="multple-imgs">
            <img onClick={() => setIsOpen(true)} src={mainImge.url} alt="product-img" className='prdct--img' />
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
            showThumbs={false}

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
    margin-top:25px;
    margin-bottom:40px;
    height:90px;
    width:130px;
    overflow:hidden;
`


export default MulImages