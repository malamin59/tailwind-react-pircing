import React from 'react';

const Link = ({ route }) => {
    return (
        <ul>
            <li className=' px-4 hover:bg-fuchsia-500 lg:mr-10'>
                <a href={route.path}> {route.name} </a>
            </li>

        </ul>
    );
};

export default Link;