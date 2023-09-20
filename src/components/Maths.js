import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>press</button>
    </>
  )
}

export default Maths
