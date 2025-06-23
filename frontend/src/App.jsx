import React, { useState } from 'react'
import ListUser from './components/ListUser'
import AddUser from './components/AddUser';

export default function App()
{
    const [showAddUser, setShowAddUser] = useState(false);


    return (
        <div className='relative '>
            <ListUser onClickAdd={() => setShowAddUser(true)} />

            {showAddUser && <AddUser onClickCancel={() => setShowAddUser(false)} />}
        </div>
    )
}
