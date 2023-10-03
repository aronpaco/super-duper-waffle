import React from "react"

const interests = ["Reading", "Hiking", "Cooking", "Gaming"]
const InterestList = ({ interests }) => {
  return (
    <ul>
      {interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  )
}

export default InterestList
