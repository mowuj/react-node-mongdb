import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        //send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
            .then(data => {
                console.log('success', data);
                alert('Users added Successfully');
                event.target.reset();
        })
    }
    return (
        <div>
            <h1>Please add new User</h1>
            <form action="" onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Email' required/>
                <br />
                <input type="submit" value="Add User" />

            </form>
        </div>
    );
};

export default AddUser;