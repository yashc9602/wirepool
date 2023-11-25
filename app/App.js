import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDrawer from './navigation/AppDrawer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    < NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= "App Drawer"
          component={AppDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

