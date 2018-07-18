import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

import styles from './styles'

const Footer = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.func
  ])
}

export default Footer