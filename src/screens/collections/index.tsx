import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CallectionCard from '../../components/collections/callectionCard'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import { ROUTES } from '../../constants/routes';
import CreateGroupModal from '../../components/groups/createGroupModal';
import CreateModal from '../../common/createModal';


const infoCardList = [
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Maths',
		subtext: '20 Notes, 2 quizes'
	},
]
export default function CollectionsScreen() {
	const [isCreateCollectionModal, setCreateCollectionModal] = useState(false);
	const toggleCreateCollectionModal = () => {
		setCreateCollectionModal(!isCreateCollectionModal);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>My Collections</Title>
					<View style={styles.cardSection}>
						{infoCardList.map((item) => (
							<CallectionCard
								title={item.title}
								subText={item.subtext}
							/>
						))}
					</View>
				</View>
			</ScrollView>

			<CreateModal
				mainTitle="Create Collection"
				inputPlaceholder='Ex. Maths'
				inputlabel='Collection Name'
				isVisible={isCreateCollectionModal}
				closeHandler={toggleCreateCollectionModal}
				onBackdropPress={toggleCreateCollectionModal}
				buttonText="Created"
			/>

			<TouchableOpacity style={styles.buttonCreate} onPress={toggleCreateCollectionModal}>
				<Title style={styles.buttonCreateTitle}>+</Title>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginBottom: 10
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
	},
	buttonCreate: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: StyleConstants.COLOR_PRIMARY,
		marginBottom: 10,
		borderRadius: 50,
		width: 50,
		height: 50,
		position: 'absolute',
		right: 20,
		bottom: 10
	},
	buttonCreateTitle: {
		fontSize: 26,
		lineHeight: 30,
		color: 'white'
	},
})
