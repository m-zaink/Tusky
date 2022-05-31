import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotesListScene from "./scenes/NotesListScene/NotesListScene";

const { Navigator, Screen: Scene } = createNativeStackNavigator();

const TuskyApp = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Notes">
                <Scene name="Notes" component={NotesListScene} />
            </Navigator>
        </NavigationContainer>
    );
};

export default TuskyApp;
