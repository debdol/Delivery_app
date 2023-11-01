import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SearchPage = () => {
    const [inputData, setInputData] = useState();
    const navigation = useNavigation();
    const getData = () => {
        if (inputData) {
            axios.get(`http://103.168.173.64:2020/bluedart-bluedart-search-number?contact_number=${inputData}`)
                .then((res) => {
                    console.log(res.data);
                    navigation.navigate("ShowDataPage", { userData: res.data });
                })
                .catch((error) => console.log("error in gateData :", error))
        } else {
            Alert.alert("Enter Number");
        }
    }
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <TextInput placeholder='Search here ' onChangeText={(e) => setInputData(e)} style={styles.inputStyle} keyboardType='number-pad' />
            <TouchableOpacity onPress={() => { getData() }}>
                <Image source={require("./assets/Vector.png")} style={{ height: 20, width: 20, backgroundColor: "#000000", }} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        // borderColor: "red",
        // borderWidth: 1,
        width: "90%",
        backgroundColor: "#D7E2F0",
        borderRadius: 9
    }
})
export default SearchPage