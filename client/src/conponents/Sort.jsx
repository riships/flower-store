import React, { useState } from 'react'
import styled from 'styled-components'
import { FaThList } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import Select from 'react-select'
import { useFilterContext } from './context/filter-context'

function Sort({ value, onChange }) {
    const { sorting, filter_flowers } = useFilterContext()

    const handleIconClick = (newValue) => {
        onChange(newValue)
    }

    const options = [
        { value: null, label: 'Select' },
        { value: 'a to z', label: 'A to Z' },
        { value: 'z to a', label: 'Z to A' },
        { value: 'highest', label: 'Highest' },
        { value: 'lowest', label: 'Lowest' },
    ]

    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelectChange = (selectedOption) => {
        sorting(selectedOption.value);
        setSelectedOption(selectedOption);
        console.log(selectedOption.value);
    };

    return (
        <Wrapper>
            {/* first column */}
            <div>
                <IconWrapper active={!value} onClick={() => handleIconClick(false)}>
                    <FaThList />
                </IconWrapper>
                <IconWrapper active={value} onClick={() => handleIconClick(true)}>
                    <BsFillGrid3X3GapFill />
                </IconWrapper>
            </div>
            {/* second column */}
            <div>
                {`${filter_flowers.length} Available Products`}
            </div>
            <div>
                <form action="#">
                    <Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={options}
                        isSearchable={false}
                    />
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background-color: #f5f5f561;
  ${'' /* border-radius: 25px; */}
  ${'' /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.21); */}
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
