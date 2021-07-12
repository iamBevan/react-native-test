import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../../App"

type ProfileScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"Home"
>

type Props = {
	navigation: ProfileScreenNavigationProp
}

const HomeScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.mainView}>
			<Text>Home Screen</Text>
			<Button
				title='Star Wars'
				onPress={() => {
					navigation.navigate("Details", {
						movie: {
							title: "Star Wars",
							release: 1977,
							screenNumber: 1,
						},
					})
				}}
				color='red'
			/>
			<Button
				title='Black Panther'
				onPress={() => {
					navigation.navigate("Details", {
						movie: {
							title: "Black Panther",
							release: 2018,
							screenNumber: 1,
						},
					})
				}}
			/>
			<Button
				title='The Matrix'
				onPress={() => {
					navigation.navigate("Details", {
						movie: {
							title: "The Matrix",
							release: 1999,
							screenNumber: 1,
						},
					})
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#640e0e",
	},
})

export default HomeScreen
