import React from 'react'

const Employees = (props) => {
    const { name, id, icon } = props;
    return (
            <div className='Content  rounded-lg shadow-md overflow-hidden border border-gray-200 w-64'>
                <div className='m-5 text-center'>
                    <div className='flex justify-center mb-2 '> 
                        <div className='p-3 border rounded-full bg-slate-300'> {icon} </div>
                    </div>
                    <h6 className='font-medium'>{name}</h6>
                    <h6 className='text-sm text-gray-600'>ID: {id}</h6>
                </div>  
            </div>
    );
};

export default Employees