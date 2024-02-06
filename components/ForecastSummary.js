import { View, Text, StyleSheet } from 'react-native';
import { Theme as T } from '../theme';
import { getWeatherDescription } from '../helpers';


const ForecastSummary = (props) => {

    let description = getWeatherDescription(props.current);


    return (
        <View style={styles.container}>
            <Text style={styles.descText}>{description}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#a22c29',
        color: T.cardText,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        borderRadius: T.curve,
        marginTop: 20,
    },
    descText: {
        color: '#D6D5C9',
        textAlign: 'center',
        fontSize: 16,
    }
});

export default ForecastSummary;