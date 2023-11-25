import React, { useState } from 'react'
import styled from 'styled-components'
import { useFilterContext } from './context/filter-context'
import '../stylesheets/filterSection.css'
import Select from 'react-select';

function FilterSection() {
    const {
        updateFilterValue,
        all_flowers,
        filters: { text },
    } = useFilterContext();


    // TO GET THE UNIQUE DATA OF EACH FIELD
    const getUniqueData = (data, property) => {
        let newVal = data.map((curEle) => {
            // console.log(curEle[property]);
            return curEle[property];
        })
        newVal = ["All", ...new Set(newVal)];
        // console.log(newVal);
        return newVal;
    }
    const categoryOnlyData = getUniqueData(all_flowers, "sub_category");
    // console.log(categoryOnlyData);

    let objectData = categoryOnlyData.map((curElem, index) => ({
        label: curElem,
        value: curElem,
        key: index
    }));
    // console.log(objectData);
    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelectChange = (selectedOption) => {
        if (!selectedOption || selectedOption === null) {
            setSelectedOption("All");
            updateFilterValue({ target: { name: "category", value: "All" } });
        } else {
            setSelectedOption(selectedOption);
            updateFilterValue({
                target: { name: "category", value: selectedOption.label },
            });
            // console.log(selectedOption.label);
        }
    };




    //WE NEED UNIQUE DATA
    return (<>
        <Wraper>
            <FilterCategory>
                <FilterDiv>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            className='search--input'
                            type="text"
                            name="text"
                            value={text}
                            onChange={updateFilterValue}
                            placeholder='SEARCH'
                        />
                    </form>
                </FilterDiv>
                <h5>Filter By Category</h5>
                <FilterDiv>
                    <Select
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={objectData}
                        isSearchable={false}
                    />
                </FilterDiv>



            </FilterCategory>
        </Wraper>

    </>

    )
}
const Wraper = styled.section`
display:flex;
display-direction:row;
height:auto;
`
const FilterDiv = styled.div`
  padding: 5px 10px;
  width:80%;
  `

// const FilterButton = styled.button`
//     transition: all.2s ease-in-out;
//     background: none;
//     font-weight: 700;
//     font-size: 12px;
//     cursor: pointer;
//     outline: none;
//     opacity: 0.4;
//     border: none;
//     color: #fff00;

// .button:hover,
// .button.active {
//     opacity: 1;
// } `
const FilterCategory = styled.div`
    display: flex;
    flex-direction: column;
    float: left;
`
export default FilterSection