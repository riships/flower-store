import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from './context/filter-context'

function FilterSection() {
    const { updateFilterValue, filters: { text }, } = useFilterContext();
    return (
        <Wraper>
            <div className='filter--search'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={updateFilterValue}
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