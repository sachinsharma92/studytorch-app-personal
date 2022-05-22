import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import ButtonPrimary from '../../common/buttonPrimary';
import DropdownPrimary from '../../common/dropdownPrimary';
import SubText from '../../components/Typography/SubText';
import { RadioButton } from 'react-native-paper';
import QuizTabView from '../../components/quiz/quizTabView'
import InputPrimary from '../../common/inputPrimary'

const collectionItems = ["All", "Group 1", "Group 2", "Group 3"]

export default function QuizScreen() {
	const [checked, setChecked] = React.useState('first');

	const [isCreateChecklist, setCreateChecklist] = useState(false);
	const checklistToggleModal = () => {
		setCreateChecklist(!isCreateChecklist);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
			<ScrollView>
				<View style={styles.container}>
					<Title style={styles.title1}>Study Checklist</Title>
					<QuizTabView />
				</View>
			</ScrollView>

			<TouchableOpacity style={styles.buttonCreate} onPress={checklistToggleModal}>
				<Title style={styles.buttonCreateTitle}>+</Title>
			</TouchableOpacity>

			<BottomModal isVisible={isCreateChecklist} onBackdropPress={checklistToggleModal}>
				<Title level={2}>Create Quiz <Title style={{ color: '#999', fontSize: 20 }}>(1/2)</Title></Title>

				<InputPrimary
					label="Quiz Name"
					placeholder="Quiz Name"
					style={{ marginTop: 30 }}
				/>

				<View style={{ marginTop: 30 }}>
					<DropdownPrimary defaultButtonText={<SubText style={{ opacity: 0.7 }}>Select Collection</SubText>} data={collectionItems} label="Collection" />
				</View>
				
				<InputPrimary
					label="No. of Questions"
					placeholder="Select No. of Questions"
					style={{ marginTop: 30 }}
					keyboardType="numeric"
				/>

				<View style={styles.radioSection}>
					<SubText style={{ fontSize: 14, color: StyleConstants.COLOR_TEXT }}>Include sub questions</SubText>
					<View style={{ flexDirection: 'row', marginTop: 5 }}>
						<View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
							<RadioButton
								value="first"
								status={checked === 'first' ? 'checked' : 'unchecked'}
								onPress={() => setChecked('first')}
								color={StyleConstants.COLOR_PRIMARY}
							/>
							<SubText style={{ fontSize: 14, color: StyleConstants.COLOR_TEXT }}>Yes</SubText>
						</View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<RadioButton
								value="second"
								status={checked === 'second' ? 'checked' : 'unchecked'}
								onPress={() => setChecked('second')}
								color={StyleConstants.COLOR_PRIMARY}
							/>
							<SubText style={{ fontSize: 14, color: StyleConstants.COLOR_TEXT }}>No</SubText>
						</View>
					</View>
				</View>

				<View style={styles.buttonSection}>
					<ButtonPrimary buttonStyle={{ marginRight: 20, backgroundColor: 'transparent' }} textStyle={{ color: StyleConstants.COLOR_TEXT }} onPress={checklistToggleModal} label="Cancel" />
					<ButtonPrimary onPress={checklistToggleModal} label="Create Quiz" />
				</View>
			</BottomModal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginBottom: 10,
	},
	title2: {
		fontSize: 20,
		marginBottom: 5
	},
	container: {
		paddingHorizontal: 20
	},
	cardSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingHorizontal: 20,
		flex: 1,
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
	},
	buttonTitle: {
		marginLeft: 10,
		fontSize: 16,
		color: StyleConstants.COLOR_TEXT_LIGHT
	},
	selectInputStyle: {
		borderRadius: 6,
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		overflow: 'hidden',
		borderColor: StyleConstants.COLOR_BORDER,
		flex: 1,
		height: 40,
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
	indicatorStyle: {
		backgroundColor: StyleConstants.COLOR_PRIMARY,
		borderTopEndRadius: StyleConstants.BORDER_RADIUS,
		borderTopStartRadius: StyleConstants.BORDER_RADIUS,
		height: 4,
	},
	buttonSection: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		backgroundColor: StyleConstants.COLOR_GRAY_F6,
		padding: 10,
		paddingHorizontal: 20,
		marginHorizontal: -20,
		marginTop: 30
	},
	radioSection: {
		marginTop: 30
	}
})
