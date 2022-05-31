import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesScene from "./scenes/NotesScene/NotesScene";

const { Navigator, Screen: Scene } = createNativeStackNavigator();

const TuskyApp = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Notes">
                <Scene name="Notes" component={NotesScene} />
            </Navigator>
        </NavigationContainer>
    );
};

export default TuskyApp;
