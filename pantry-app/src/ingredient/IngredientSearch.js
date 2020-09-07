import React from 'react'

export default function IngredientSearch(props) {
    return(
        <input type="text" placeholder="Search Ingredients" value={props.searchTerm} onChange={props.handleSearch} />
    )
}