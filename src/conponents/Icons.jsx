import React from 'react';
import styled from "styled-components";
import { TbTruckDelivery, TbReplace, MdLocationPin, BiShieldQuarter } from 'react-icons/all';
import { useState } from 'react';

function Icons() {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);


    const handleMouseEnter1 = () => {
        setShowPopup1(true);
    };
    const handleMouseLeave1 = () => {
        setShowPopup1(false);
    };

    const handleMouseEnter2 = () => {
        setShowPopup2(true);
    };
    const handleMouseLeave2 = () => {
        setShowPopup2(false);
    };

    const handleMouseEnter3 = () => {
        setShowPopup3(true);
    };
    const handleMouseLeave3 = () => {
        setShowPopup3(false);
    };

    const handleMouseEnter4 = () => {
        setShowPopup4(true);
    };
    const handleMouseLeave4 = () => {
        setShowPopup4(false);
    };
    return (
        <>
            <AllBtnIcons>
                <BtnGroup>
                    <TbTruckDelivery className='Btn--Group' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} />
                    {showPopup1 && <p className='hovr--size'>Fast and Secure Delivery</p>}
                    <IconText>Fast and Secure Delivery</IconText>
                </BtnGroup>
                <BtnGroup onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                    <TbReplace className='Btn--Group' />
                    {showPopup2 && <p className='hovr--size'>15 Days Replacement</p>}
                    <IconText>15 Days Replacement</IconText>
                </BtnGroup>
                <BtnGroup>
                    <MdLocationPin className='Btn--Group' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} />
                    {showPopup3 && <p className='hovr--size'>All India Delivery</p>}
                    <IconText>All India Delivery</IconText>
                </BtnGroup>
                <BtnGroup>
                    <BiShieldQuarter className='Btn--Group' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} />
                    {showPopup4 && <p className='hovr--size'>30 Days Warranty</p>}
                    <IconText>30 Days Warranty</IconText>
                </BtnGroup>
            </AllBtnIcons>
        </>
    )
}
const AllBtnIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const IconText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size:12px;
`;

const BtnGroup = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0 10px;
  font-size:40px;
  text-align:center;
  .Btn--Group{
    padding:10px;
    background:white;
    border-radius:25px;
    }
    .hovr--size{
        font-size:15px;
    }
`;

export default Icons