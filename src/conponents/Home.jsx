import React from 'react';
import '../stylesheets/common.css'
import myImage from '../stylesheets/img/flower.png'


function Home() {
    return (
        <div>
            <div className="containr">
                <div className='grid grid-2-col'>
                    <div className='hero-section-data'>
                        <p>Welcome to</p>
                        <h1>Flower Store</h1>
                        <p>We Provide all Kind of Flower For you and your oved Once, so that you and our loved once always be near to the nature and always bloom like these flowers.</p>
                    </div>
                    <div className='hero-section-image'>
                        <figure>
                            <img src={myImage} alt='flowers' className='hero-section-img' />
                        </figure>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home