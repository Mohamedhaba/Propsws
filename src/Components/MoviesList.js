import React from 'react'
import MovieCarde from './MovieCarde'

const MoviesList = ({movies,functionDelete,handleEdit}) => {
  return (
    <div className='movie-list'>
        {
React.Children.toArray(
    movies.map(movie=><MovieCarde film={movie} deleteFunction={functionDelete} handleEdit={handleEdit} />)

)        }
    </div>
  )
}

export default MoviesList