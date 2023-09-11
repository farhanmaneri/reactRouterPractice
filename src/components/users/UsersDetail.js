import React from 'react'
import { useParams } from 'react-router-dom'

function UsersDetail() {
    const {userId} = useParams()
  return (
    <>
    <div>UsersDetail</div>
    <div>UsersDetail Id {userId}</div>
    </>)
}

export default UsersDetail