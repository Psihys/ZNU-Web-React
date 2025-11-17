import React from 'react'
import EmployeeCard from './EmployeeCard'

const EmployeeList = ({employees}) => {
  return (
    <ul className='employee-list'>
       {
        employees.map((employee) => (
          <li key={employee.id}>
            <EmployeeCard employee={employee} />
          </li>
        ))
       }
    </ul>
  )
}

export default EmployeeList