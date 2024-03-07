import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import Login from "./screens/registeration/Login";
import Register from "./screens/registeration/Register";
import ForgetPassword from "./screens/registeration/ForgetPassword";
import NewPass from "./screens/registeration/NewPass";
import Otp from "./screens/registeration/Otp";
import SplashScreen from "./screens/splashScreen/SplashScreen";
import Onboarding from "./screens/onBoarding/Onboarding";
import ButtonTapNavigation from "./tapNavigation/ButtonTapNavigation";
import Sections from "./tapNavigation/screen/Sections.js/Sections";
import { Provider } from "react-redux";
import { store } from "./rtk/store";
import CheckAuth from "./CheckAuth";
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontLoaded] = useFonts({
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar animated={true} barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="NewPass" component={NewPass} />
            <Stack.Screen name="tapHome" component={ButtonTapNavigation} />
            {/* Section screen  */}
            <Stack.Screen name="Sections" component={Sections} />
            {/* Section screen  */}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
