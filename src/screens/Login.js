import React from "react"
import { Button, Text, View } from "react-native"

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Log In?</Text>
      <Button title="Signup" onPress={() => navigation.replace("Signup")} />
    </View>
  )
}
