import React from 'react';

import { View } from 'react-native';

import styled from 'styled-components/native';

import Post from './Post';

const Container = styled.View`
	flex:1;
`

const Feed = () => {
	return (
		<>
			<Container>
				<Post 
					profileImage={require('../assets/user3.jpg')} 
					profileName='Regi P'
					timePost='9m'
					postText='Crie na prática uma aplicação utilizando NextJS, ReactJS, React-native e Strap Api.'
					PostImage={require('../assets/post1.jpg')}
					likeQuantity='2k'
					commentQuantity='200'
				/>
			</Container>
		</>
	);
}

export default Feed;