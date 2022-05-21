import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomModal from '../../common/bottomModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CallectionCard from '../../components/collections/callectionCard'
import Title from '../../components/Typography/Title'
import { StyleConstants } from '../../styles/style-constants';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ButtonPrimary from '../../common/buttonPrimary';
import NotesCard from '../../components/notesCard';
import QusestionCard from '../../components/qusestionCard';
import FlashCard from '../../components/flashCard';
import QuizTabView from '../../components/quiz/quizTabView';
import ReportComponent from '../../components/reportsComponent';


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

const questionList = [
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
	{
		title: 'Question title goes here .............................',
		subtext: '20 Notes, 2 quizes'
	},
]

export default function SharedDetailsScreen() {
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const FirstRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<CallectionCard dotHandler={toggleModal} title={item.title} subText={item.subtext}
				/>
			))}
		</View>
	);

	const SecondRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<NotesCard dotHandler={toggleModal} title={item.title} subText={item.subtext}
				/>
			))}
		</View>
	);

	const ThirdRoute = () => (
		<View style={styles.cardSection}>
			{questionList.map((item) => (
				<QusestionCard dotHandler={toggleModal} title={item.title} subText={item.subtext} />
			))}
		</View>
	);

	const ForthRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<FlashCard dotHandler={toggleModal} title={item.title} subText={item.subtext}
				/>
			))}
		</View>
	);

	const FifthRoute = () => (
		<View>
			{questionList.map((item) => (
				<QuizTabView />
			))}
		</View>
	);

	const SixthRoute = () => (
		<View style={{ flex: 1, }}>
			<ReportComponent />
		</View>
	);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
		third: ThirdRoute,
		forth: ForthRoute,
		fifth: FifthRoute,
		sixth: SixthRoute,
	});

	const layout = useWindowDimensions();
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Collection' },
		{ key: 'second', title: 'Notes' },
		{ key: 'third', title: 'Question' },
		{ key: 'forth', title: 'Flash Card' },
		{ key: 'fifth', title: 'Quiz' },
		{ key: 'sixth', title: 'Reports' },
	]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
						<TouchableOpacity style={{ flexDirection: 'row', }}>
							<Icon size={24} name="arrow-left" />
							<Title style={[styles.title1]}>Maths</Title>
						</TouchableOpacity>

						<ButtonPrimary buttonStyle={{ minHeight: 40, borderRadius: 50 }} leftIcon={'share-variant'} leftIconColor="white" textStyle={{ lineHeight: 20 }} label="Share" />
					</View>

					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						swipeEnabled={false}
						initialLayout={{ width: layout.width, }}
						style={{ height: layout.height}}
						// sceneContainerStyle={{flex: 1}}
						renderTabBar={props => (
							<TabBar
								{...props}
								indicatorStyle={styles.indicatorStyle}
								tabStyle={{ flex: 1,}}
								scrollEnabled={true}
								style={{ backgroundColor: 'white', }}
								labelStyle={{ color: StyleConstants.COLOR_TEXT, fontFamily: 'Sofia-Pro-Regular', textTransform: 'none', width: '100%', }}
								activeColor={StyleConstants.COLOR_PRIMARY}
							/>
						)}
					/>
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
					{/* <TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="information" />
						<Title style={styles.buttonTitle}>Get Details</Title>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="share-variant" />
						<Title style={styles.buttonTitle}>Share</Title>
					</TouchableOpacity> */}
				</BottomModal>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	title1: {
		fontSize: 20,
		marginLeft: 10,
		top: -2
	},
	title2: {
		fontSize: 20,
		marginBottom: 5
	},
	container: {
		paddingHorizontal: 20,
		backgroundColor: 'white',
		flex: 1,
	},
	cardSection: {
		flex: 1
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
	indicatorStyle: {
		backgroundColor: StyleConstants.COLOR_PRIMARY,
		borderTopEndRadius: StyleConstants.BORDER_RADIUS,
		borderTopStartRadius: StyleConstants.BORDER_RADIUS,
		height: 4,
	},
})
