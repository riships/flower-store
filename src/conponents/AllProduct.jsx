import React from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView'
import ListView from './ListView'
import Sort from './Sort'

const AllProduct = () => {
    const { filter_flowers, grid_view, isLoading } = useFilterContext()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (grid_view === true) {
        return (
            <div>
                <Sort value={grid_view} />
                <GridView product={filter_flowers} />
            </div>
        )
    }

    if (grid_view === false) {
        return (
            <div>
                <Sort value={grid_view} />
            <ListView product={filter_flowers} />
        </div>
    )
    }
}

export default AllProduct
