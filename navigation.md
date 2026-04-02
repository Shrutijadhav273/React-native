What is Navigation in React Native?

Navigation means:
👉 Moving between different screens (pages)

Example:

Login → Home
Home → Profile
Profile → Settings


Stack Navigation (Most Important)
🔹 Concept:

Like a stack of pages:

New screen goes on top
Back button removes top screen
📌 Example:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  );
}

function DetailsScreen() {
  return <Text>Details Screen</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Navigation Methods
navigation.navigate('Details'); // go to screen
navigation.goBack();           // go back
navigation.push('Details');    // open same screen again
navigation.replace('Home');    // replace current screen


Tab Navigation (Bottom Tabs)
🔹 Concept:

Tabs at bottom like:

Home | Profile | Settings
📌 Example:
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

👉 Used in:

Instagram
WhatsApp
E-commerce apps

