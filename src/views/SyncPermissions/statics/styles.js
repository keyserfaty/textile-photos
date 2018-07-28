import {StyleSheet} from 'react-native'
import { BentonSansBold } from '../../../util/fonts'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 51
  },
  title: {
    fontFamily: "BentonSans",
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    paddingHorizontal: 60
  },
  contentContainer: {
    paddingHorizontal: 18
  },
  listContainer: {
    borderBottomWidth: 1,
    borderColor: '#d8d8d8'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#d8d8d8'
  },
  itemTitle: {
    ...BentonSansBold(),
    fontFamily: "BentonSans",
    fontSize: 16,
    lineHeight: 27,
  },
  itemDescription: {
    fontFamily: "BentonSans",
    fontSize: 16,
    lineHeight: 27,
    color: "#4a4a4a",
    marginRight: 6
  },
  itemTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 30,
    paddingHorizontal: 28
  }
})
