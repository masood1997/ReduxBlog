import React from 'react'
import { useSelector } from 'react-redux'
import { allUsers } from '../features/users/usersSlice'

const DisplayAuthor = ({userId}) => {
  const users = useSelector(allUsers)

  const author = users.find(user=>user.id === Number(userId))

  const displayName = author?.author ? author.author : 'Unknown Author'

  return (
    <div>by {displayName}</div>
  )
}

export default DisplayAuthor