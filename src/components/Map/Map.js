import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

import Marker from '../Marker'

const Wrapper = styled.main`
  width: 100%;
  height: 80vh;
  min-height: 356px;
`

const Map = ({ center, dasher }) => (
  <Wrapper>
    <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }} defaultZoom={10} defaultCenter={center}>
      <Marker key={0} text="You" isCenter lat={center[0]} lng={center[1]} />
      <Marker key={1} text="dasher" lat={dasher[0]} lng={dasher[1]} />
    </GoogleMapReact>
  </Wrapper>
)

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  dasher: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default React.memo(Map, (prevProps, nextProps) => {
  return prevProps.center === nextProps.center || prevProps.dasher === nextProps.dasher
})
