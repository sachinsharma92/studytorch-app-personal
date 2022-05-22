import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import GroupsCard from '../../components/groups/groupsCard';


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
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
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
								dotHandler={toggleModal}
								bgStyle={item.cardColor}
							/>
						))}
					</View>
				</View>

				<BottomModal isVisible={isModalVisible} onBackdropPress={toggleModal}>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
						<Title style={styles.buttonTitle}>Rename</Title>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="delete" />
						<Title style={styles.buttonTitle}>Delete</Title>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="information" />
						<Title style={styles.buttonTitle}>Get Details</Title>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="share-variant" />
						<Title style={styles.buttonTitle}>Share</Title>
					</TouchableOpacity>
				</BottomModal>
			</ScrollView>
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
	}
})
