import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Settings extends Component {

    render() {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => {
            setIsEnabled(previousState => !previousState);
            AsyncStorage.setItem('user-language', previousState);
        }
        return(
            <View style={styles.container}>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    {isEnabled ? <Text>English</Text> : <Text>Frence</Text>}
                </View>
        
        );
    }
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        padding: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
