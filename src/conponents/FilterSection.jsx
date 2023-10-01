import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from './context/filter-context'
import '../stylesheets/filterSection.css'

function FilterSection() {
    const {
        updateFilterValue,
        all_flowers,
        filters: { text, category },
    } = useFilterContext();


    // TO GET THE UNIQUE DATA OF EACH FIELD
    const getUniqueData = (data, property) => {
        let newVal = data.map((curEle) => {
            return curEle[property];
        })
        newVal = ["all", ...new Set(newVal)];
        // console.log(newVal);
        return newVal;
    }
    // console.log(ALL, "all-data");


    //WE NEED UNIQUE DATA
    const categoryOnlyData = getUniqueData(all_flowers, "sub_category");
    // console.log(categoryOnlyData, 'data')
    return (<>
        <Wraper>
            <div className='filter--search'>
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
            </div>
            <FilterCategory>
                <h3>Filter By Category</h3>

                {
                    categoryOnlyData.map((curElem, index) => {
                        return <FilterDiv>
                            <FilterButton key={index}
                                className={curElem === category ? "button active" : "button"}
                                type='button'
                                name='category'
                                value={curElem}
                                onClick={updateFilterValue}
                            >
                                {curElem}
                            </FilterButton>
                        </FilterDiv>
                    })
                }
            </FilterCategory>
        </Wraper>

    </>

    )
}
const Wraper = styled.section`
height:auto;
`
const FilterDiv = styled.div`
  padding: 5px 10px;
  width:80%;
  `

const FilterButton = styled.button`
    transition: all.2s ease-in-out;
    background: none;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    outline: none;
    opacity: 0.4;
    border: none;
    color: #fff00;

.button:hover,
.button.active {
    opacity: 1;
} `
const FilterCategory = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    float: left;
    margin-left: 8rem;
`
export default FilterSection