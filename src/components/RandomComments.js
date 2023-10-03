// RandomComments.js
import React, { useEffect, useState } from "react"
import axios from "axios"

const RandomComments = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomComments = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          {
            params: {
              postId: postId,
              _limit: 2 // Limit to 2 comments per post
            }
          }
        )

        setComments(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching comments:", error)
        setLoading(false)
      }
    }

    fetchRandomComments()
  }, [postId])

  if (loading) {
    return <p>Loading comments...</p>
  }

  return (
    <div>
      <h4>Comments:</h4>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default RandomComments
