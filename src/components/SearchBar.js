import React from 'react'

const SearchBar = (props) => {
  return (
    <div>
        <form className='form'>
        <input type="text"
    placeholder='Search'
    value={props.filterText}
    onChange={(e)=>props.setFilterText(e.target.value)}
    />
    <label>
    <br></br>
    <input type="checkbox"
    checked={props.inStock}
    onChange={(e)=>props.setInStock(e.target.checked)}
    />
    {' '}
'Only show products in stock'
</label>
</form>
    </div>
  )
}

export default SearchBar