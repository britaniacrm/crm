import React from 'react'

import PropTypes from 'prop-types'

import colors from '@britania-crm/styles/colors'

const InfoIcon = ({ color, id }) => (
  <svg id={ id } width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM11 9H13V7H11V9Z" fill={ color }/>
  </svg>

)

InfoIcon.propTypes = { color: PropTypes.string, id: PropTypes.number }

InfoIcon.defaultProps = { color: colors.info.main, id: Date.now() }

export default InfoIcon
