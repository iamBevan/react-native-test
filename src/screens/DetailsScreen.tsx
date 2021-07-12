import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import { RootStackParamList } from "../../App"

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">

type ProfileScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"Details"
>

type Props = {
	navigation: ProfileScreenNavigationProp
	route: DetailsScreenRouteProp
}

const DetailsScreen = ({ navigation, route }: Props) => {
	console.log(route)
	const movie = route.params.movie

	return (
		<View style={styles.mainView}>
			<Text style={{ fontSize: 20 }}>
				{movie.title} ({movie.release})
			</Text>
			<Text style={{ fontSize: 100 }}>{movie.screenNumber}</Text>
			<Button
				title='Go to Image'
				onPress={() => {
					navigation.navigate("BigImage")
				}}
			/>
			<Button
				title='More Details'
				onPress={() => {
					movie.screenNumber = movie.screenNumber + 1
					console.log(movie)
					navigation.push("Details", { movie: movie })
				}}
			/>
			<Button
				title='Go Back to Home'
				onPress={() => {
					navigation.popToTop()
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
})

export default DetailsScreen
