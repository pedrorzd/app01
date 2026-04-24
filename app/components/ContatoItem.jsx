import { Image, StyleSheet, Text, View } from "react-native";

export default function ContatoItem({ item, index }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.telefone}>{item.telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 14,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
  },
  telefone: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
});
