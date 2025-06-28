import React from 'react'

export default function AddUser(props)
{
    return (
        <div className='fixed inset-0  flex justify-center items-center backdrop-blur-xs'>
            <form action="" className='bg-white shadow border-gray-200 p-4 rounded-2xl w-1/6 flex flex-col items-center justify-center'>
                <p className='mb-2 '>
                    <label
                        className='block text-sm text-gray-800'
                        htmlFor="">Title</label>
                    <input className='border p-1 w-full' type="text" />
                </p>
                <p className='mb-2 '>
                    <label
                        className='block text-sm text-gray-800'
                        htmlFor="">Assignee</label>
                    <input className='border p-1 w-full' type="text" />
                </p>
                <p className='mb-2 '>
                    <label
                        className='block text-sm text-gray-800'
                        htmlFor="">Hours</label>
                    <input className='border p-1 w-full' type="text" />
                </p>
                <p className='mb-2 '>
                    <label
                        className='block text-sm text-gray-800'
                        htmlFor="">Status</label>
                    <input className='border p-1 w-full' type="text" />
                </p>
                <p className=' flex justify-center items-center gap-4 w-full'>
                    <button type='submit'
                        className='bg-green-200 text-green-900 px-4 py-2 mt-2 rounded-xl font-semibold hover:bg-green-300'>Submit</button>
                    <button
                        className='bg-red-200 text-red-900 px-4 py-2 mt-2 rounded-xl font-semibold hover:bg-red-300'
                        onClick={props.onClickCancel}>Cancel</button>
                </p>
            </form>
        </div>

    )
}
