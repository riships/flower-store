import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from './context/filter-context'
import '../stylesheets/filterSection.css'

function FilterSection() {
    const {
        updateFilterValue,
        all_flowers,
        filters: { text },
    } = useFilterContext();


    // TO GET THE UNIQUE DATA OF EACH FIELD
    const getUniqueData = (data, property) => {
        let newVal = data.map((curEle) => {
            return curEle[property];
        })
        console.log(newVal);

    }


    //WE NEED UNIQUE DATA
    const categoryOnlyData = getUniqueData(all_flowers, "sub_category");

    return (
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
        </Wraper>
    )
}
const Wraper = styled.section`
height:auto;
`

export default FilterSection