import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './anavbar';
import "../assets/delete.css"

const Delete = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = () => {
        if (!title || !author) {
            setMessage('Title and Author are required.');
            return;
        }

        axios
            .delete('http://127.0.0.1:8081/api/v1/user/delete', { params: { title, author } })
            .then((response) => {
                setMessage(response.data);
                setTitle('');
                setAuthor('');
            })
            .catch((error) => {
                setMessage(error.response.data);
            });
    };

    return (
        <div>

             <Anavbar />
        <div className='delete-container '>
            <h2 className='h21'>Delete Book</h2>
            <div>
                <label className='cls1'>Title:</label>
                <input className='ip1' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label className='cls1'>Author:</label>
                <input className='ip1' type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button className='bttn' onClick={handleDelete}>Delete Book</button>
            {message && <p className='para'> {message}</p>}
        </div>
        </div>
    );
};

export default Delete;
