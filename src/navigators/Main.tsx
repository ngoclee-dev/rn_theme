import {NavigationKeys} from "~navigators/keys";
import {Download, Home, Profile, Videos} from "~screens/Tabs";
import { createProfiledBottomTabNavigator } from "@shopify/react-native-performance-navigation-bottom-tabs";

const {Tab, buildProfiledBottomTabBarButton} = createProfiledBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={NavigationKeys.Home}
        component={Home}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Videos}
        component={Videos}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Download}
        component={Download}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
        }}
      />
      <Tab.Screen
        name={NavigationKeys.Profile}
        component={Profile}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton()
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
