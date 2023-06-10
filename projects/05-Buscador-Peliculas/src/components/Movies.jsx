//import withResult from '../mocks/with-results.json'

export function ListOfMovies ({movies}) {
    return(
        <ul>
            {
                movie.map(map => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )

}

export function NoMvieResult(){
    return(
        <p>
            No se encontraron películas para esa búsqueda.
        </p>
    )
}