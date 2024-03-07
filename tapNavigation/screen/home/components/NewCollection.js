import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import image from "../assets/new.png";
import { FONTS } from "../../../../constants/theme";

const NewCollection = () => {
  return (
    <View style={styles.cont}>
      <Image source={image} style={styles.image} />
      {/* Text */}
      <View style={styles.disc}>
        <View>
            <Text style={styles.arab}>كوليكشن جديد</Text>
            <Text style={styles.winter}>Winter collection</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Find now</Text>
        </TouchableOpacity>
      </View>
      {/* Text */}
    </View>
  );
};

export default NewCollection;

const styles = StyleSheet.create({
  cont: {
    marginTop:16,
    justifyContent:"center"
  },
  image: {
    width: "100%",
    height: 124,
    resizeMode:"cover",
    borderRadius:8,
  },
  disc:{
    position:"absolute",
    width:"100%",
    paddingHorizontal:16,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  arab:{
    color:"white",
    fontFamily:FONTS.bold,
    fontSize:18,
    textAlign:"center"
  },
  winter:{
    color:"white",
    fontSize:12,
    textAlign:"center"
  },
  button:{
    width:93,
    height:33,
    borderRadius:22,
    backgroundColor:"#E0A387",
    justifyContent:"center",
    alignItems:"center",
  },
  textButton:{
    color:"white",
    fontFamily:FONTS.medium,
    fontSize:13,
  }
});
