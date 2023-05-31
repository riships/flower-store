import React from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView'
import ListView from './ListView'

const AllProduct = () => {
    const { filter_flowers, grid_view, isLoading } = useFilterContext();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (grid_view === false) {
        // console.log(filter_flowers, "rishi-1");
        return <GridView product={filter_flowers} />
    }
    if (grid_view === true) {
        // console.log(filter_flowers, "rishi-2");
        return <ListView product={filter_flowers} />
    }

}

export default AllProduct