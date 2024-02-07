import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useState } from 'react'

const FilterableproductTable = (props) => {
    const[filterText,setFilterText]=useState('');
    const[inStock,setInStock]=useState( false);
console.log(props.products)

  return (
    <div>
        <SearchBar 
    filterText={filterText} 
    inStock={inStock}
    setFilterText={setFilterText}
    setInStock={setInStock}

    />
    <ProductTable products={props.products}
     filterText={filterText} 
     inStock={inStock}
    /></div>
  )
}

export default FilterableproductTable