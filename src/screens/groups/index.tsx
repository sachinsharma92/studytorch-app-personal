import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import GroupsCard from '../../components/groups/groupsCard';
import CreateModal from '../../common/createModal';


const infoCardList = [
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#FFEDE2'
	},
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#E3F7FF'
	},
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#FEE3E1'
	},
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#FFEDE2'
	},
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#FEE3E1'
	},
	{
		title: 'Group Name',
		subtext: 'Created by Mudita . 7 members',
		cardColor: '#E3F7FF'
	},
]
export default function GroupsScreen() {
	const [isConfirmGroupModal, setConfirmGroupModal] = useState(false);
	const toggleConfirmGroupModal = () => {
		setConfirmGroupModal(!isConfirmGroupModal);
	};

	const [isCreateGroupModal, setCreateGroupModal] = useState(false);
	const toggleCreateGroupModal = () => {
		setCreateGroupModal(!isCreateGroupModal);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>Groups</Title>
					<View style={styles.cardSection}>
						{infoCardList.map((item) => (
							<GroupsCard
								title={item.title}
								subText={item.subtext}
								dotHandler={toggleConfirmGroupModal}
								bgStyle={item.cardColor}
							/>
						))}
					</View>
				</View>
			</ScrollView>

			<CreateModal
				mainTitle="Create a Group"
				inputPlaceholder='Math Group'
				inputlabel='Group Name'
				isVisible={isCreateGroupModal}
				closeHandler={toggleCreateGroupModal}
				onBackdropPress={toggleCreateGroupModal}
			/>
			<TouchableOpacity style={styles.buttonCreate} onPress={toggleCreateGroupModal}>
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
