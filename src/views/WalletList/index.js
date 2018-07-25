import React from 'react'
import { View, Text, Image } from 'react-native'

import Toolbar from '../../components/Toolbar'
import BottomBar from '../../components/BottomBar'
import BottomDrawerPhotos from '../../components/BottomDrawerPhotos'
import PhotoGridList from './components/PhotoGridList/PhotoGridListContainer'

import styles from './statics/styles'
import list from './constants'

const WalletList = () => {
  const type = 'grid' // TODO: change this value to 'list' to display the other arrangement of photos
  const drawer = false

  return (
    <View style={styles.container}>
      <Toolbar
        style={styles.toolbar}
        left={<Image style={styles.toolbarIconUser} source={require('./statics/icon-photo1.png')} />}
        right={<Image style={styles.toolbarIconList} source={require('./statics/icon-list.png')} />}
      >
        <Text style={styles.toolbarTitle}>Hello, Michael</Text>
      </Toolbar>
      <PhotoGridList type={type} photos={list} />
      <BottomBar active='wallet' />
      { drawer && <BottomDrawerPhotos list={photoList} /> }
    </View>
  )
}

export default WalletList