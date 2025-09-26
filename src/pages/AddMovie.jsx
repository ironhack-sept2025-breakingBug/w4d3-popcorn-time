import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddMovie(props) {

    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        const newMovie = {
            title: title,
            rating: rating,
        }

        props.onCreate(newMovie) // invoke function in the  parent component

        // clear form
        setTitle('')
        setRating('')

        // redirect to the homepage
        navigate('/')
    }


    return (
        <section className="card">
            <h2>Add your own movie:</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Rating:
                    <input
                        type="number"
                        name="rating"
                        required
                        min={1}
                        max={10}
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>

        </section>
    )
}

export default AddMovie