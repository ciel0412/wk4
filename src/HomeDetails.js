import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const HomeDetail=({post,navigation})=>{
    return(
        <View style={StyleSheet.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri:post.profile
                    }}
                />
                <Text style={{fontWeight:"bold",marginTop:10}}>{post.id}</Text>
                <Image
                    style={styles.dotStyle}
                    source={{
                        uri:"https://github.com/ciel0412/wk4/blob/master/img/post/btn_more.png?raw=true"

                    }}
                />    
            </View>
    
        <View style={styles.cardSectionStyle}>
            <Image 
               style={styles.imageStyle}
               source={{
                   uri:post.main_img
               }} 
         />      
        </View>
        <View style={styles.cardSectionStyle}>
            <Image
               style={styles.postBarStyle}
               source={{
                   uri:"https://github.com/ciel0412/wk4/blob/master/img/post/post_bar.png?raw=true"
               }}
        />       
        </View>
        <Text style={styles.postContentStyle}>{post.like} Likes</Text>
        <Text style={{marginLeft:15,marginRight:15}}>
            <Text style={{fontWeight:"bold"}}>{post.id}</Text>
            {post.content}
            <Text style={{color:"#999999"}}>......read more</Text>
         </Text>
         <Text style={{color:"#999999",marginLeft:15}}>see all {post.comment} comments</Text>
         <View style={styles.commentArea}>
             
             <Image
                 style={styles.commentProfile}
                 source={{
                     uri:"https://github.com/ciel0412/wk4/blob/master/img/post/img_profile1.png?raw=true"
                 }}
             />
             <Text style={styles.commentReplytxt}>reply......</Text>
             <Image
                 style={styles.commentIcon}
                 source={{
                     uri:"https://github.com/ciel0412/wk4/blob/master/img/post/post_comment.png?raw=true"
                 }}
             />
            
         </View>
         <Text style={{margin:15,fontSize:10,marginTop:5}}>
             <Text style={{color:"#999999"}}>{post.time} before  • </Text><Text> translate</Text>
         </Text>
 </View>
    )
};
const styles=StyleSheet.create({
    cardContainerStyle:{
        marginTop:20,
        backgroundColor:"#fff"
    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    cardSectionStyle:{
        paddingLeft:15,
        padding:5,
        backgroundColor:"#fff"
        
    },
    thumbnailStyle:{
        height:40,
        width:40,
        marginLeft:10
    },
    imageStyle:{
        height:200,
        width:350
    },
    dotStyle:{
        height:25,
        width:20,
        marginTop:10,
        marginLeft:200,
    
    },
    postBarStyle:{
        height:50,
        width:320
    },
    postContentStyle:{
        fontWeight:"bold",
        marginLeft:20
    },
    commentArea:{
        marginLeft:18,
        marginTop:5,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    commentProfile:{
        height:35,
        width:35
    },
    commentReplytxt:{
        marginLeft:8,
        marginRight:130,
        marginTop:5,
        color:"#999999",
        height:40,
        fontSize:16
        
    },
    commentIcon:{
        height:40,
        width:100
    }
});   
export default HomeDetail;       
