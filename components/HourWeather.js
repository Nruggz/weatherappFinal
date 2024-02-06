import { View, Text, StyleSheet } from 'react-native';
import { Theme as T } from '../theme';
import Icon from '../weatherIcon';
import { codeToIcon } from '../helpers';


const HourWeather = (props) => {
    let thisDate = new Date(props.thisHour.dt * 1000);
    let hour = thisDate.getHours();
    let day = thisDate.getDay();

    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

    let meridian;

    let tempHour = hour;

    if(hour > 12) {
        hour = hour - 12;
        meridian = "PM";
    } else {
        meridian = "AM";
    }

    if(tempHour === 0) {
        hour = 12;
        meridian = "AM";
    }

    if(tempHour === 12) {
        hour = 12;
        meridian = "PM";
    }

    hour = hour + ":00 " + meridian;

    let temp, pop = 0;
    temp = Math.round(props.thisHour.temp);
    pop = Math.round(props.thisHour.pop * 100);


    return (
    <View style={styles.hourly}>
        <Text style={styles.hourlyText}>{days[day]}</Text>
        <Text style={styles.hourlyText}>{temp}&deg;</Text>
        <Icon name={codeToIcon(props.thisHour.weather[0].id, props.thisHour.dt)} style={styles.hourlyIcon} />
        <Text style={styles.hourlyText}>{pop}%</Text>
        <Text style={styles.hourlyText}>{hour}</Text>
    </View>

    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        color: T.cardText,
        padding: 10,
        borderRadius: T.curve,
        marginTop: T.vSpacing,
        flexDirection: 'row'
    },
    hourly: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: T.tileGrey, 
        color: T.sectionText,
        padding: 10,
        borderRadius: T.curve,
        marginRight: 5
    },
    hourlyText: {
        fontSize: 15,
        color: T.sectionText,
    },
    hourlyIcon: {
        fontSize: 50,
        color: T.sectionText
    }
    });
    
export default HourWeather;