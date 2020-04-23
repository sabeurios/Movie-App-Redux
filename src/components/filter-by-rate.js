import React from 'react'
import StarRating from './star-rating'

const FilterByRate = ({rate, onchange,size,className}) => {

return (<div>
    <StarRating rate={rate} 
                change={onchange}
                size={size}
    />
</div>)
}
export default FilterByRate 