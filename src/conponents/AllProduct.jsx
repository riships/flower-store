import React, { useState } from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView'
import ListView from './ListView'

const AllProduct = () => {
    const { filter_flowers, grid_view, isLoading } = useFilterContext();
    const [isGridView, setIsGridView] = useState(grid_view);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (grid_view === true) {
        return <GridView product={filter_flowers} />
    }
    if (grid_view === false) {
        return <ListView product={filter_flowers} />
    }
    return (
        <button onClick={() => setIsGridView(!isGridView)}>
            {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
        </button>
    );


};

export default AllProduct