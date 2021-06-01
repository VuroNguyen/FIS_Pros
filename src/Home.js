import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Button, StyleSheet, StatusBar, Dimensions, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={{height: 18}}>
            <Image source={require('./res/images/shadow_bottom.png')} style={styles.image}/>
            </View>

            <View style={styles.secion}>

            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    secion: {
        marginTop: 10
    }
});