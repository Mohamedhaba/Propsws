import React from 'react'
import StarRating from './StarRating'

const Search = ({inputeText,rating,handleText,handleRating}) => {
  return (
    <div>
        <form >
            <input type="text" value={inputeText} onChange={(e)=>handleText(e.target.value)}/>
            <StarRating rating={rating} handleRating={handleRating} />
        </form>
    </div>
  )
}

export default Search