import React from 'react'

import './Delete.css'

const Delete = (props: any) => {
    
  const handleDelete = (e: any) => {
    let newData = [...props.data]
    delete newData[props.id]
    newData = newData.filter(Boolean)
    props.setData(newData)
  }

  return (
    <div>
      <button
        className="delete"
        onClick={ handleDelete }
      >x</button>
    </div>
  )
}

export default Delete
