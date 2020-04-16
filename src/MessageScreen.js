import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import headerData from "../json/header.json";


const MessageScreen=({navigation})=>{
    return(
<View style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.headerContentStyle}>
            <TouchableOpacity 
                 onpress={()=>navigation.goBack()}>
                 <Image  source={{uri:"https://github.com/ciel0412/wk4/blob/master/img/message/headerLeft.png?raw=true"}}
                        style={styles.headerLeft}/>
            </TouchableOpacity>
        <Image source={{uri:"https://github.com/ciel0412/wk4/blob/master/img/message/Ms_header_Right.png?raw=true"}}
                        style={styles.headerRight}/>     
        </View>
        <ScrollView>
            <View >
                <Image
                    source={{uri:"https://github.com/ciel0412/wk4/blob/master/img/message/mesList.png?raw=true"}}
                    style={styles.mesList}/>
            </View>
        </ScrollView>


    <View>
          <Image source={{uri:"https://github.com/ciel0412/wk4/blob/master/img/post/bottom_bar.png?raw=true"}}
           style={styles.bottom}/>
    </View>
</View>
    );
};
const styles = StyleSheet.create({
    headerRight:{
        marginTop:10,
        width: 300,
        height: 35
      },
      headerLeft:{
        marginTop:20,
        marginRight: 0,
        marginLeft:20,
        width: 25,
        height: 20
      },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:360,
        height:50,
        backgroundColor:'#fafafa',
        marginTop:25,
        marginLeft:15,
        elevation:4

    },
    bottom:{
        width: 400,
        height: 50
      },
    mesList:{
        marginTop:15,
        width:500,
        height:650,
        marginLeft:-40,
        marginRight:10
        
    },
});
export default MessageScreen;