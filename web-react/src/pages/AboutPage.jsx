import { useState, useMemo } from 'react'
import React from 'react'
import EmployeeList from '../components/EmployeeList'
import { useFetchEmployees } from '../hooks/useFetchEmployees.'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const AboutPage = () => {
  const { data, loading, error } = useFetchEmployees(ENDPOINT)
  console.log(data)
  const [q, setQ] = useState('')

  const filteredEmployees = useMemo(() => {
    const items = Array.isArray(data) ? data : []
    if (!q) return items
    const n = q.toLowerCase()
    return items.filter(
      (u) =>
        u.name.toLowerCase().includes(n) ||
        (u.company?.name || '').toLowerCase().includes(n)
    )
  }, [data, q])

  return (
    <div className='about-page__container'>
      <div className='about-page__intro'>
        <h2>About our team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <input
          type='text'
          placeholder='Search by name or company…'
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className='contact-form__input'
          style={{ maxWidth: 360 }}
        />
      </div>

      <div className='about-page__employee-container'>
        {loading && <p>Loading…</p>}
        {!loading && error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && <EmployeeList employees={filteredEmployees} />}
        {!loading && !error && filteredEmployees.length === 0 && <p>No data</p>}
      </div>
    </div>
  )
}
export default AboutPage
