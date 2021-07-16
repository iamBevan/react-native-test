import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React, { useEffect, useState } from "react"
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
	const movie = route.params.movie
	const [details, setDetails] = useState<{
		Title: string
		Released: string
		Plot: string
	} | null>(null)

	useEffect(() => {
		const xhr = new XMLHttpRequest()
		xhr.open(
			"GET",
			"https://www.omdbapi.com/?apikey=e62b36fa&t=Star+Wars&y=1977"
		)
		xhr.send()
		xhr.onload = () => {
			if (xhr.status === 200) {
				const response = JSON.parse(xhr.response)

				setDetails(response)
				console.log("title: ", response.Title)
				console.log("released: ", response.Released)
				console.log("plot: ", response.Plot)
			} else {
				console.log(`HTTP Request Failed ${xhr.status}`)
			}
		}
	}, [])

	return (
		<View style={styles.mainView}>
			<Text>Title: {details?.Title}</Text>
			<Text>Released: {details?.Released}</Text>
			<Text>Plot: {details?.Plot}</Text>
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
