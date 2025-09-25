import { Link } from "react-router-dom"

function MovieSummary(props) {
    return (
        <div className="card">
            <h1>{props.movieDetails.title}</h1>
            <img src={props.movieDetails.imgURL} alt="Movie poster" />
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={() => { props.onDelete(props.movieDetails.id) }}>Delete</button>

            <Link to={`/movies/${props.movieDetails.id}`}>
                <button>
                    More details
                </button>
            </Link>
        </div>
    )
}

export default MovieSummary