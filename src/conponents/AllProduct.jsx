import React, { useEffect, useState } from 'react'
import { useFilterContext } from './context/filter-context'
import GridView from './GridView'
import ListView from './ListView'
import Sort from './Sort'
import FilterSection from './FilterSection'
import Footer from './Footer'

const AllProduct = () => {
    const { filter_flowers, isLoading } = useFilterContext()
    const [grid_view, setGridView] = useState(true)

    useEffect(() => {
        setGridView(prevGridView => prevGridView !== grid_view ? grid_view : prevGridView)
    }, [grid_view])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <FilterSection />
            <Sort value={grid_view} onChange={(value) => setGridView(value)} />
            {grid_view ? (
                <GridView product={filter_flowers} />
            ) : (
                <ListView product={filter_flowers} />
            )}
            <Footer />
        </div>
    )
}

export default AllProduct
