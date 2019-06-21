import React from 'react';
import { Image, Text, View, StyleSheet, Platform } from 'react-native';
import { jsxClosingFragment, jsxFragment } from '@babel/types';

const imagesArr = [
  1,
  '../public/images/thumbsup.png',
  '../public/images/thumbsdown.png',
  '../public/images/confusedwoman.png',
  '../public/images/water.png',
  '../public/images/food.png',
];

export const SingleCard = props => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.getStartedText}>{props.singleCard.name}</Text>
      {props.singleCard.id === 1 && (
        <React.Fragment>
          <View style={styles.imageContainer}>
            <Image
              key={1}
              source={require('../public/images/thumbsup.png')}
              style={styles.welcomeImage}
            />

            <Image
              key={2}
              source={require('../public/images/thumbsdown.png')}
              style={styles.welcomeImage}
            />

            <Image
              key={3}
              source={require('../public/images/confusedwoman.png')}
              style={styles.welcomeImage}
            />
          </View>
        </React.Fragment>
      )}
      {props.singleCard.id === 2 && (
        <Image
          key={4}
          source={require('../public/images/water.png')}
          style={styles.welcomeImage}
        />
      )}
      {props.singleCard.id === 3 && (
        <React.Fragment>
          <View style={styles.imageContainer}>
            <Image
              key={4}
              source={require('../public/images/water.png')}
              style={styles.welcomeImage}
            />

            <Image
              key={5}
              source={require('../public/images/food.png')}
              style={styles.welcomeImage}
            />
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 4,
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
