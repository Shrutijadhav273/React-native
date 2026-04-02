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

Drawer Navigation (Side Menu)
🔹 Concept:

Sidebar menu (hamburger menu ☰)

📌 Example:
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

👉 Used in:

Dashboard apps
Admin panels


. Passing Data Between Screens
📌 Sending data:
navigation.navigate('Details', {
  name: 'Shruti',
  age: 21
});
📌 Receiving data:
function DetailsScreen({ route }) {
  const { name, age } = route.params;

  return <Text>{name} - {age}</Text>;
}
🔁 7. Going Back with Data
navigation.navigate({
  name: 'Home',
  params: { message: 'Hello from Details' },
  merge: true,
});