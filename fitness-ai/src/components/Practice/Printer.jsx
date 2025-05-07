import React from 'react'
import Employees from './Employees'
import { FaGamepad, FaCode, FaObjectGroup } from 'react-icons/fa';

const employees = [
    {
        name: "Andrew",
        id:1,
        icon: <FaGamepad className="text-blue-500 text-3xl"/>
    },
    {
        name: "Anne",
        id:2,
        icon: <FaGamepad className='text-blue-500 text-3xl'/>
    },
    {
        name: "Bert",
        id:3,
        icon: <FaGamepad className='text-blue-500 text-3xl'/>
    }
];

function Printer() {
  return (
    <div className='flex justify-center w-full px-4'>
        <div className='PrintStuff flex flex-wrap justify-center gap-6 p-4 max-w-4xl'>
            {employees.map((employee) => (
                <Employees 
                    key={employee.id} 
                    name={employee.name} 
                    id={employee.id} 
                    icon={employee.icon}/>
            ))}
        </div>
    </div>
    
  );
};

export default Printer