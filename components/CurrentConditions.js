import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme as T } from '../theme';
import Icon from '../weatherIcon';
import ForecastSummary from './ForecastSummary';

import Sunny from '../assets/images/day-clear.jpg';
import Moon from '../assets/images/night-clear.jpg';


const CurrentConditions = (props) => {

    let currentDt = new Date(props.current.dt * 1000);
    let hour = currentDt.getHours();

    let imageSrc;

    if(hour > 8 && hour < 18) imageSrc = Sunny;
    else imageSrc = Moon;

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    return (
        <View>
            <Text style={styles.location}>Huntington, WV</Text>

            <View style={styles.container}>
                    <Text style={styles.heroText}>{props.current.weather[0].description.toUpperCase()}</Text>
                    <Text style={styles.heroTextDate}>{days[currentDt.getDay()]}, {months[currentDt.getMonth()]} {currentDt.getDate()}</Text>
            </View>
            
            <Image source={imageSrc} style={styles.heroImage} />
            
            <ForecastSummary current={props.today} />

            <Text style={styles.location}>Details</Text>
            <View style={styles.detailRow}>
                    <View style={styles.detailBox}>
                        <Icon name="wi-thermometer" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Tempurature</Text>
                        <Text style={styles.detailData}>{Math.round(props.current.temp)}&deg;F</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-thermometer-internal" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Feels Like</Text>
                        <Text style={styles.detailData}>{Math.round(props.current.feels_like)}&deg;F</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-barometer" style={styles.detailIcon} />
                        <Text style={styles.detailText}>Pressure</Text>
                        <Text style={styles.detailData}>{props.current.pressure}</Text>
                    </View>
                    
                    <View style={styles.detailBox}>
                        <Icon name="wi-day-sunny" style={styles.detailIcon} />
                        <Text style={styles.detailText}>UVI</Text>
                        <Text style={styles.detailData}>{props.current.uvi}</Text>
                    </View>
                    
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#a22c29',
        color: T.cardText,
        padding: 0,
        paddingTop: 0,
        borderRadius: T.curve,
        marginTop: T.vSpacing,
        marginBottom: 2,
    },
    heroText: {
        color: '#D6D5C9',
        fontSize: 24,
        marginBottom: 0,
        textAlign: 'center'
    },
    heroTextDate: {
        color: '#D6D5C9',
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'center'
    },
    heroImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: T.curve,
        resizeMode: 'cover',
        marginTop: 15,
    },
    location: {
        fontSize: 32,
        color: '#A22C29',
        marginTop: T.vSpacing,
        marginBottom: 5,
        textAlign: 'center',
    },
    detailRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '100%',
    },
    detailBox: {
        maxHeight: 240,
        borderRadius: 400,
        borderColor: 'black',
        aspectRatio: 1 / 2.8,
        padding: 12,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a22c29',
    },
    detailText: {
        color: '#D6D5C9',
        fontSize: 24
    },
    detailIcon: {
        fontSize: 60,
        color: 'white',
        marginBottom: 2
    },
    detailData: {
        fontSize: 18,
        color: '#D6D5C9'
    }
});

export default CurrentConditions;