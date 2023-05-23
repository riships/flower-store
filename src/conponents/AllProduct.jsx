import React from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView';

const AllProduct = () => {
    const { filter_flowers, gridView } = useFilterContext();
    if (gridView === true) {
        return <GridView product={filter_flowers} />
    }
    if (gridView === false) {
        return <GridView product={filter_flowers} />
    }

}

export default AllProduct