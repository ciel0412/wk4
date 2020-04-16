import React from 'react';
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import HomeDetails from"./HomeDetails";
import postData from"../json/post.json";
import headerData from"../json/header.json";


const HomeScreen=({navigation})=>{

return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <Image source={{uri:" https://github.com/ciel0412/wk4/blob/master/img/post/home_headerleft.png?raw=true"}} 
                           style={styles.headerLeft}/>
                <TouchableOpacity onPress={() => navigation.push('MessageScreen')}>
                    <Image source={{uri: "https://github.com/ciel0412/wk4/blob/master/img/post/btn_send.png?raw=true"}}
                            style={styles.headerRight}/>
                </TouchableOpacity>
            </View>
            <FlatList data={postData.postList}
            renderItem={({item}) => 
            <HomeDetails
                post={item}
                navigation={navigation}
                />}
            />
            <View>
                <Image  source={{uri: "https://github.com/ciel0412/wk4/blob/master/img/post/bottom_bar.png?raw=true"}} style={styles.bottom}/>
            </View>
        </View>
    );
};
const styles=StyleSheet.create({
       headerLeft:{
           marginLeft:5,
           width:50,
           height:35
       },
       headerRight:{
           margin:20,
           
           marginBottom:10,
           marginLeft:250,
           width:30,
           height:24
       },
       headerContentStyle:{
           
           flexDirection:"row",
           justifyContent:"flex-start",
           width:360,
           height:50,
           backgroundColor:'#fafafa',
           marginTop:20,
           marginLeft:25,
           elevation:4
       },
       bottom:{
           width:400,
           height:50,
           
       }
});
export default HomeScreen;