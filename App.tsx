import React from "react"
import { StyleSheet } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./src/screens/HomeScreen"
import DetailsScreen from "./src/screens/DetailsScreen"
import ImageScreen from "./src/screens/ImageScreen"

export type RootStackParamList = {
	Home: undefined
	Details: { movie: { title: string; release: number; screenNumber: number } }
	MoreDetails: { sort: "latest" | "top" } | undefined
	BigImage: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: "white",
					headerStyle: { backgroundColor: "orange" },
				}}
				initialRouteName='Home'
			>
				<Stack.Screen
					options={{
						title: "Movie Time",
						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 30,
						},
					}}
					name='Home'
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Details'
					component={DetailsScreen}
					options={({ route }) => ({
						title: route.params?.movie.title,
					})}
				/>
				<Stack.Screen name='MoreDetails' component={DetailsScreen} />
				<Stack.Screen name='BigImage' component={ImageScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
