import PropTypes from 'prop-types'

const Error = ({ errorInfo = { errorInfo: undefined} }) => (
  <div>
    <p>
      There was an error in loading this page.{' '}
      <button
        style={{ cursor: 'pointer', color: '#0077FF' }}
        onClick={() => {
          window.location.reload()
        }}
      >
        Reload this page
      </button>{' '}
    </p>
    <details className="error-details">
      <summary>Click for error details</summary>
      {errorInfo && errorInfo.componentStack.toString()}
    </details>
  </div>
)

Error.propTypes = {
  errorInfo: PropTypes.shape({
    componentStack: PropTypes.object.isRequired,
  }),
}

export default Error
