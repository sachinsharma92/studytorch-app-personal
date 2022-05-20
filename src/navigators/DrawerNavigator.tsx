import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleConstants } from '../styles/style-constants';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import BottomTabNavigator from './BottomTabNavigator';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props: any) {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: 'front',
            headerShown: true,
            headerStyle: styles.drawerHeaderStyle,
            drawerStyle: styles.drawerStyle,
            drawerItemStyle: styles.drawerItemStyle,
            drawerLabelStyle: styles.drawerLabelStyle,
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'white',
            unmountOnBlur: true,
          }}
        >
          <Drawer.Screen name="Home" component={BottomTabNavigator} />
          {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    paddingHorizontal: 10,
  },
  content: {
    justifyContent: 'space-between',
    flexGrow: 2,
  },
  logo: {
    marginHorizontal: 10,
  },
  navLink: {
    backgroundColor: StyleConstants.COLOR_SECONDARY,
    borderRadius: StyleConstants.BORDER_RADIUS,
    marginBottom: 15,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  version: {
    fontSize: 16,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingTop: 28,
    borderTopWidth: 1,
    borderTopColor: '#E6D5D5',
  },
  updateSection: {
    borderTopWidth: 1,
    borderTopColor: '#eaeaeb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    marginTop: 10
  },
  btnUpdate: {
    backgroundColor: StyleConstants.COLOR_PRIMARY,
    height: 50,
    borderRadius: StyleConstants.BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140
  },
  iconStyle: {
    width: 20,
    marginLeft: 10,
    position: 'absolute',
    color: StyleConstants.COLOR_PRIMARY
  },
  drawerItemStyle: {
    marginBottom: 10,
  },
  drawerIcon: {
    width: 25,
    height: 25,
  },
  drawerLabelStyle: {
    fontSize: 14,
    color: StyleConstants.COLOR_TEXT,
  },
  drawerStyle: {
    width: '70%',
  },
  drawerHeaderStyle: {
    height: 70,
    elevation: 0,
    shadowOpacity: 0,
  },
  closeButton: {
    backgroundColor: 'rgba(256,256,256,0.5)',
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonSection: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 40,
    right: 20,
    zIndex: 2,
    marginTop: 40
  },
  numberAlertStyle: {
    width: 17,
    height: 17,
    borderRadius: 50,
    fontSize: 10,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    position: 'absolute',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaeb',
    backgroundColor: StyleConstants.COLOR_GRAY_F6,
  },
  menuText: {
    fontSize: 26,
    marginBottom: 20,
    color: StyleConstants.COLOR_TEXT
  },
  versionText: {
    fontSize: 14,
    marginTop: 6,
    color: StyleConstants.COLOR_TEXT
  },
  profileIcon: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER
  },
  backButtonStyle: {
    marginTop: 0,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomColor: StyleConstants.COLOR_BORDER,
  },
});