import React from 'react'

const EmployeeCard = ({ employee }) => {
  return (
    <article>
      <img
        className='employee-card__photo'
        src={`https://i.pravatar.cc/320?u=${employee.id}`}
        alt=''
      />
      <div className='employee-card__body'>
        <h3 className='employee-card__name'>{employee.name}</h3>
        <p className='employee-card__role'>
          {employee.company?.name || '-'} • {employee.company?.catchPhrase || ''}
        </p>
      </div>
      <div className='employee-card__meta'>
        <span>{employee.email}</span>
        <a href={`tel:${employee.phone}`}>Подзвонити</a>
      </div>
    </article>
  )
}

export default EmployeeCard
