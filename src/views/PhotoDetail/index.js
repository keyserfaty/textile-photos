import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import ImageSc from 'react-native-scalable-image'

import Toolbar from '../../components/Toolbar'
import BottomDrawerPhotos from '../../components/BottomDrawerPhotos'
import PhotoWithTextBox from '../../components/PhotoWithTextBox'
import PhotoBoxEmpty from '../../components/PhotoBoxEmpty'

import styles from './statics/styles'
import photos, { photoList } from './constants'
const { width } = Dimensions.get('window')

const PhotoDetail = props => {
  const { navigation } = props

  const drawer = false
  const photoId = navigation.getParam('id')
  const sharedProp = navigation.getParam('sharedProp')

  return (
    <View style={styles.container}>
      <Transition appear='top'>
        <Toolbar
          style={styles.toolbar}
          left={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.toolbarLeft} source={require('./statics/icon-arrow-left.png')} />
            </TouchableOpacity>
          }
          right={
            <View style={styles.toolbarIconsList}>
              <Image style={styles.toolbarAddIcon} source={require('./statics/icon-add.png')} />
              <Image style={styles.toolbarDownloadIcon} source={require('./statics/icon-download.png')} />
              <Image style={styles.toolbarShareIcon} source={require('./statics/icon-share.png')} />
              <Image style={styles.toolbarRemoveIcon} source={require('./statics/icon-remove.png')} />
            </View>
          }
        />
      </Transition>
      <Transition shared={sharedProp} appear='scale'>
        <ImageSc width={width} source={photos[photoId].photo} />
      </Transition>
      <Transition appear='bottom'>
        <View>
          <View style={styles.photoDetails}>
            <View style={styles.detailItem}>
              <Image style={styles.iconLocation} source={require('./statics/icon-location.png')} />
              <Text style={styles.detailText}>San Francisco</Text>
            </View>
            <View style={[styles.detailItem, { marginLeft: 24, flexGrow: 1 }]}>
              <Image style={styles.iconCalendar} source={require('./statics/icon-calendar.png')} />
              <Text style={styles.detailText}>20/03/2018</Text>
            </View>
            <Image style={styles.iconInfo} source={require('./statics/icon-info.png')} />
          </View>
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.threadsTitle}>This photo appears in the following threads:</Text>
            <PhotoWithTextBox text='San Francisco' photo={require('./statics/photo1.png')} />
            <PhotoWithTextBox text='San Francisco' photo={require('./statics/photo2.png')} />
            <PhotoBoxEmpty style={{ marginBottom: 9, marginTop: 0 }} />
          </ScrollView>
        </View>
      </Transition>
      { drawer && <BottomDrawerPhotos list={photoList} /> }
    </View>
  )
}

export default PhotoDetail