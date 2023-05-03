import React from 'react'
import '../stylesheets/common.css'
import '../stylesheets/style.css'
import myImage from '../stylesheets/img/flower.png'
import styled from 'styled-components'


function Store() {

    return (
        <>
            <div>
                <div className="containr">
                    <div className='grid grid-2-col'>
                        <div className='hero-section-data'>
                            <p>Welcome to</p>
                            <h1>Flower Store</h1>
                            <p>We Provide all Kind of Flower For you and your oved Once, so that you and our loved once always be near to the nature and always bloom like these flowers.</p>
                        </div>
                        <div className='hero-section-img'>
                            <figure>
                                <HeroImg src={myImage} alt='flowers' />
                            </figure>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
const HeroImg = styled.img`
width: 100%;
height: 100%;
box-shadow: 25px 25px 0px 5px rgba(255, 230, 231,1);
`

export default Store