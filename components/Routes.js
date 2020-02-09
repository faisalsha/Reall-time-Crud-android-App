import { createStackNavigator } from "react-navigation-stack";
import Blog from "./Blog";
import Edit from "./Edit";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Post from "./Post";
// import React,{Component} from 'react';
// import { StyleSheet, Text, View } from 'react-native';




const NavStack=createStackNavigator({
    Blogs:{
        screen:Blog
    },
    Edit:{
        screen:Edit
    }
})

const BottomTab=createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    Post:{
        screen:Post
    }
})

export default Routes=createAppContainer(BottomTab)