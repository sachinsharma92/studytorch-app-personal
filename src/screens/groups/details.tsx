import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
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
import StackImage from '../../common/stackImage';
import GroupMemberCard from '../../components/groups/groupMember';
import ConfirmationModal from '../../common/confirmationModal';


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

export default function GroupDetailScreen() {
	const [isModalJoined, setModalJoined] = useState(false);
	const toggleJoinedeModal = () => {
		setModalJoined(!isModalJoined);
	};

	const [isGroupMemberModal, setGroupMemberModal] = useState(false);
	const groupMembertoggleModal = () => {
		setGroupMemberModal(!isGroupMemberModal);
	};

	const [isModalEditShow, setModalEditShow] = useState(false);
	const toggleEditShowModal = () => {
		setModalEditShow(!isModalEditShow);
	};

	const [isDeleteModal, setDeleteModal] = useState(false);
	const deleteToggleModal = () => {
		setDeleteModal(!isDeleteModal);
		setModalJoined(false);
	};

	const [isLeaveGroupModal, setLeaveGroupModal] = useState(false);
	const leaveGroupToggleModal = () => {
		setLeaveGroupModal(!isLeaveGroupModal);
		setModalJoined(false);
	};

	const FirstRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<CallectionCard title={item.title} subText={item.subtext}
				/>
			))}
		</View>
	);

	const SecondRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<NotesCard title={item.title} subText={item.subtext}
				/>
			))}
		</View>
	);

	const ThirdRoute = () => (
		<View style={styles.cardSection}>
			{questionList.map((item) => (
				<QusestionCard title={item.title} subText={item.subtext} />
			))}
		</View>
	);

	const ForthRoute = () => (
		<View style={styles.cardSection}>
			{infoCardList.map((item) => (
				<FlashCard title={item.title} subText={item.subtext}
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
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
			<View style={styles.imgBanner}>
				<Image
					style={styles.bannerImage}
					source={{
						uri: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674',
					}}
				/>
			</View>
			<ScrollView style={{ paddingVertical: 20 }}>
				<View style={styles.container}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
						<TouchableOpacity style={{ flexDirection: 'row', }}>
							<Icon size={24} name="arrow-left" />
							<Title style={[styles.title1]}>Maths</Title>
						</TouchableOpacity>
						<View style={styles.buttonSection}>
							<ButtonPrimary onPress={toggleJoinedeModal} buttonStyle={styles.buttonOutline} textStyle={{ fontSize: 14, color: StyleConstants.COLOR_PRIMARY }} label="Joined" />
							<ButtonPrimary onPress={groupMembertoggleModal} buttonStyle={{ minHeight: 35, borderRadius: 50, paddingHorizontal: 10 }} textStyle={{ fontSize: 14 }} label="Member" />
							<TouchableOpacity onPress={toggleEditShowModal} style={[styles.dotButton, { marginLeft: 10 }]}><Icon name="dots-vertical" size={24} /></TouchableOpacity>
						</View>
					</View>

					<View style={{ marginBottom: 10 }}>
						<StackImage />
					</View>

					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						swipeEnabled={false}
						initialLayout={{ width: layout.width, }}
						style={{ height: layout.height }}
						// sceneContainerStyle={{flex: 1}}
						renderTabBar={props => (
							<TabBar
								{...props}
								indicatorStyle={styles.indicatorStyle}
								tabStyle={{ flex: 1, }}
								scrollEnabled={true}
								style={{ backgroundColor: 'white', }}
								labelStyle={{ color: StyleConstants.COLOR_TEXT, fontFamily: 'Sofia-Pro-Regular', textTransform: 'none', width: '100%', }}
								activeColor={StyleConstants.COLOR_PRIMARY}
							/>
						)}
					/>
				</View>
			</ScrollView>

			{/* Joined Confirm Modal */}
			<BottomModal isVisible={isModalJoined} onBackdropPress={toggleJoinedeModal}>
				<TouchableOpacity onPress={deleteToggleModal} style={styles.button}>
					<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="delete" />
					<Title style={styles.buttonTitle}>Delete Group</Title>
				</TouchableOpacity>
				<TouchableOpacity onPress={leaveGroupToggleModal} style={styles.button}>
					<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="login-variant" />
					<Title style={styles.buttonTitle}>Leave Group</Title>
				</TouchableOpacity>
			</BottomModal>

			{/* Joined Confirm Modal */}
			<BottomModal isVisible={isModalEditShow} onBackdropPress={toggleEditShowModal}>
				<TouchableOpacity style={styles.button}>
					<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
					<Title style={styles.buttonTitle}>Edit Group</Title>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={18} color={StyleConstants.COLOR_TEXT_LIGHT} name="pencil" />
					<Title style={styles.buttonTitle}>Show Cover</Title>
				</TouchableOpacity>
			</BottomModal>

			<GroupMemberCard isVisible={isGroupMemberModal} onBackdropPress={groupMembertoggleModal} />

			<ConfirmationModal cancelHanlder={deleteToggleModal} isVisible={isDeleteModal} footerShow>
				<Title level={2} style={{ lineHeight: 30 }}>Are you sure you want to delete this Group!</Title>
			</ConfirmationModal>

			<ConfirmationModal labelYes="Yes, Leave" closeHandler={leaveGroupToggleModal} cancelHanlder={leaveGroupToggleModal} isVisible={isLeaveGroupModal} footerShow>
				<Title level={2} style={{ lineHeight: 30 }}>Are you sure you want to leave the</Title>
				<Title level={2} style={{ lineHeight: 30, color: StyleConstants.COLOR_PRIMARY, marginTop: 10 }}>Maths Group ?</Title>
			</ConfirmationModal>
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
	bannerImage: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover'
	},
	imgBanner: {
		height: 150,
		backgroundColor: '#eeeeee'
	},
	buttonSection: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	buttonOutline: {
		minHeight: 35,
		borderRadius: 50,
		paddingHorizontal: 10,
		marginRight: 5,
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderColor: StyleConstants.COLOR_PRIMARY
	},
	dotButton: {
		backgroundColor: '#FAFAFB',
		borderRadius: 50
	},
})
