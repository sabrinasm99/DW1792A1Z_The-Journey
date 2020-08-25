import React from 'react'

function NewJourneyContent() {
    return (
        <>
        <div className='mt-12'>
            <div className='px-10'>
                <h1 className='text-4xl font-bold'>New Journey</h1>
                <div className='px-10 mt-10'>
                    <h2 className='text-xl font-bold'>Title</h2>
                    <input type='text' className='w-full mt-2 border rounded p-1 pl-2 focus:outline-none focus:shadow-outline' style={{borderColor: '#A6A6A6'}} />
                </div>
            </div>
        </div>
        </>
    )
}

export default NewJourneyContent
