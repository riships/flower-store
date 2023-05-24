import React from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView';

const AllProduct = () => {
    const { filter_flowers, grid_view } = useFilterContext();
    if (grid_view === true) {
        // console.log(filter_flowers, "rishi-1");
        return <GridView product={filter_flowers} />
    }
    if (grid_view === false) {
        // console.log(filter_flowers, "rishi-2");

        return <GridView product={filter_flowers} />
    }

}

export default AllProduct