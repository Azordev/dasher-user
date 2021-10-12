import PropTypes from 'prop-types'
import Wrapper from './Marker.styled'

const Marker = ({ isCenter }) => <Wrapper center={isCenter} />

Marker.defaultProps = {
  onClick: null,
  isCenter: false,
}

Marker.propTypes = {
  onClick: PropTypes.func,
  isCenter: PropTypes.bool,
}

export default Marker
