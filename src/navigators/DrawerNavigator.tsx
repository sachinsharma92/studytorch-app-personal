import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleConstants } from '../styles/style-constants';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import CollectionsScreen from '../screens/collections';
import SharedWithMeScreen from '../screens/sharedWithMe';
import LogoPrimary from "../common/logoPrimary"
import Title from '../components/Typography/Title';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import InputPrimary from '../common/inputPrimary';
import PlannerScreen from '../screens/planner';
import GroupsScreen from '../screens/groups';
import ChecklistScreen from '../screens/checklist';
import QuizScreen from '../screens/quiz';
import CollectionDetailScreen from '../screens/collections/details';
import SharedDetailsScreen from '../screens/sharedWithMe/details';
import GroupDetailScreen from '../screens/groups/details';
import { ROUTES } from '../constants/routes';
import ProfileScreen from '../screens/profiles';
import SubText from '../components/Typography/SubText';
import SearchWorkspaceModal from '../common/searchWorkspace';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {
  navigation: any
}

export default function DrawerNavigator({ navigation }: DrawerNavigatorProps) {
  const [isSearchWorkspace, setSearchWorkspace] = useState(false);
	const searchWorkspaceToggleModal = () => {
		setSearchWorkspace(!isSearchWorkspace);
	};

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
            headerTitle: () => (
              <TouchableOpacity onPress={searchWorkspaceToggleModal} activeOpacity={0.5} style={[ styles.searchInput, { flexDirection: 'row', paddingHorizontal: 20 }]}>
                <SubText style={{lineHeight: 15,}}>Search WorkSpace</SubText>
                {/* <InputPrimary style={styles.searchInput} placeholder="Search WorkSpace" inputStyle={styles.inputCustom} /> */}
              </TouchableOpacity>
            ),
            headerRight: ({ }) => <View>
              <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.PROFILE_SCREEN) }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  }}
                />
              </TouchableOpacity>
            </View>,
          }}
          drawerContent={props => <StudyTorchDrawer {...props} />}
        >
          <Drawer.Screen
            name="Dashboard"
            component={BottomTabNavigator}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Dashboard</Title>,
              drawerIcon: ({ }) => <Icon name="home-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />
          <Drawer.Screen
            name="Collections"
            component={CollectionsScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Collections</Title>,
              drawerIcon: ({ }) => <Icon name="folder-table-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />
          <Drawer.Screen
            name="Shared With Me"
            component={SharedWithMeScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Shared With Me</Title>,
              drawerIcon: ({ }) => <Icon name="account-multiple-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />


          <Drawer.Screen
            name="Groups"
            component={GroupsScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Groups</Title>,
              drawerIcon: ({ }) => <Icon name="account-group-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />
          <Drawer.Screen
            name="Planner"
            component={PlannerScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Planner</Title>,
              drawerIcon: ({ }) => <Icon name="calendar-month-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />

          <Drawer.Screen
            name="Checklist"
            component={ChecklistScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Checklist</Title>,
              drawerIcon: ({ }) => <Icon name="checkbox-marked-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />

          <Drawer.Screen
            name="Quiz"
            component={QuizScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Quiz</Title>,
              drawerIcon: ({ }) => <Icon name="help-circle-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />


          {/* Other Navigation  */}
          <Drawer.Screen
            name="Collection Detail"
            component={CollectionDetailScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Collection Detail</Title>,
              drawerIcon: ({ }) => <Icon name="help-circle-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />

          <Drawer.Screen
            name="Shared Details"
            component={SharedDetailsScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Shared Details</Title>,
              drawerIcon: ({ }) => <Icon name="help-circle-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />

          <Drawer.Screen
            name="Group Details"
            component={GroupDetailScreen}
            options={{
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Group Details</Title>,
              drawerIcon: ({ }) => <Icon name="help-circle-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />

          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
              drawerLabel: ({ }) => <Title style={styles.drawerLabelStyle}>Profile</Title>,
              drawerIcon: ({ }) => <Icon name="help-circle-outline" size={25} color={StyleConstants.COLOR_TEXT_LIGHT} />,
            }}
          />
        </Drawer.Navigator>

        <SearchWorkspaceModal isVisible={isSearchWorkspace} onBackdropPress={searchWorkspaceToggleModal}/>
      </NavigationContainer>
    </>
  );
}

const StudyTorchDrawer = (props: any) => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ paddingHorizontal: 20 }}>
        <LogoPrimary dark />
      </View>
      <DrawerContentScrollView
        style={styles.container}
        contentContainerStyle={styles.content} {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem label="Logout" onPress={() => dispatch(logout())} /> */}
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {
          dispatch(logout())
        }}
        style={styles.navLink}>
        <Icon name="logout-variant" size={20} color={StyleConstants.COLOR_TEXT_LIGHT} />
        <Title style={styles.textLogout}>Logout</Title>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  content: {
    justifyContent: 'space-between',
  },
  logo: {
    marginHorizontal: 10,
  },
  navLink: {
    backgroundColor: StyleConstants.COLOR_GRAY_EA,
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textLogout: {
    fontSize: 14,
    color: StyleConstants.COLOR_TEXT_LIGHT,
    marginLeft: 10,
    textTransform: 'uppercase'
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
    marginBottom: 0,
  },
  drawerIcon: {
    width: 25,
    height: 25,
  },
  drawerLabelStyle: {
    fontSize: 14,
    color: StyleConstants.COLOR_TEXT,
    fontFamily: 'Sofia-Pro-Regular',
    left: -20
  },
  drawerStyle: {
    width: '70%',
  },
  drawerHeaderStyle: {
    height: 70,
    shadowColor: "#777",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 15
  },
  searchInput: {
    minWidth: '100%',
    marginLeft: 0,
    borderWidth: 1,
    borderColor: StyleConstants.COLOR_BORDER,
    height: 40,
    borderRadius: 50,
    alignItems:'center',
  },
  inputCustom: {
    height: 35,
    borderRadius: 50,
    backgroundColor: '#fafafb'
  }
});