import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme as T } from '../theme';
import { Moon, MoonPhase } from '../theme';
import Icon from '../weatherIcon';


const SunRiseSet = (props) => {
    let sunriseDt = new Date(props.current.sunrise * 1000);
    let sunsetDt = new Date(props.current.sunset * 1000);
    let moonriseDt = new Date(props.current.moonrise * 1000);
    let moonsetDt = new Date(props.current.moonset * 1000);

    let moonIcon = Math.round(props.current.moon_phase * 28);
    let moonPhase = props.current.moon_phase * 100;

    return (
        <View>
            <Text style={styles.heading}>Solar</Text>

            <View style={styles.container}>
                <View style={styles.cell}>
                    <Icon name='wi-sunrise' style={styles.cellIcon} />
                    <Text style={styles.cellText}>Sunrise</Text>
                    <Text style={styles.cellData}>{sunriseDt.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                </View>

                <View style={styles.cell}>
                    <Icon name='wi-sunset' style={styles.cellIcon} />
                    <Text style={styles.cellText}>Sunset</Text>
                    <Text style={styles.cellData}>{sunsetDt.toLocaleTimeString("en-US", { hour12: true, hour: '2-digit', minute: '2-digit' })}</Text>
                </View>


                { /*
                <View style={styles.cell}>
                    <Text style={{color: T.sectionText}}>Moon Phase</Text>
                    <Text style={{color: T.sectionText}}>Moon Phase: {moonPhase}%</Text>
                </View>
                */ }
            </View>


            <Text style={styles.heading}>Lunar</Text>

            <View style={styles.container}>
                <View style={styles.cell}>
                    <Icon name='wi-moonrise' style={styles.cellIcon} />
                    <Text style={styles.cellText}>Moonrise</Text>
                    <Text style={styles.cellData}>{moonriseDt.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                </View>

                <View style={styles.cell}>
                    <Icon name={Moon[moonIcon]} style={styles.cellIcon} />
                    <Text style={styles.cellText}>Current</Text>
                    <Text style={{ color: '#fff', fontSize: 10, fontWeight: '800' }}>{MoonPhase[moonIcon]}</Text>
                </View>

                <View style={styles.cell}>
                    <Icon name='wi-moonset' style={styles.cellIcon} />
                    <Text style={styles.cellText}>Moonset</Text>
                    <Text style={styles.cellData}>{moonsetDt.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: T.tileGrey,
        color: T.sectionText,
        padding: 20,
        borderRadius: T.curve,
        marginTop: T.vSpacing,
        marginBottom: T.vSpacing,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    cell: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellIcon: {
        fontSize: 34,
        color: 'white'
    },
    cellText: {
        color: '#D6D5C9',
        fontSize: 10
    },
    cellData: {
        fontSize: 18,
        color: '#ddd',
        marginTop: 5
    },
    heading: {
        textAlign: 'center',
        fontSize: 32,
        color: '#a22c29',
        marginTop: T.vSpacing,
        marginBottom: 0
    }
});

export default SunRiseSet;