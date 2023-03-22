import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState('');
    const [search, setSeach] = useState('');

    const searchHandler = e => {
        e.preventDefault();
        setSeach(input);
        navigate(`search/?q=${input}`)
    }

    const inputHandler = e => {
        const { value } = e.target;
        setInput(value);
    }

    return (
        <div>
            <form onSubmit={searchHandler}>
                <input type="text" onChange={inputHandler} />
                <button>search</button>
            </form>
            <button onClick={() => navigate('/')}>home</button>
            <button onClick={() => navigate(-1)}>back</button>
            {
                search
            }
        </div>
    )
}

export default Search;