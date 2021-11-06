import { StarBtn, SelectedStarBtn } from './Rating.styled'
import { useState } from 'react'

const Rating = (z) => {
  const stars = [...Array(5).keys()]
  const [activeStarsArray, setActiveStarsArray] = useState([])
  function manageRating(event, idx) {
    const activeStars = stars.filter(item => {
      return item < idx
    })
    setActiveStarsArray(activeStars)
  }
  return (
    <div>
      {stars.map(x => {
        return activeStarsArray.includes(x) ? (
          <SelectedStarBtn
            key={x++}
            onClick={e => {
              manageRating(e, x)
            }}
          />
        ) : (
          <StarBtn
            key={x++}
            onClick={e => {
              manageRating(e, x)
            }}
          />
        )
      })}
    </div>
  )
}

export default Rating
