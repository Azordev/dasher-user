import { Component } from 'react'
import PropTypes from 'prop-types'
import Error from '../pages/Error'
import { logError } from '../helpers'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    const { errorInfo, error } = this.state

    if (errorInfo) {
      const errorId = logError({ error, codeLocation: 'codeLocation', type: 'crash' })
      return <Error errorInfo={errorInfo} errorId={errorId} />
    }
    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}
