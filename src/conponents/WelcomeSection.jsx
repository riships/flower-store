import React from 'react'
import '../stylesheets/common.css'
import '../stylesheets/style.css'
// import styled from 'styled-components'

const storeData = {
    name: 'Lovely Flowers',
    email: 'lovely@flowers.com',
    phone: '0123456789',
    city: 'Noida',
    address: 'Lovely Flowers, Noida, Uttar Pradesh, 201301'
}
function Store() {

    return (<section className='wel--bg'>
        <div className="containr">
            <div className='grid' style={{ textAlign: "center" }}>
                <div className='hero-section-data'>
                    <h1>Welcome to {storeData.name}</h1>
                    <p>We Provide all Kind of Flower For you and your loved Once, so that you and your loved once always be near to the nature and always bloom like these flowers.</p>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Store