import { router } from 'expo-router';
import { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';

export default function TopDropDownMenu() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const navigate = (path) => {
    closeMenu();           // fecha o menu
    router.push(path);     // navega para a rota
  };

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="black" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => navigate('/view/ContatoListView')} title="Contatos" />
        <Menu.Item onPress={() => navigate('/view/UsuarioListView')} title="Usuarios" />
        <Menu.Item onPress={() => navigate('/view/CompromissoListView')} title="Compromissos" />
        <Menu.Item onPress={() => navigate('/view/TarefaListView')} title="Tarefas" />
        <Menu.Item onPress={() => navigate('/view/DataImportanteListView')} title="Datas importantes" />
        <Menu.Item onPress={() => navigate('/view/AlimentoListView')} title="Alimento" />
        <Menu.Item onPress={() => navigate('/view/DuvidaListView')} title="Dúvidas" />
        <Menu.Item onPress={() => navigate('/view/CarroListView')} title="Carros" />
        <Menu.Item onPress={() => navigate('/view/ImovelListView')} title="Imovel" />
        <Menu.Item onPress={() => navigate('/view/EventoListView')} title="Evento" />
      </Menu>
      <Appbar.Content title="Meu App" />
    </Appbar.Header>
  );
}