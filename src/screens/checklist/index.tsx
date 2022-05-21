import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import ChecklistCard from '../../components/checklist/checklistCard';
import ButtonPrimary from '../../common/buttonPrimary';
import InputPrimary from '../../common/inputPrimary';


const infoCardList = [1, 2, 3, 4,]

export default function ChecklistScreen() {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const [isCreateChecklist, setCreateChecklist] = useState(false);
	const checklistToggleModal = () => {
		setCreateChecklist(!isCreateChecklist);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>Study Checklist</Title>
					<View style={styles.cardSection}>
						{infoCardList.map(() => (
							<ChecklistCard nameCount="3/5" dotHandler={toggleModal} />
						))}
					</View>
				</View>
			</ScrollView>

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
					<Title style={styles.buttonTitle}>Achive checked items</Title>
				</TouchableOpacity>
			</BottomModal>

			<TouchableOpacity style={styles.buttonCreate} onPress={checklistToggleModal}>
				<Title style={styles.buttonCreateTitle}>+</Title>
			</TouchableOpacity>

			<BottomModal isVisible={isCreateChecklist} onBackdropPress={checklistToggleModal}>
				<Title level={2}>Create a Study Checklist</Title>
				<InputPrimary
					label="Enter Name"
					placeholder="List Name"
					style={{ marginTop: 30 }}
				/>

				<ButtonPrimary buttonStyle={{ marginTop: 30 }} onPress={checklistToggleModal} label="Save" />
			</BottomModal>
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
