import { Component } from 'react'
import PropTypes from 'prop-types'
import Error from '../pages/Error'
import { logError } from '../helpers'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      errorInfo: '',
      hasError: false,
    }
  }

  static getDerivedStateFromError(_error) {
    if (_error) {
      return { hasError: true }
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo, error })
  }

  render() {
    const { hasError, errorInfo, error } = this.state

    if (hasError) {
      const errorId = logError({ error: error, codeLocation: 'codeLocation', type: 'crash' })
      return <Error errorInfo={errorInfo} errorId={errorId} />
    }

    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}
