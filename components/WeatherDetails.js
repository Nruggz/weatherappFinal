import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Theme as T } from '../theme';
import Icon from '../weatherIcon';


const WeatherDetails = (props) => {
    return (
        <ScrollView style={styles.container} horizontal={true} nestedScrollEnabled={true}>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>1:00 PM</Text>
                <Text style={styles.dailyText}>{props.hourly[0].temp}</Text>
                <Icon name="wi-day-rain" style={styles.dailyIcon} />
                <Icon name="wi-direction-up-right" style={styles.dailyIcon} />
            </View>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>{props.hourly[1].temp}</Text>
            </View>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>{props.hourly[2].temp}</Text>
            </View>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>{props.hourly[3].temp}</Text>
            </View>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>{props.hourly[4].temp}</Text>
            </View>
            <View style={styles.daily}>
                <Text style={styles.dailyText}>{props.hourly[5].temp}</Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'black',
        color: T.cardText,
        padding: 20,
        borderRadius: T.curve,
        marginTop: T.vSpacing,
        flexDirection: 'row'
    },
    daily: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: T.cardBg,
        color: T.cardText,
        padding: 20,
        borderRadius: T.curve,
        marginRight: T.vSpacing
    },
    dailyText: {
        fontSize: 10,
        color: 'black'
    },
    dialyIcon: {
        fontSize: 14,
        color: 'black'
    }
});

export default WeatherDetails;