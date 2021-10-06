import React from 'react';
import { Link } from 'react-router-dom';

const Test = ({match}) => {
    
    return (
        <div>
            <h1>This is test {match.params.id}</h1>

            <Link to='/'>Hack to home</Link>
        </div>
    );
};

export default Test;