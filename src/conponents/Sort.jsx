import React from 'react'
import styled from 'styled-components'
import { FaThList } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'


function Sort({ value, onChange }) {
    const handleIconClick = (newValue) => {
        onChange(newValue)
    }

    return (
        <Wrapper>
            {/* first column */}
            <div>
                <IconWrapper
                    active={!value}
                    onClick={() => handleIconClick(false)}
                >
                    <FaThList />
                </IconWrapper>
                <IconWrapper
                    active={value}
                    onClick={() => handleIconClick(true)}
                >
                    <BsFillGrid3X3GapFill />
                </IconWrapper>
            </div>
            {/* second column */}
            <div>
                <from action="#">
                    <label htmlFor='sort'></label>
                    <select name="sort" id="sort"></select>
                </from>
            </div>
            <div>right</div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background-color: #f5f5f561;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.21);
`

const IconWrapper = styled.div`
  cursor: pointer;
  display: ${(props) => (props.active ? 'none' : 'block')};
  transition-delay: 0.5s;

  &:hover {
    opacity: 1;
  }
`

export default Sort
