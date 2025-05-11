import React from 'react'

const Cards = (props) => {
    const { icon, title, info } = props
    return (
        <div className='Content  w-80 max-w-xs text-center p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow'>
            
            {/*Controls icon style */}
            <div className='Icon inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4 mx-auto '> 
                <div className='p-3 border rounded-full border-blue-200 bg-blue-100'> {icon} </div>
            </div>
            <h6 className='text-lg font-semibold mb-2'>{title}</h6>
            <p className='text-gray-700'>{info}</p>
            
        </div>
    );
};

export default Cards