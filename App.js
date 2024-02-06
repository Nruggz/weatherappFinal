import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import axios from 'axios';

import { Theme as T } from './theme';

import ForecastHourly from './components/ForecastHourly';
import CurrentConditions from './components/CurrentConditions';
import WeatherDetails from './components/WeatherDetails';
import ForecastSummary from './components/ForecastSummary';
import SunRiseSet from './components/SunRiseSet';


export default function App() {

  const [data, setData] = useState(null);

  const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.42&lon=-82.44&units=imperial&appid=e60467cc5cd373bff0d523243f27ceb2";

  useEffect(() => {

    const getWeather = async () => {
      const response = await axios.get(weatherURL);
      setData(response.data);
    };

    getWeather();
  }, []);

  const [loaded] = useFonts({
    icomoon: require('./assets/fonts/icomoon.ttf')
  });

  if (!loaded || !data) {
    return (
      <View style={T.loadingContainer}>
        <Text style={styles.loadText}>Loading Weather Data...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (

    <SafeAreaProvider style={styles.safeView}>
      <ScrollView style={styles.container}>

        <CurrentConditions current={data.current} today={data.daily[0]} />

        <ForecastHourly hourly={data.hourly} />

        <SunRiseSet current={data.daily[0]} />

        <StatusBar style="auto" hidden />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: T.containerBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadText: {
    color: 'white'
  },
  safeView: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: T.containerBg,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 0
  },
  heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 12
  }
});