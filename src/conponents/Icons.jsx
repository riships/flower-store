import React from 'react';
import styled from "styled-components";
import { TbTruckDelivery, TbReplace, MdLocationPin, BiShieldQuarter } from 'react-icons/all';
import { useState } from 'react';

function Icons() {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [showPopup4, setShowPopup4] = useState(false);


    const boxShow1 = () => {
        setShowPopup1(!showPopup1);
    };
    const boxShow2 = () => {
        setShowPopup2(!showPopup2);
    };
    const boxShow3 = () => {
        setShowPopup3(!showPopup3);
    };
    const boxShow4 = () => {
        setShowPopup4(!showPopup4);
    };

    return (
        <>
            <AllBtnIcons>
                <BtnGroup>
                    <TbTruckDelivery className='Btn--Group' onClick={boxShow1} />
                    {showPopup1 && <PointsBox>
                        <p className='hovr--size'>Fast and Secure Delivery</p>
                    </PointsBox>}
                    <IconText>Fast and Secure Delivery</IconText>
                </BtnGroup>
                <BtnGroup onClick={boxShow2} >
                    <TbReplace className='Btn--Group' />
                    {showPopup2 && <PointsBox>
                        <p className='hovr--size'>15 Days Replacement</p>
                    </PointsBox>}
                    <IconText>15 Days Replacement</IconText>
                </BtnGroup>
                <BtnGroup>
                    <MdLocationPin className='Btn--Group' onClick={boxShow3} />
                    {showPopup3 && <PointsBox>
                        <p className='hovr--size'>All India Delivery</p>
                    </PointsBox>}
                    <IconText>All India Delivery</IconText>
                </BtnGroup>
                <BtnGroup>
                    <BiShieldQuarter className='Btn--Group' onClick={boxShow4} />
                    {showPopup4 && <PointsBox>
                        <p className='hovr--size'>30 Days Warranty</p>
                    </PointsBox>}
                    <IconText>30 Days Warranty</IconText>
                </BtnGroup>
            </AllBtnIcons >
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
  cursor:pointer;
  position:relative;
  .Btn--Group{
    padding:10px;
    background:white;
    border-radius:25px;
    }
`;
const PointsBox = styled.div`
    display:flex;
    position:absolute;
    align-item:center;
    top:60px; 
    left:0;
    right:0;
    height:100px;
    width:100px;
    background:#DDDDDD;
    justify-content:center;
    text-align:center;
    .hovr--size{
        font-size:15px;
    }
`

export default Icons