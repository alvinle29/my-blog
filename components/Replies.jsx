import React,{useState, useEffect} from 'react'
import { getReplies } from "../services"

const Replies = ({comment}) => {
  const [replies, setReplies] = useState([])

  useEffect(() => {
    getReplies(comment)
      .then((result) => setReplies(result))
  }, [])
  
  return (
    <div>{replies}</div>
  )
}

export default Replies