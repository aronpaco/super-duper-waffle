import React from "react"

const Hobbies = () => {
  const hobbiesData = [
    { hobby: "Suusatamine" },
    { hobby: "Rattaga sõitmine" },
    { hobby: "Drooniga lendamine" }
  ]

  return (
    <div>
      <h2>Minu hobid:</h2>
      <ul>
        {hobbiesData.map((hobby, index) => (
          <li key={index}>
            <h3>{hobby.hobby}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hobbies
