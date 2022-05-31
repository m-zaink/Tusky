import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScene = () => {
    return (
        <View style={styles.containerStyle}>
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScene;
