import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Text, View} from 'react-native'
import {Link, withRouter} from 'react-router-native'

import {Button, Footer, Input, LinkText, LogoWithText} from '../common'
import styles from './styles'
import commonStyles from '../commonStyles'

class SignIn extends Component {
    static propTypes = {
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
    };

    constructor (props) {
      super(props)
      this.state = {username: '', password: ''}
    }

    render () {
      const {history} = this.props
      const {username, password} = this.state
      return (
        <Fragment>
          <View style={commonStyles.container}>
            <LogoWithText text="Please Login In to continue"/>
            <Input
              value={username}
              label="Username"
              onChangeText={(text) => this.setState(() => ({username: text}))}
            />
            <Input
              value={password}
              label="Password"
              secureTextEntry
              onChangeText={(text) => this.setState(() => ({password: text}))}
            />
            <View style={styles.signInButtonContainer}>
              <Button
                primary
                title="Sign In"
                disabled={!username || !password}
                onPress={() => history.push('/welcome')}
              />
            </View>
          </View>
          <Footer>
            <Text style={{fontSize: 12}}>Don't have an account?</Text>
            <Link to={{pathname: '/signUp'}}>
              <LinkText style={{fontSize: 12}}>Sign Up</LinkText>
            </Link>
          </Footer>
        </Fragment>
      )
    }
}

export default withRouter(SignIn)