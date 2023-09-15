import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Johndoe from "./assets/johndoe.png";
import {
  Home,
  Profile,
  Stack,
  BecomeEmployee,
  EditProfile,
  Favorites,
  Feedback,
  Help,
  History,
  Logout,
  Schedule,
  Settings,
} from "./src/components";
import { StackTab } from "./src/Tabs";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                }}
              >
                <Image
                  source={Johndoe}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  John Doe
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#111",
                  }}
                >
                  Product Manager
                </Text>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
          }}
          component={StackTab}
        />
        <Drawer.Screen
          name="BecomeEmployee"
          options={{
            drawerLabel: "BecomeEmployee",
            title: "BecomeEmployee",
            drawerIcon: () => (
              <MaterialIcons name="history" size={20} color="#808080" />
            ),
          }}
          component={BecomeEmployee}
        />
        <Drawer.Screen
          name="EditProfile"
          options={{
            drawerLabel: "EditProfile",
            title: "EditProfile",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            ),
          }}
          component={EditProfile}
        />
        <Drawer.Screen
          name="Schedule"
          options={{
            drawerLabel: "Schedule",
            title: "Schedule",
            drawerIcon: () => (
              <MaterialIcons
                name="dashboard-customize"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Schedule}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            ),
          }}
          component={Settings}
        />

        <Drawer.Screen
          name="Favorites"
          options={{
            drawerLabel: "Favorites",
            title: "Favorites",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            ),
          }}
          component={Favorites}
        />

        <Drawer.Screen
          name="Feedback"
          options={{
            drawerLabel: "Feedback",
            title: "Feedback",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="certificate"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Feedback}
        />
        <Drawer.Screen
          name="Help"
          options={{
            drawerLabel: "Help",
            title: "Help",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            ),
          }}
          component={Help}
        />

        <Drawer.Screen
          name="History"
          options={{
            drawerLabel: "History",
            title: "History",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="message-alert-outline"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={History}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
