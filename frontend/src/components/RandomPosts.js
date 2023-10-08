// RandomPosts.js
import React, { useEffect, useState } from "react"
import axios from "axios"
import RandomComments from "./RandomComments"

const RandomPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Generate 2 random numbers from 1 to 100
    const randomNumbers = Array.from(
      { length: 2 },
      () => Math.floor(Math.random() * 100) + 1
    )

    // Fetch posts using the generated random numbers
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: { id: randomNumbers }
          }
        )

        setPosts(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Random Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <RandomComments postId={post.id} />
        </div>
      ))}
    </div>
  )
}

export default RandomPosts
