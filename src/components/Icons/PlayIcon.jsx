import PropTypes from 'prop-types'

export function PlayIcon({ className }) {
  return (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    {/* Outer circle using currentColor */}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z"
      clipRule="evenodd"
    />
    {/* Play triangle always white */}
    <path
      fill="white"
      d="M16.274 11.017a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
    />
  </svg>
  )
}

PlayIcon.propTypes = {
  className: PropTypes.string,
}