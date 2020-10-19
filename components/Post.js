import React from 'react';

import { View } from 'react-native';

import styled from 'styled-components/native';

import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from './Avatar';

const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`

const Row = styled.View`
	align-items: center;
	flex-direction: row;
`

const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`

const Time = styled.Text`
	font-size:  9px;
	color: #747476;
`

const ImagePost = styled.Text`
	font-size: 12px;
	color: #222121;
	line-height: 16px;
	padding: 0 11px;
`

const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
`

const Footer = styled.View`
	padding: 0 11px;
`

const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`

const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`

const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`

const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`

const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`

const Button = styled.TouchableOpacity`
	flex-direction: row;
`

const Icon = styled.View`
	margin-right: 6px;
`

const Text = styled.Text`
	font-size: 12px;
	color: #424040
`

const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Post = ({ profileImage, profileName, timePost, postText, PostImage, likeQuantity, commentQuantity }) => {
	return (
		<>
			<Header>
				<Row>
					<Avatar
						source={profileImage}
					/>
					<View style={{ paddingLeft: 10 }}>
						<User>{profileName}</User>
						<Row>
							<Time>{timePost}</Time>
							<Entypo
								name='dot-single'
								size={12}
								color='#747476'
							/>
							<Entypo
								name='globe'
								size={10}
								color='#747476'
							/>
						</Row>
					</View>
				</Row>

				<Entypo
					name='dots-three-horizontal'
					size={12}
					color='#747476'
				/>
			</Header>

			<ImagePost>
				{postText}
			</ImagePost>
			<Photo
				source={PostImage}
			/>

			<Footer>
				<FooterCount>
					<Row>
						<IconCount>
							<Entypo
								name='like1'
								size={12}
								color='#fff'
							/>
						</IconCount>
						<TextCount>{likeQuantity} Curtidas</TextCount>
					</Row>
					<TextCount>
						{commentQuantity} Comentarios
					</TextCount>
				</FooterCount>

				<Separator/>

				<FooterMenu>
					<Button>
						<Icon>
							<AntDesign
								name='like2'
								size={20}
								color='#424040'
							/>
						</Icon>
						<Text>Curtir</Text>
					</Button>

					<Button>
						<Icon>
							<MaterialCommunityIcons
								name='comment-outline'
								size={20}
								color='#424040'
							/>
						</Icon>
						<Text>Comentar</Text>
					</Button>

					<Button>
						<Icon>
							<MaterialCommunityIcons
								name='share-outline'
								size={20}
								color='#424040'
							/>
						</Icon>
						<Text>Compartilhar</Text>
					</Button>
				</FooterMenu>
			</Footer>
			<BottomDivider/>
		</>
	);
}

export default Post;