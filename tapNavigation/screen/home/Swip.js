// import {
//     View,
//     Text,
//     SafeAreaView,
//     StyleSheet,
//     TouchableOpacity,
//     Animated,
//   } from "react-native";
//   import React, { useState } from "react";
//   import Header from "./Cart/components/Header";
//   import { paddingSafeArea } from "../../../constants/theme";
//   import Footer from "./Cart/components/Footer";
//   import Card from "./Cart/components/Card";
//   import imageProduct from "./assets/neswan1.png";
//   import { SwipeListView } from "react-native-swipe-list-view";
//   import { latestProduct } from "./components/data";
//   import Trash from "./assets/trash-can.svg";
//   import { useSelector } from "react-redux";
  
//   const Cart = () => {
//     const Products = useSelector((state) => state.cart)
//     console.log(Products);
//     const [listData, setListData] = useState(
//       Products.map((product, index) => ({
//         key: `${index}`,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//       }))
//     );
//     // const cardData = {
//     //   image: imageProduct,
//     //   title: "women's dress",
//     //   price: "200 EGY",
//     // };
//     const onRowDidOpen = (rowKey) => {
//       console.log("This row opened", rowKey);
//     };
  
//     const onLeftActionStatusChange = (rowKey) => {
//       console.log("onLeftActionStatusChange", rowKey);
//     };
  
//     const onRightActionStatusChange = (rowKey) => {
//       console.log("onRightActionStatusChange", rowKey);
//     };
  
//     const onRightAction = (rowKey) => {
//       console.log("onRightAction", rowKey);
//     };
  
//     const onLeftAction = (rowKey) => {
//       console.log("onLeftAction", rowKey);
//     };
//     // Close Row
//     const closeRow = (rowMap, rowKey) => {
//       if (rowMap[rowKey]) {
//         rowMap[rowKey].closeRow();
//       }
//     };
//     // Delete Row
//     const deleteRow = (rowMap, rowKey) => {
//       closeRow(rowMap, rowKey);
//       const newData = [...listData];
//       const prevIndex = listData.findIndex((item) => item.key === rowKey);
//       newData.splice(prevIndex, 1);
//       setListData(newData);
//     };
//     // HiddenItemWithAction
//     const RenderItemWithAcrion = (props) => {
//       const {
//         swipeAnimatedValue,
//         leftActionActivated,
//         rightActionActivated,
//         rowActionAnimatedValue,
//         rowHeightAnimatedValue,
//         onClose,
//         onDelete,
//       } = props;
//       if (rightActionActivated) {
//         Animated.spring(rowActionAnimatedValue, {
//           toValue: 500,
//           useNativeDriver: false,
//         }).start();
//       } else {
//         Animated.spring(rowActionAnimatedValue, {
//           toValue: 75,
//           useNativeDriver: false,
//         }).start();
//       }
  
//       return (
//         <Animated.View style={[styles.rowBack, { height: 117 }]}>
//           <Animated.View
//             style={[
//               styles.cont,
//               {
//                 flex: 1,
//                 width: rowActionAnimatedValue,
//               },
//             ]}
//           >
//             <TouchableOpacity style={[styles.backRightBtn]} onPress={onDelete}>
//               <Animated.View
//                 style={[
//                   styles.trashIcon,
//                   {
//                     transform: [
//                       {
//                         scale: swipeAnimatedValue.interpolate({
//                           inputRange: [-90, -45],
//                           outputRange: [1, 0],
//                           extrapolate: "clamp",
//                         }),
//                       },
//                     ],
//                   },
//                 ]}
//               >
//                 <Trash />
//               </Animated.View>
//             </TouchableOpacity>
//           </Animated.View>
//         </Animated.View>
//       );
//     };
//     // RenderHiddenItem
//     const renderHiddenItem = (data, rowMap) => {
//       const rowActionAnimatedValue = new Animated.Value(75);
//       const rowHeightAnimatedValue = new Animated.Value(60);
//       return (
//         <RenderItemWithAcrion
//           data={data}
//           rowMap={rowMap}
//           rowActionAnimatedValue={rowActionAnimatedValue}
//           rowHeightAnimatedValue={rowHeightAnimatedValue}
//           onClose={() => closeRow(rowMap, data.item.key)}
//           onDelete={() => deleteRow(rowMap, data.item.key)}
//         />
//       );
//     };
//     // Render Item
//     const renderItem = (data, rowMap) => {
//       const rowHeightAnimatedValue = new Animated.Value(60);
//       return (
//         <Card
//           data={data}
//           rowHeightAnimatedValue={rowHeightAnimatedValue}
//           removeRow={() => deleteRow(rowMap, data.item.key)}
//         />
//       );
//     };
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <Header />
//         <View
//           style={{
//             paddingHorizontal: paddingSafeArea,
//             flex: 1,
//             marginTop: 16,
//           }}
//         >
//           <SwipeListView
//             data={listData}
//             renderItem={renderItem}
//             renderHiddenItem={renderHiddenItem}
//             leftOpenValue={75}
//             rightOpenValue={-75}
//             disableRightSwipe
//             onRowDidOpen={onRowDidOpen}
//             leftActivationValue={100}
//             rightActivationValue={-300}
//             leftActionValue={0}
//             rightActionValue={-500}
//             onLeftAction={onLeftAction}
//             onRightAction={onRightAction}
//             onLeftActionStatusChange={onLeftActionStatusChange}
//             onRightActionStatusChange={onRightActionStatusChange}
//           />
//         </View>
//         <Footer />
//       </SafeAreaView>
//     );
//   };
  
//   export default Cart;
//   const styles = StyleSheet.create({
//     rowBack: {
//       borderRadius: 8,
//       flexDirection: "row",
//       gap: 15,
//       padding: 13,
//       paddingBottom: 16,
//       marginBottom: 16,
//       height: 117,
//     },
//     cont: {
//       position: "absolute",
//       top: 0,
//       bottom: 0,
//       right: 0,
//       backgroundColor: "#FF5767",
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "center",
//       borderTopRightRadius: 8,
//       borderBottomRightRadius: 8,
//     },
//   });
  