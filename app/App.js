import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDrawer from './navigation/AppDrawer';
import StackNavigator from './navigation/StackNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <Stack.Navigator>
        <Stack.Screen 
          name= "App Drawer"
          component={AppDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      <StackNavigator />
    </>
  );
}

