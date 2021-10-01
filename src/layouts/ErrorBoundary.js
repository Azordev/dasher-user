import { Component } from 'react'
import PropTypes from 'prop-types'
import Error from '../pages/Error';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      errorInfo: '',
      hasError: false,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo, error })
  }

  render() {
    const { hasError, errorInfo } = this.state

    if (hasError) return <Error errorInfo={errorInfo} />

    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}
