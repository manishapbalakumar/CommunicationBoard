/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import axios from 'axios';
// import SingleCard from '../components/SingleCard';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.renderItem = this.renderItem.bind(this);
  }

  async componentDidMount() {
    try {
      console.log('mount');
      const { data: cards } = await axios.get(
        'https://b8dda0fc.ngrok.io/api/cards'
      );
      this.setState({
        cards,
      });
      console.log('the component mounted');
    } catch (error) {
      console.log('ERR: ', error);
    }
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Text>Cards</Text>

        {this.state.cards.map(card => (
          <View style={styles.welcomeContainer} key={card.id}>
            <Text style={styles.getStartedText}>{card.name}</Text>
            {card.id === 1 && (
              <React.Fragment>
                <View style={styles.imageContainer}>
                  <TouchableHighlight
                    underlayColor="#2e78b7"
                    style={styles.touchHighlight}
                    onPress={() => console.log()}
                  >
                    <Image
                      key={1}
                      source={require('../public/images/thumbsup.png')}
                      style={styles.welcomeImage}
                    />
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="#2e78b7"
                    style={styles.touchHighlight}
                    onPress={() => console.log()}
                  >
                    <Image
                      key={2}
                      source={require('../public/images/thumbsdown.png')}
                      style={styles.welcomeImage}
                    />
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="#2e78b7"
                    style={styles.touchHighlight}
                    onPress={() => console.log()}
                  >
                    <Image
                      key={3}
                      source={require('../public/images/confusedwoman.png')}
                      style={styles.welcomeImage}
                    />
                  </TouchableHighlight>
                </View>
              </React.Fragment>
            )}
            {card.id === 2 && (
              <View style={styles.imageContainer}>
                <TouchableHighlight
                  underlayColor="#2e78b7"
                  style={styles.touchHighlight}
                  onPress={() => console.log()}
                >
                  <Image
                    key={4}
                    source={require('../public/images/water.png')}
                    style={styles.welcomeImage}
                  />
                </TouchableHighlight>
              </View>
            )}
            {card.id === 3 && (
              <React.Fragment>
                <View style={styles.imageContainer}>
                  <TouchableHighlight
                    underlayColor="#2e78b7"
                    style={styles.touchHighlight}
                    onPress={() => console.log()}
                  >
                    <Image
                      key={4}
                      source={require('../public/images/water.png')}
                      style={styles.welcomeImage}
                    />
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="#2e78b7"
                    style={styles.touchHighlight}
                    onPress={() => console.log()}
                  >
                    <Image
                      key={5}
                      source={require('../public/images/food.png')}
                      style={styles.welcomeImage}
                    />
                  </TouchableHighlight>
                </View>
              </React.Fragment>
            )}
          </View>
        ))}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <DraggableFlatList
          data={this.state.cards}
          renderItem={this.renderItem}
          keyExtractor={(card, index) => `draggable-item-${card.id}`}
          onMoveEnd={({ cards }) => this.setState({ cards })}
        />
      </View>
    );
  }

  // );
  // }
}

HomeScreen.navigationOptions = {
  header: null,
};

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
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 4,
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    margin: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    borderRadius: 4,
  },
  touchHighlight: {
    borderRadius: 4,
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
