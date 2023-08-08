import {AppArrayTabs, TabType} from "~navigators/keys";
import {createProfiledBottomTabNavigator} from "@shopify/react-native-performance-navigation-bottom-tabs";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const {Tab, buildProfiledBottomTabBarButton} = createProfiledBottomTabNavigator();
const TabNavigator = () => {
  const renderTab = (item: TabType, index: number) => {
    return (
      <Tab.Screen
        key={index}
        name={item.title}
        component={item.component}
        options={{
          tabBarButton: buildProfiledBottomTabBarButton(),
          tabBarIcon: ({color, size}) => <FontAwesomeIcon icon={item.icon} size={size} color={color}/>
        }}
      />
    )
  }
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {AppArrayTabs.map(renderTab)}
    </Tab.Navigator>
  );
};

export default TabNavigator;
