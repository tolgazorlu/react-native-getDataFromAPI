import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: null
    }
  }


  componentDidMount() {

    fetch('https://raw.githubusercontent.com/tolgazorlu/react_native_getDataFromAPI/main/cars.json')
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          data: json.cars
        })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  render() {

    const { data, isLoading } = this.state

    return (
      <View style={styles.container}>
                
        {isLoading ? <ActivityIndicator /> : (
          <FlatList 
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image styles={styles.image} source={{uri: 'https://www.ssmotors.com.tr/B2ELResim/AracResim2El/14867/0088aae1fc68452088d247166969c2132501201819345473848_2_Buyuk.jpg'}} />
        
                <Text style={styles.text}>{item.title}, {item.model}</Text>
              </View>
            )}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  image:{
    height: 50,
    width: 50
  },
  item: {
    backgroundColor: '#2B16E6',
    fontWeight: 'bold',
    borderRadius: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  }
});

/*
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }
};*/