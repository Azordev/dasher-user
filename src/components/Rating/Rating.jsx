import { StarBtn, SelectedStarBtn } from './Rating.styled'
import { useState } from 'react'
import PropTypes from 'prop-types'
// @ts-check
// eslint-disable-next-line react/prop-types
const Rating = ({ setRating }) => {
  const stars = [...Array(5).keys()]
  const [activeStarsArray, setActiveStarsArray] = useState([])
  function manageRating(event, idx) {
    const activeStars = stars.filter(item => {
      return item < idx
    })
    setActiveStarsArray(activeStars)
    setRating(activeStars.length)
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

Rating.prototype = {
  setRating: PropTypes.func.isRequired,
}

export default Rating
