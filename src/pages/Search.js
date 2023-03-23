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
                <button>
                    <i className="xi-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search;