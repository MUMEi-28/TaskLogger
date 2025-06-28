import React, { useState } from 'react'

import Data from '../Data/Data.js'

export default function ListUser(props)
{
    const [tasks, setTask] = useState(Data);


    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center p-5'>
            <div className="w-full max-w-5xl">
                <div className="flex justify-end mb-4">
                    <button
                        onClick={props.onClickAdd}
                        className="bg-green-200 hover:bg-green-300 text-green-800 font-semibold px-4 py-2 rounded">
                        ADD
                    </button>
                </div>
                <div className='shadow'>
                    <table className='min-w-full bg-white border border-gray-200'>
                        <thead className=''>
                            <tr >
                                <th className='text-left py-3 px-4 font-medium'>Title</th>
                                <th className='text-left py-3 px-4 font-medium'>Assignee</th>
                                <th className='text-left py-3 px-4 font-medium'>Total Work Hours</th>
                                <th className='text-left py-3 px-4 font-medium'>Status</th>
                                <th className='text-left py-3 px-4 font-medium'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, key) =>
                                <tr className='border-t border-gray-200 hover:bg-gray-50' key={key}>
                                    <td className='py-3 px-4'>{task.title}</td>
                                    <td className='py-3 px-4'>{task.assignee}</td>
                                    <td className='py-3 px-4'>{task.hours}</td>
                                    <td className='py-3 px-4'>{task.status}</td>
                                    <td className='py-3 px-4 space-x-2'>
                                        <button className='bg-orange-200 px-3 py-1 rounded font-semibold text-orange-800 hover:bg-orange-300'>Edit</button>
                                        <button className='bg-red-200 px-3 py-1 rounded font-semibold text-red-800 hover:bg-red-300'>Delete</button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
