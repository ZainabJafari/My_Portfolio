import React from 'react'

const api = () => {
  // fetch from backend
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res => res.json())
 .then(data => console.log(data))

  return (
    <div>

    </div>
  )
}

export default api