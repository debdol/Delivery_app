import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const ShowDataPage = ({ route }) => {
  const [data, setData] = useState();
  const [orderId, setOrderId] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    if (route.params) {
      setOrderId(route.params.userData[0]._id.$oid);
      console.log("get the data :", route.params.userData[0]);
    }
  }, [route.params]);
  const markDelivered = () => {
    axios.put(`http://103.168.173.64:2020/bluedart-bluedart-mark-delivered`, {
      order_id: orderId,
      datetime: selected
    })
      .then((res) => {
        console.log("response in mark_deliverd_API :", res);
      })
      .catch((error) => console.log("error"))
  }
  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
          console.log(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
      />
      <View style={{ marginTop: "10%", borderColor: "red", borderWidth: 1 }}>
        <Text style={{ color: "#000000" }}>{route.params.userData[0].name}</Text>
        <Text style={{ color: "#000000" }}>{route.params.userData[0].contact_number}</Text>
        <Text style={{ color: "#000000" }}>{route.params.userData[0].cod_amount}</Text>
      </View>
      <TouchableOpacity style={{ alignSelf: "center", backgroundColor: "#007AFF", height: 50, width: 100, borderRadius: 5, justifyContent: "center", }} onPress={() => markDelivered()}>
        <Text style={{ color: "#EEEEEE", textAlign: "center" }}>Mark Deliveried</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({})
export default ShowDataPage