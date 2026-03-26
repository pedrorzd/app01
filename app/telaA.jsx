import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function TelaA() {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.texto}>Esta é a Tela A</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    topo: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        paddingTop: 18,
        paddingBottom: 14,
        paddingHorizontal: 12,
    },
    texto: {
        fontSize: 28,
        fontWeight: "bold",
    },
    botaoTopo: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: "#1d5db3",
        borderRadius: 8,
    },
    textoBotaoTopo: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});