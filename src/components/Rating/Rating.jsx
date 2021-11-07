// @ts-check
import { StarBtn, SelectedStarBtn } from './Rating.styled'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Rating = ({ setRating }) => {
  const stars = [...Array(5).keys()]
  const [activeStarsArray, setActiveStarsArray] = useState([])
  function manageRating(idx = 0) {
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
            onClick={_ => {
              manageRating(x)
            }}
          />
        ) : (
          <StarBtn
            key={x++}
            onClick={_ => {
              manageRating(x)
            }}
          />
        )
      })}
    </div>
  )
}

Rating.propTypes = {
  setRating: PropTypes.func,
}

export default Rating
