import { Button, View } from "react-native";
import { ComeBack } from "../../../components/GoBackPage/GoBackPage";

export const Navegacao = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ComeBack/>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

