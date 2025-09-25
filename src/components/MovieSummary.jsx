
function MovieSummary(props) {
    return (
        <div className="card">
            <h1>{props.movieDetails.title}</h1>
            <img src={props.movieDetails.imgURL} alt="Movie poster" />
            <h2>Year: {props.movieDetails.year}</h2>
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={() => { props.onDelete(props.movieDetails.id) }}>Delete</button>
        </div>
    )
}

export default MovieSummary