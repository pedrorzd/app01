import { useTheme } from "react-native-paper";
import { FlatList, View } from "react-native-web";

export default function TelaB() {
    const theme = useTheme();

    const contatos = [
        { id: "1", nome: "Alice", telefone: "11 99999-0001", avatar: "https://i.pravatar.cc/150?img=1"},
        { id: "2", nome: "Bruno", telefone: "11 99999-0002", avatar: "https://i.pravatar.cc/150?img=2"},
        { id: "3", nome: "Carla", telefone: "11 99999-0003", avatar: "https://i.pravatar.cc/150?img=3"},
        { id: "4", nome: "Diego", telefone: "11 99999-0004", avatar: "https://i.pravatar.cc/150?img=4"},
        { id: "5", nome: "Elisa", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=5"},
        { id: "6", nome: "Jonny", telefone: "11 99999-0006", avatar: "https://i.pravatar.cc/150?img=6"}
    ];

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <FlatList
                data={contatos}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => (
                    <View
                        style={[
                            styles.card,
                            {backgroundColor: index % 2 === 0 ? "#DDEEF2" : "F3DDE7"}
                        ]}
                    >
                    
                )}}
            ></FlatList>
        </View>
    )
}