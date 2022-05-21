import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../components/Typography/Title'
import { Calendar } from 'react-native-big-calendar'
import { StyleConstants } from '../../styles/style-constants'
import ButtonPrimary from '../../common/buttonPrimary'
import AddPlanCard from '../../components/planner/addPlanCard'

const screenHeight = Dimensions.get("window").height;

const events = [
	{
		title: 'Meeting',
		start: new Date(2022, 5, 20, 10, 0),
		end: new Date(2020, 1, 11, 10, 30),
	},
	{
		title: 'Coffee break',
		start: new Date(2022, 5, 21, 15, 45),
		end: new Date(2020, 1, 11, 16, 30),
	},
]

export default function PlannerScreen() {
	const [plannerListModal, setPlannerListModal] = useState(false);
	const plannerListToggleModal = () => {
		setPlannerListModal(!plannerListModal);
	};


	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between' }}>
						<Title style={styles.title1}>Planner</Title>
						<ButtonPrimary onPress={plannerListToggleModal} buttonStyle={{ minHeight: 40, borderRadius: 50 }} leftIcon={'plus-box-outline'} leftIconColor="white" textStyle={{ lineHeight: 20 }} label="Add" />
					</View>
					<View style={styles.cardStyle}>
						<Calendar events={events} height={screenHeight - 120} />
					</View>
				</View>

				<AddPlanCard isVisible={plannerListModal} closeHandler={plannerListToggleModal} />
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
	},
	title2: {
		fontSize: 20,
		marginBottom: 5
	},
	container: {
		paddingHorizontal: 20,
		backgroundColor: 'white',
		flex: 1,
		paddingBottom: 100
	},
	cardStyle: {
		borderWidth: 1,
		borderColor: StyleConstants.COLOR_GRAY_EA,
		borderRadius: 5,
		paddingTop: 20,
	},
	pieCircleChart: {
		marginVertical: 30
	},
	barChart: {

	}
})
