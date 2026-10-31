import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function DashboardScreen({ navigation }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const caesRecentes = [
    {
      id: '1',
      nome: 'Valentina',
      raca: 'Akita',
      sexo: 'Femea',
      inicial: 'V',
      fotoUrl: '',
    },
    {
      id: '2',
      nome: 'Noan',
      raca: 'Spitz Alemão',
      sexo: 'Macho',
      inicial: 'N',
      fotoUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '3',
      nome: 'Linda',
      raca: 'Golden',
      sexo: 'Femea',
      inicial: 'L',
      fotoUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: '4',
      nome: 'Kira',
      raca: 'Lulu',
      sexo: 'Macho',
      inicial: 'K',
      fotoUrl: '',
    },
  ];

  function alternarMenu() {
    if (menuAberto === true) {
      setMenuAberto(false);
    } else {
      setMenuAberto(true);
    }
  }

  function irParaPerfil() {
    setMenuAberto(false);
    navigation.navigate('Perfil');
  }

  function renderizarAvatarCao(cao) {
    if (cao.fotoUrl !== '') {
      return (
        <Image
          source={{ uri: cao.fotoUrl }}
          style={styles.caoAvatarImagem}
        />
      );
    } else {
      return (
        <View style={styles.caoAvatarInicialBox}>
          <Text style={styles.caoAvatarInicialTexto}>{cao.inicial}</Text>
        </View>
      );
    }
  }

  function obterEstiloBadgeSexo(sexo) {
    if (sexo === 'Macho') {
      return styles.badgeMacho;
    } else {
      return styles.badgeFemea;
    }
  }

  function obterEstiloTextoBadgeSexo(sexo) {
    if (sexo === 'Macho') {
      return styles.badgeMachoTexto;
    } else {
      return styles.badgeFemeaTexto;
    }
  }

  function renderizarMenuMobile() {
    if (menuAberto === true) {
      return (
        <View style={styles.menuDropdown}>
          <TouchableOpacity style={styles.menuItemAtivo} onPress={alternarMenu}>
            <Text style={styles.menuItemTextoAtivo}>Tela Principal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={alternarMenu}>
            <Text style={styles.menuItemTexto}>Cachorros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={alternarMenu}>
            <Text style={styles.menuItemTexto}>Maternidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={alternarMenu}>
            <Text style={styles.menuItemTexto}>Vacinas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={alternarMenu}>
            <Text style={styles.menuItemTexto}>Rações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemPerfil} onPress={irParaPerfil}>
            <Text style={styles.menuItemPerfilTexto}>Meu Perfil (Criador)</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />

      <View style={styles.headerMobile}>
        <TouchableOpacity
          style={styles.botaoHamburguer}
          onPress={alternarMenu}
          activeOpacity={0.75}
        >
          <View style={styles.linhaHamburguer} />
          <View style={styles.linhaHamburguer} />
          <View style={styles.linhaHamburguer} />
        </TouchableOpacity>

        <Text style={styles.logoTexto}>
          Canil<Text style={styles.logoDestaque}>Manager</Text>
        </Text>

        <View style={styles.espacadorDireito} />
      </View>

      {renderizarMenuMobile()}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cabecalhoPagina}>
          <Text style={styles.tituloPagina}>Tela Principal</Text>
          <Text style={styles.subtituloPagina}>
            Visão geral do seu canil — sábado, 31 de outubro
          </Text>
        </View>

        <View style={styles.listaKpis}>
          <View style={styles.kpiCard}>
            <View>
              <Text style={styles.kpiLabel}>TOTAL DE CÃES</Text>
              <Text style={styles.kpiValor}>4</Text>
            </View>
            <View style={styles.kpiIconeBoxBege}>
              <Text style={styles.kpiIconeLaranja}>🐾</Text>
            </View>
          </View>

          <View style={styles.kpiCard}>
            <View>
              <Text style={styles.kpiLabel}>MACHOS</Text>
              <Text style={styles.kpiValor}>2</Text>
            </View>
            <View style={styles.kpiIconeBoxVerde}>
              <Text style={styles.kpiIconeVerde}>♂</Text>
            </View>
          </View>

          <View style={styles.kpiCard}>
            <View>
              <Text style={styles.kpiLabel}>FÊMEAS</Text>
              <Text style={styles.kpiValor}>2</Text>
            </View>
            <View style={styles.kpiIconeBoxRosa}>
              <Text style={styles.kpiIconeRosa}>♀</Text>
            </View>
          </View>

          <View style={styles.kpiCard}>
            <View>
              <Text style={styles.kpiLabel}>FILHOTES</Text>
              <Text style={styles.kpiValor}>0</Text>
            </View>
            <View style={styles.kpiIconeBoxBege}>
              <Text style={styles.kpiIconeLaranja}>☺</Text>
            </View>
          </View>
        </View>

        <View style={styles.painelCard}>
          <View style={styles.painelHeader}>
            <Text style={styles.painelTituloSerif}>
              Últimos Cios{'\n'}Registrados
            </Text>
            <TouchableOpacity style={styles.botaoLinkCios} activeOpacity={0.75}>
              <Text style={styles.linkTextoLaranja}>
                Ver todas as{'\n'}fêmeas
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemInternoCard}>
            <View style={styles.iconeCalendarioBox}>
              <View style={styles.calendarioDesenho}>
                <View style={styles.calendarioTopo} />
                <View style={styles.calendarioPontoLinha}>
                  <View style={styles.calendarioPonto} />
                  <View style={styles.calendarioPonto} />
                </View>
              </View>
            </View>

            <View style={styles.itemCentroTextos}>
              <Text style={styles.itemNome}>Kira</Text>
              <Text style={styles.itemData}>01/10/2026 — 10/10/2026</Text>
            </View>

            <View style={styles.badgeCruzou}>
              <Text style={styles.badgeCruzouTexto}>Cruzou</Text>
            </View>
          </View>
        </View>

        <View style={styles.painelCard}>
          <Text style={styles.painelTituloIsoladoSerif}>Cães Recentes</Text>

          <View style={styles.listaCaesContainer}>
            {caesRecentes.map(function (cao) {
              return (
                <View key={cao.id} style={styles.itemInternoCard}>
                  {renderizarAvatarCao(cao)}

                  <View style={styles.itemCentroTextos}>
                    <Text style={styles.itemNome}>{cao.nome}</Text>
                    <Text style={styles.itemRaca}>{cao.raca}</Text>
                  </View>

                  <View style={obterEstiloBadgeSexo(cao.sexo)}>
                    <Text style={obterEstiloTextoBadgeSexo(cao.sexo)}>
                      {cao.sexo}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          <TouchableOpacity style={styles.botaoVerTodosCaes} activeOpacity={0.85}>
            <Text style={styles.botaoVerTodosCaesTexto}>
              Ver todos os cachorros
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  headerMobile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8F5F0',
    borderBottomWidth: 1,
    borderBottomColor: '#EFECE6',
  },
  botaoHamburguer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  linhaHamburguer: {
    width: 16,
    height: 2,
    backgroundColor: '#1C1105',
    borderRadius: 1,
  },
  logoTexto: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '900',
    color: '#1C1105',
  },
  logoDestaque: {
    color: '#D97706',
  },
  espacadorDireito: {
    width: 40,
  },
  menuDropdown: {
    backgroundColor: '#1C1105',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3C240B',
    gap: 6,
  },
  menuItemAtivo: {
    backgroundColor: '#3C240B',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  menuItemTextoAtivo: {
    color: '#D97706',
    fontSize: 13,
    fontWeight: '700',
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  menuItemTexto: {
    color: '#CDBFAF',
    fontSize: 13,
    fontWeight: '600',
  },
  menuItemPerfil: {
    marginTop: 4,
    paddingTop: 10,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderTopColor: '#3C240B',
  },
  menuItemPerfilTexto: {
    color: '#F0E6DA',
    fontSize: 12,
    fontWeight: '700',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 36,
  },
  cabecalhoPagina: {
    marginBottom: 22,
  },
  tituloPagina: {
    fontFamily: 'serif',
    fontSize: 32,
    fontWeight: '900',
    color: '#111827',
  },
  subtituloPagina: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  listaKpis: {
    gap: 14,
    marginBottom: 22,
  },
  kpiCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kpiLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  kpiValor: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  kpiIconeBoxBege: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kpiIconeLaranja: {
    fontSize: 19,
    color: '#D97706',
    fontWeight: 'bold',
  },
  kpiIconeBoxVerde: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kpiIconeVerde: {
    fontSize: 20,
    color: '#10B981',
    fontWeight: 'bold',
  },
  kpiIconeBoxRosa: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FCE7F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kpiIconeRosa: {
    fontSize: 20,
    color: '#EC4899',
    fontWeight: 'bold',
  },
  painelCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 28,
    padding: 22,
    marginBottom: 22,
  },
  painelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  painelTituloSerif: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 26,
  },
  painelTituloIsoladoSerif: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 18,
  },
  botaoLinkCios: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  linkTextoLaranja: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B45309',
    lineHeight: 16,
  },
  listaCaesContainer: {
    gap: 12,
  },
  itemInternoCard: {
    backgroundColor: '#FAF8F5',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconeCalendarioBox: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  calendarioDesenho: {
    width: 18,
    height: 16,
    borderWidth: 1.8,
    borderColor: '#D97706',
    borderRadius: 3,
    overflow: 'hidden',
  },
  calendarioTopo: {
    height: 4,
    backgroundColor: '#D97706',
  },
  calendarioPontoLinha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  calendarioPonto: {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.5,
    backgroundColor: '#D97706',
  },
  caoAvatarImagem: {
    width: 44,
    height: 44,
    borderRadius: 13,
    marginRight: 14,
    backgroundColor: '#EFECE6',
  },
  caoAvatarInicialBox: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#EFECE6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  caoAvatarInicialTexto: {
    fontSize: 15,
    fontWeight: '800',
    color: '#D97706',
  },
  itemCentroTextos: {
    flex: 1,
    paddingRight: 10,
  },
  itemNome: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  itemData: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  itemRaca: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  badgeCruzou: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
  },
  badgeCruzouTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#92400E',
  },
  badgeMacho: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
  },
  badgeMachoTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#10B981',
  },
  badgeFemea: {
    backgroundColor: '#FCE7F3',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
  },
  badgeFemeaTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#EC4899',
  },
  botaoVerTodosCaes: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  botaoVerTodosCaesTexto: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B45309',
  },
});
