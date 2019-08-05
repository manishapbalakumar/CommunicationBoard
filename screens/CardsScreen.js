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
    this.renderItem = this.renderItem.bind(this);
  }

  async componentDidMount() {
    try {
      const { data: cards } = await axios.get(
        'https://1eb40f6f.ngrok.io/api/cards'
      );
      await this.setState({
        data: cards.map((card, index) => ({
          key: `item-${index}`,
          cardInfo: card,
        })),
      });
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
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}>{item.cardInfo.name}</Text>
          {item.cardInfo.id === 1 && (
            <React.Fragment>
              <View style={styles.imageContainer}>
                <TouchableHighlight
                  underlayColor="#2e78b7"
                  style={styles.touchHighlight}
                  onPress={() => console.log()}
                >
                  <Image
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
                    source={require('../public/images/confusedwoman.png')}
                    style={styles.welcomeImage}
                  />
                </TouchableHighlight>
              </View>
            </React.Fragment>
          )}
          {item.cardInfo.id === 2 && (
            <View style={styles.imageContainer}>
              <TouchableHighlight
                underlayColor="#2e78b7"
                style={styles.touchHighlight}
                onPress={() => console.log()}
              >
                <Image
                  source={require('../public/images/water.png')}
                  style={styles.welcomeImage}
                />
              </TouchableHighlight>
            </View>
          )}
          {item.cardInfo.id === 3 && (
            <React.Fragment>
              <View style={styles.imageContainer}>
                <TouchableHighlight
                  underlayColor="#2e78b7"
                  style={styles.touchHighlight}
                  onPress={() => console.log()}
                >
                  <Image
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
                    source={require('../public/images/food.png')}
                    style={styles.welcomeImage}
                  />
                </TouchableHighlight>
              </View>
            </React.Fragment>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // console.log('state:    ', this.state);

    if (this.state) {
      return (
        <View style={styles.container}>
          <DraggableFlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `draggable-item-${item.key}`}
            onMoveEnd={({ data }) => this.setState({ data })}
          />
        </View>
      );
    } else {
      return <Text>Error Loading Cards</Text>;
    }
  }

  // );
  // }
}

HomeScreen.navigationOptions = {
  title: 'Cards',
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
