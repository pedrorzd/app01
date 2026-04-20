import { StyleSheet, View, VirtualizedList } from "react-native";
import { useTheme } from "react-native-paper";
import ContatoItem from "./ContatoItem";

export default function TelaB() {
  const theme = useTheme();

  const contatos = [
    { id: "1", nome: "Alice", telefone: "11 99999-0001", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: "2", nome: "Bruno", telefone: "11 99999-0002", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: "3", nome: "Carla", telefone: "11 99999-0003", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: "4", nome: "Diego", telefone: "11 99999-0004", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: "5", nome: "Elisa", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: "6", nome: "Jony", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=6" },
    { id: "7", nome: "Alice", telefone: "11 99999-0001", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: "8", nome: "Bruno", telefone: "11 99999-0002", avatar: "https://i.pravatar.cc/150?img=8" },
    { id: "9", nome: "Carla", telefone: "11 99999-0003", avatar: "https://i.pravatar.cc/150?img=9" },
    { id: "10", nome: "Diego", telefone: "11 99999-0004", avatar: "https://i.pravatar.cc/150?img=10" },
    { id: "11", nome: "Elisa", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: "12", nome: "Jony", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=12" },
  ];

  // 🔹 Funções obrigatórias no VirtualizedList
  const getItem = (data, index) => data[index];
  const getItemCount = (data) => data.length;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.areaLista}>
        <VirtualizedList
          data={contatos}
          initialNumToRender={5} // quantos itens renderizar inicialmente
          renderItem={({ item, index }) => (
            <ContatoItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          getItem={getItem}
          getItemCount={getItemCount}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  areaLista: {
    flex: 1,
    margin: 14,
    backgroundColor: "#F5F5F5",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  lista: {
    paddingBottom: 10,
  },
});