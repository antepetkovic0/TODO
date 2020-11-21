import React from 'react';
import { Link } from 'react-router-dom';

const Todos = () => {
    return (
        <div>
            Todoseeeee
            <Link to="/">
                <button>logout</button>
            </Link>
        </div>
    );
};

export default Todos;