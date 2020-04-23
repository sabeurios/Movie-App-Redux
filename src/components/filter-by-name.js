import React from 'react'

const FilterByName = ({filterByName}) => {


    return (
                <div>
                    <input onChange={(e)=>filterByName(e.target.value)} 
                    placeholder="Enter movie name to search ..."/>
                </div>
    )
}
export default FilterByName