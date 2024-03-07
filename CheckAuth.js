import AsyncStorage from "@react-native-async-storage/async-storage";

const CheckAuth = (setAuth) => {
  try {
    AsyncStorage.getItem("user").then((value) => {
      if (value != null) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default CheckAuth;
