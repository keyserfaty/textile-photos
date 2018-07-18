import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Dimensions} from 'react-native'
import {Link, withRouter} from 'react-router-native'

import {Button, Footer, Input, LinkText, LogoWithText} from '../common'
import commonStyles from '../commonStyles'
import styles from './styles'

const width = Dimensions.get('window').width

class SignUp extends Component {
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
    };

    constructor (props) {
      super(props)
      this.state = {email: '', name: '', username: '', password: ''}
    }

    render () {
      const {history} = this.props
      const {email, name, username, password} = this.state
      return (
        <Fragment>
          <View style={commonStyles.container}>
            <LogoWithText text="Sign up to start using the app with your friends."/>
            <Input
              value={name}
              label="Name"
              keyboardType="default"
              onChangeText={(text) => this.setState(() => ({name: text}))}
            />
            <Input
              value={email}
              label="Email"
              keyboardType="default"
              onChangeText={(text) => this.setState(() => ({email: text}))}
            />
            <Input
              value={username}
              label="Username"
              keyboardType="default"
              onChangeText={(text) => this.setState(() => ({username: text}))}
            />
            <Input
              value={password}
              label="Password"
              keyboardType="default"
              secureTextEntry
              onChangeText={(text) => this.setState(() => ({password: text}))}
            />
            <View style={styles.conditionsContainer}>
              <Text style={{fontSize: 12}}>By signing up you agree to our</Text>
              <LinkText style={{fontSize: 12}}>Terms and Conditions</LinkText>
            </View>
            <Button
              primary
              title="Create account"
              disabled={!name || !email || !username || !password}
              onPress={() => history.push('/signIn')}
            />
          </View>
          <Footer>
            <Text style={{fontSize: 12}}>Already have an account?</Text>
            <Link to={{pathname: '/signIn'}}>
              <LinkText style={{fontSize: 12}}>Sign In</LinkText>
            </Link>
          </Footer>
        </Fragment>
      )
    }
}

export default withRouter(SignUp)
