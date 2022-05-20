import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import BarchartView from '../../components/home/chart/barchartView'
import PiechartView from '../../components/home/chart/piechartView'
import SharedCard from '../../components/sharedWithMe/sharedCard'
import SubText from '../../components/Typography/SubText'
import Title from '../../components/Typography/Title'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleConstants } from '../../styles/style-constants'


const infoCardList = [
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by Aakash',
	},
	{
		title: 'Physics',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by Sachin Sharma',
	},
	{
		title: 'Chem',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by Aakash Sharma',
	},
	{
		title: 'Bio',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by Anjali Sharma',
	},
	{
		title: 'English',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by John',
	},
	{
		title: 'SST',
		subtext: '20 Notes, 2 quizes',
		sharedBy: 'Shared by Pihu',
	},
]


export default function SharedWithMeScreen() {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>Shared with me</Title>

					<View style={styles.cardSection}>
						<Title style={styles.title3}>Today</Title>
						{infoCardList.map((item) => (
							<SharedCard title={item.title} subText={item.subtext} dotHandler={toggleModal} sharedBy={item.sharedBy} />
						))}
					</View>
				</View>

				<BottomModal isVisible={isModalVisible} onBackdropPress={toggleModal}>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
						<Title style={styles.buttonTitle}>View Details</Title>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="delete" />
						<Title style={styles.buttonTitle}>Remove from shared</Title>
					</TouchableOpacity>
				</BottomModal>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginBottom: 20
	},
	title2: {
		fontSize: 20,
		marginBottom: 5
	},
	title3: {
		fontSize: 18,
		opacity: 0.5,
	},
	container: {
		paddingHorizontal: 20,
		backgroundColor: 'white',
		flex: 1,
		paddingBottom: 100
	},
	cardSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	button: {
		flexDirection: 'row',
		paddingVertical: 15,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: StyleConstants.COLOR_GRAY_EA,
		borderRadius: 10,
		marginBottom: 10,
		paddingHorizontal: 20,
		// justifyContent:'center'
	},
	buttonTitle: {
		marginLeft: 10,
		fontSize: 16,
		color: StyleConstants.COLOR_TEXT_LIGHT
	}
})
