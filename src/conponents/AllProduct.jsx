import React from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView'
import ListView from './ListView'
import Sort from './Sort'

const AllProduct = () => {
    const { filter_flowers, grid_view, isLoading, setGridView } = useFilterContext()

    const handleGridViewChange = (newValue) => {
        setGridView(newValue)
    }

    if (isLoading) {
      return <div>Loading...</div>
  }

    return (
        <div>
            <Sort value={grid_view} onChange={handleGridViewChange} />
            {grid_view ? (
                <GridView product={filter_flowers} />
            ) : (
                <ListView product={filter_flowers} />
            )}
        </div>
    )
}

export default AllProduct
