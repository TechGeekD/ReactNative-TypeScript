import * as React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../../Themes/index'

// Styles
import styles from './Styles/LaunchScreenStyles'
import { NavigationActions } from 'react-navigation';

interface LaunchScreenComponentProps {
  navigation?: any
}


const navigateAction = NavigationActions.navigate({
  routeName: 'LoginScreen',
  params: {}
});


export default class LaunchScreen extends React.Component <LaunchScreenComponentProps> {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
            </Text>
            <Button
              onPress={() => {
                this.props.navigation.dispatch(navigateAction)
              }}
              title='Logout'
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
