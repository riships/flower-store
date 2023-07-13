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
        newVal = ["All", ...new Set(newVal)];
        console.log(newVal);
        return newVal;
    }


    //WE NEED UNIQUE DATA
    const categoryOnlyData = getUniqueData(all_flowers, "sub_category");
    console.log(categoryOnlyData, 'data')
    return (<>
        <Wraper>
            <div className='filter--search'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className='search--input'
                        type="text"
                        name="text"
                        value={text}
                        onClick={updateFilterValue}
                        placeholder='SEARCH'
                    />
                </form>
            </div>
        </Wraper>
        <FilterCategory>

            {
                categoryOnlyData.map((curElem, index) => {
                    return <FilterButton>
                        <button key={index}
                            className={curElem === category ? "button active" : "button"}
                            type='button'
                            name='category'
                            value={curElem}
                            onClick={updateFilterValue}
                        >
                            {curElem}
                        </button>
                    </FilterButton>
                })
            }


        </FilterCategory>
    </>

    )
}
const Wraper = styled.section`
height:auto;
`
const FilterButton = styled.button`
  padding: 10px 0 25px;

.button {
  transition: all .2s ease-in-out;
  border-radius: 100px;
  background: none;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 0px;
  outline: none;
  opacity: 0.4;
  border: none;
  color: none;
}

.button:hover,
.button.active {
  opacity: 1;
}`
const FilterCategory = styled.div`
    display: flex;
    flex-direction:column;
    width:15%;
 `

export default FilterSection