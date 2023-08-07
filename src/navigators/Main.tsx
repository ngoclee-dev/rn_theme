import {NavigationKeys} from "~navigators/keys";
import {Download, Home, Profile, Videos} from "~screens/Tabs";
import { createProfiledBottomTabNavigator } from "@shopify/react-native-performance-navigation-bottom-tabs";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faDownload, faHouse, faUser, faVideo} from "@fortawesome/pro-regular-svg-icons";

const {Tab, buildProfiledBottomTabBarButton} = createProfiledBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={NavigationKeys.Home}
        component={Home}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faHouse} size={size} color={color}/>
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Videos}
        component={Videos}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faVideo} size={size} color={color}/>
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Download}
        component={Download}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faDownload} size={size} color={color}/>
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Profile}
        component={Profile}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={faUser} size={size} color={color}/>
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
