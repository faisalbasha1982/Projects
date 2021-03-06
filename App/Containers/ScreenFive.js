/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import {
    Container,
    Header,
    Left,
    Content,
    Thumbnail,
    Tab,
    Tabs,
    TabHeading,
    Icon,
    Input,
    Item,
    Button,
    Drawer,
} from 'native-base';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class ScreenFive extends Component {

    render() {

        return (
                <Container style={{ backgroundColor: 'white'}}>
                    <Content>                     
                        <View style={{ backgroundColor: 'white',flex:1}}>
                        <TouchableOpacity onPress = { () => { this.props.navigateBack() } } style={{marginLeft: 25, marginTop: 25, }}>
                                  <Image source={ require('../Images/barrow.png')} style={{ marginLeft: 20,marginTop: 20,  width: 15, height: 24, resizeMode: 'contain'}} />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.logo}>
                                   <Image source={ require('../Images/mlogobig.png')} style={{ width: 180, height: 55, resizeMode: 'contain'}} />
                        </View>
                        <View style={styles.mlogo}>
                                <Button rounded style={{ width: 100, borderRadius: 20, alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#ff8d0d' }}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Owner</Text></Button>
                        </View>

                         <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 75,
                            marginLeft: 10
                          }}>
                            <View style={{width: 250, height: 70,}}>
                                <Item style={{ justifyContent: 'center', alignItems: 'center', height: 25 }}>
                                    <Input style={{ fontSize: 10, color: 'gray',textAlign: 'left' }} placeholder="654654645" />
                                </Item>
                             </View>    
                             <View style={{ width: 250, height: 50, marginLeft: 75, marginTop: 30 }}>
                                    <Button style={{ width: 170, borderRadius: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff8d0d' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>register</Text></Button>
                             </View>
                          </View>                 
                    </Content>
                </Container>
        );
    }
}

const styles = StyleSheet.create({

    logo: {        
        flex: 2,
        height: 70,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',        
        marginTop: 25,

    },

    mlogo:{
        flex: 2,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
        marginTop: 60,

    }



});

const mapStateToProps = state => {
    return {
        //fetching: LoginSelectors.getFetching(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {

        resetNavigate: navigationObject => dispatch(NavigationActions.reset(navigationObject)),
        navigate: navigationObject => dispatch(NavigationActions.navigate(navigationObject)),
        navigateBack: () => dispatch(NavigationActions.back()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFive);