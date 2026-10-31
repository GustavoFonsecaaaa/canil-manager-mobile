import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function DashboardScreen({ navigation, route }) {
  const [filtroAlerta, setFiltroAlerta] = useState('todas');
  const [acaoSelecionadaMensagem, setAcaoSelecionadaMensagem] = useState('');
  const [alertas, setAlertas] = useState([
    {
      id: '1',
      tipo: 'vacina-vencida',
      titulo: 'Vacina V10 vencida - Thor',
      descricao: 'A dose anual venceu há 2 dias. Registe a aplicação.',
      urgencia: 'alta',
      lida: false,
    },
    {
      id: '2',
      tipo: 'vacina-vencer',
      titulo: 'Vacina Antirrábica próxima - Luna',
      descricao: 'Prevista para daqui a 4 dias (Golden Retriever).',
      urgencia: 'media',
      lida: false,
    },
    {
      id: '3',
      tipo: 'racao-baixa',
      titulo: 'Estoque baixo - Royal Canin Maxi',
      descricao: 'Restam apenas 3 sacos no estoque principal.',
      urgencia: 'media',
      lida: false,
    },
    {
      id: '4',
      tipo: 'cio-terminando',
      titulo: 'Ciclo reprodutivo - Mel',
      descricao: 'Período fértil estimado termina em 3 dias.',
      urgencia: 'info',
      lida: false,
    },
  ]);

  function obterNomeUsuario() {
    if (route && route.params && route.params.usuarioEmail) {
      return route.params.usuarioEmail;
    } else {
      return 'admin@canil.com';
    }
  }

  function irParaPerfil() {
    navigation.navigate('Perfil', {
      usuarioNome: 'Criador',
      usuarioEmail: obterNomeUsuario(),
    });
  }

  function selecionarFiltro(novoFiltro) {
    setFiltroAlerta(novoFiltro);
  }

  function marcarTodasComoLidas() {
    const listaAtualizada = [];
    for (let i = 0; i < alertas.length; i++) {
      const item = alertas[i];
      listaAtualizada.push({
        id: item.id,
        tipo: item.tipo,
        titulo: item.titulo,
        descricao: item.descricao,
        urgencia: item.urgencia,
        lida: true,
      });
    }
    setAlertas(listaAtualizada);
  }

  function contarNaoLidas() {
    let total = 0;
    for (let i = 0; i < alertas.length; i++) {
      if (alertas[i].lida === false) {
        total = total + 1;
      }
    }
    return total;
  }

  function dispararAcaoRapida(nomeAcao) {
    if (nomeAcao === 'cao') {
      setAcaoSelecionadaMensagem('Ação rápida selecionada: Cadastrar novo cão.');
    } else if (nomeAcao === 'vacina') {
      setAcaoSelecionadaMensagem('Ação rápida selecionada: Registar vacina.');
    } else {
      setAcaoSelecionadaMensagem('Ação rápida selecionada: Gerir estoque de ração.');
    }
  }

  function fecharMensagemAcao() {
    setAcaoSelecionadaMensagem('');
  }

  function renderizarFeedbackAcao() {
    if (acaoSelecionadaMensagem === '') {
      return null;
    } else {
      return (
        <View style={styles.bannerAcao}>
          <Text style={styles.bannerAcaoTexto}>{acaoSelecionadaMensagem}</Text>
          <TouchableOpacity onPress={fecharMensagemAcao} style={styles.bannerAcaoFechar}>
            <Text style={styles.bannerAcaoFecharTexto}>OK</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  function obterEstiloBotaoFiltro(chave) {
    if (filtroAlerta === chave) {
      return [styles.filtroChip, styles.filtroChipAtivo];
    } else {
      return styles.filtroChip;
    }
  }

  function obterEstiloTextoFiltro(chave) {
    if (filtroAlerta === chave) {
      return [styles.filtroChipTexto, styles.filtroChipTextoAtivo];
    } else {
      return styles.filtroChipTexto;
    }
  }

  function obterEstiloBadgeAlerta(urgencia) {
    if (urgencia === 'alta') {
      return styles.badgeVermelho;
    } else if (urgencia === 'media') {
      return styles.badgeLaranja;
    } else {
      return styles.badgeVerde;
    }
  }

  function obterEstiloTextoBadgeAlerta(urgencia) {
    if (urgencia === 'alta') {
      return styles.badgeTextoVermelho;
    } else if (urgencia === 'media') {
      return styles.badgeTextoLaranja;
    } else {
      return styles.badgeTextoVerde;
    }
  }

  function obterRotuloUrgencia(tipo) {
    if (tipo === 'vacina-vencida') {
      return 'Vacina vencida';
    } else if (tipo === 'vacina-vencer') {
      return 'Vacina a vencer';
    } else if (tipo === 'racao-baixa') {
      return 'Ração baixa';
    } else {
      return 'Reprodução';
    }
  }

  function renderizarPontoNaoLido(lida) {
    if (lida === false) {
      return <View style={styles.pontoNaoLido} />;
    } else {
      return null;
    }
  }

  function renderizarListaAlertas() {
    const itensFiltrados = [];
    for (let i = 0; i < alertas.length; i++) {
      const item = alertas[i];
      if (filtroAlerta === 'todas') {
        itensFiltrados.push(item);
      } else {
        if (item.tipo === filtroAlerta) {
          itensFiltrados.push(item);
        }
      }
    }

    if (itensFiltrados.length === 0) {
      return (
        <View style={styles.emptyStateCard}>
          <Text style={styles.emptyStateTitulo}>Nenhuma notificação neste filtro</Text>
          <Text style={styles.emptyStateSubtitulo}>Está tudo em dia no seu canil!</Text>
        </View>
      );
    } else {
      return itensFiltrados.map(function (alerta) {
        return (
          <View key={alerta.id} style={styles.itemCardIndividual}>
            <View style={styles.alertaCardTopo}>
              <View style={obterEstiloBadgeAlerta(alerta.urgencia)}>
                <Text style={obterEstiloTextoBadgeAlerta(alerta.urgencia)}>
                  {obterRotuloUrgencia(alerta.tipo)}
                </Text>
              </View>
              {renderizarPontoNaoLido(alerta.lida)}
            </View>
            <Text style={styles.itemTitulo}>{alerta.titulo}</Text>
            <Text style={styles.itemSubtitulo}>{alerta.descricao}</Text>
          </View>
        );
      });
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />

      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcone}>
            <Text style={styles.logoIconeTexto}>♥</Text>
          </View>
          <View>
            <Text style={styles.marcaTexto}>
              Canil<Text style={styles.marcaDestaque}>Manager</Text>
            </Text>
            <Text style={styles.marcaSubtexto}>GESTÃO DO SEU CANIL</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.atalhoPerfil}
          onPress={irParaPerfil}
          activeOpacity={0.8}
        >
          <View style={styles.avatarCirculo}>
            <Text style={styles.avatarInicial}>C</Text>
          </View>
          <View style={styles.perfilTextos}>
            <Text style={styles.perfilNome}>Criador</Text>
            <Text style={styles.perfilLink}>Perfil</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.saudacaoHeader}>
          <Text style={styles.paginaTitulo}>Tela Principal</Text>
          <Text style={styles.paginaSubtitulo}>Visão geral do seu canil</Text>
        </View>

        {renderizarFeedbackAcao()}

        <Text style={styles.secaoLabel}>RESUMO OPERACIONAL</Text>
        <View style={styles.gridMetricas}>
          <View style={styles.cardMetrica}>
            <View style={styles.cardMetricaTopo}>
              <Text style={styles.metricaRotulo}>TOTAL DE CÃES</Text>
              <View style={styles.iconeMiniLaranja}>
                <Text style={styles.iconeMiniTextoLaranja}>🐾</Text>
              </View>
            </View>
            <Text style={styles.metricaValor}>18</Text>
            <Text style={styles.metricaDetalhe}>7M • 8F • 3 filhotes</Text>
          </View>

          <View style={styles.cardMetrica}>
            <View style={styles.cardMetricaTopo}>
              <Text style={styles.metricaRotulo}>VACINAS</Text>
              <View style={styles.iconeMiniVerde}>
                <Text style={styles.iconeMiniTextoVerde}>💉</Text>
              </View>
            </View>
            <Text style={styles.metricaValor}>4</Text>
            <Text style={styles.metricaDetalhe}>1 vencida • 3 próximas</Text>
          </View>

          <View style={styles.cardMetrica}>
            <View style={styles.cardMetricaTopo}>
              <Text style={styles.metricaRotulo}>ESTOQUE RAÇÃO</Text>
              <View style={styles.iconeMiniLaranja}>
                <Text style={styles.iconeMiniTextoLaranja}>🥣</Text>
              </View>
            </View>
            <Text style={styles.metricaValor}>12</Text>
            <Text style={styles.metricaDetalhe}>Sacos disponíveis</Text>
          </View>

          <View style={styles.cardMetrica}>
            <View style={styles.cardMetricaTopo}>
              <Text style={styles.metricaRotulo}>REPRODUÇÃO</Text>
              <View style={styles.iconeMiniVerde}>
                <Text style={styles.iconeMiniTextoVerde}>♥</Text>
              </View>
            </View>
            <Text style={styles.metricaValor}>2</Text>
            <Text style={styles.metricaDetalhe}>1 cio • 1 gestação</Text>
          </View>
        </View>

        <View style={styles.blocoSecao}>
          <Text style={styles.secaoTitulo}>Ações Rápidas</Text>
          <View style={styles.acoesRapidasLinha}>
            <TouchableOpacity
              style={styles.botaoAcaoPrincipal}
              onPress={() => dispararAcaoRapida('cao')}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoAcaoIconePrimario}>＋</Text>
              <Text style={styles.botaoAcaoTextoPrimario}>Cadastrar cão</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoAcaoSecundario}
              onPress={() => dispararAcaoRapida('vacina')}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoAcaoIconeSecundario}>💉</Text>
              <Text style={styles.botaoAcaoTextoSecundario}>Registar vacina</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoAcaoSecundario}
              onPress={() => dispararAcaoRapida('estoque')}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoAcaoIconeSecundario}>📦</Text>
              <Text style={styles.botaoAcaoTextoSecundario}>Gerir estoque</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.blocoSecao}>
          <View style={styles.secaoCabecalhoLinha}>
            <View style={styles.secaoTituloGrupo}>
              <Text style={styles.secaoTituloSemMargem}>Alertas Rápidos</Text>
              <View style={styles.badgeContadorVermelho}>
                <Text style={styles.badgeContadorTexto}>{contarNaoLidas()} não lidas</Text>
              </View>
            </View>
            <TouchableOpacity onPress={marcarTodasComoLidas} activeOpacity={0.7}>
              <Text style={styles.linkLaranja}>Marcar lidas</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filtrosScroll}
          >
            <TouchableOpacity
              style={obterEstiloBotaoFiltro('todas')}
              onPress={() => selecionarFiltro('todas')}
            >
              <Text style={obterEstiloTextoFiltro('todas')}>Todas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoFiltro('vacina-vencida')}
              onPress={() => selecionarFiltro('vacina-vencida')}
            >
              <Text style={obterEstiloTextoFiltro('vacina-vencida')}>Vacina vencida</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoFiltro('vacina-vencer')}
              onPress={() => selecionarFiltro('vacina-vencer')}
            >
              <Text style={obterEstiloTextoFiltro('vacina-vencer')}>Vacina a vencer</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoFiltro('racao-baixa')}
              onPress={() => selecionarFiltro('racao-baixa')}
            >
              <Text style={obterEstiloTextoFiltro('racao-baixa')}>Ração baixa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoFiltro('cio-terminando')}
              onPress={() => selecionarFiltro('cio-terminando')}
            >
              <Text style={obterEstiloTextoFiltro('cio-terminando')}>Cio terminando</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.listaDiretaContainer}>
            {renderizarListaAlertas()}
          </View>
        </View>

        <View style={styles.blocoSecao}>
          <View style={styles.secaoCabecalhoLinha}>
            <Text style={styles.secaoTituloSemMargem}>Últimos Cios Registrados</Text>
            <TouchableOpacity onPress={() => dispararAcaoRapida('cao')}>
              <Text style={styles.linkLaranja}>Ver todas as fêmeas</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listaDiretaContainer}>
            <View style={styles.itemCardIndividualLinha}>
              <View style={styles.itemRecenteInfo}>
                <Text style={styles.itemTitulo}>Mel (Golden Retriever)</Text>
                <Text style={styles.itemSubtitulo}>Início em 20/10 • Término em 3 dias</Text>
              </View>
              <View style={styles.badgeLaranja}>
                <Text style={styles.badgeTextoLaranja}>Em andamento</Text>
              </View>
            </View>

            <View style={styles.itemCardIndividualLinha}>
              <View style={styles.itemRecenteInfo}>
                <Text style={styles.itemTitulo}>Bella (Spitz Alemão)</Text>
                <Text style={styles.itemSubtitulo}>Cruzamento registado • Em acompanhamento</Text>
              </View>
              <View style={styles.badgeVerde}>
                <Text style={styles.badgeTextoVerde}>Confirmado</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.blocoSecao}>
          <View style={styles.secaoCabecalhoLinha}>
            <Text style={styles.secaoTituloSemMargem}>Cães Recentes</Text>
            <TouchableOpacity onPress={() => dispararAcaoRapida('cao')}>
              <Text style={styles.linkLaranja}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listaDiretaContainer}>
            <View style={styles.itemCardIndividualLinha}>
              <View style={styles.itemRecenteInfo}>
                <Text style={styles.itemTitulo}>Thor • Macho</Text>
                <Text style={styles.itemSubtitulo}>Pastor Alemão • Adulto (2 anos)</Text>
              </View>
              <View style={styles.badgeVerde}>
                <Text style={styles.badgeTextoVerde}>Ativo</Text>
              </View>
            </View>

            <View style={styles.itemCardIndividualLinha}>
              <View style={styles.itemRecenteInfo}>
                <Text style={styles.itemTitulo}>Luna • Fêmea</Text>
                <Text style={styles.itemSubtitulo}>Golden Retriever • Adulto (1a 8m)</Text>
              </View>
              <View style={styles.badgeVerde}>
                <Text style={styles.badgeTextoVerde}>Ativo</Text>
              </View>
            </View>

            <View style={styles.itemCardIndividualLinha}>
              <View style={styles.itemRecenteInfo}>
                <Text style={styles.itemTitulo}>Max • Macho</Text>
                <Text style={styles.itemSubtitulo}>Golden Retriever • Filhote (4 meses)</Text>
              </View>
              <View style={styles.badgeLaranja}>
                <Text style={styles.badgeTextoLaranja}>Filhote</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.botaoVerTodosCaes}
            onPress={() => dispararAcaoRapida('cao')}
            activeOpacity={0.85}
          >
            <Text style={styles.botaoVerTodosCaesTexto}>Ver todos os cachorros</Text>
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: '#F8F5F0',
    borderBottomWidth: 1,
    borderBottomColor: '#EFECE6',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcone: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  logoIconeTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  marcaTexto: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1105',
  },
  marcaDestaque: {
    color: '#D97706',
  },
  marcaSubtexto: {
    fontSize: 9,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.7,
  },
  atalhoPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  avatarCirculo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  avatarInicial: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  perfilTextos: {
    paddingRight: 2,
  },
  perfilNome: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1C1105',
  },
  perfilLink: {
    fontSize: 10,
    fontWeight: '700',
    color: '#D97706',
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 36,
  },
  saudacaoHeader: {
    marginBottom: 16,
  },
  paginaTitulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1105',
    marginBottom: 2,
  },
  paginaSubtitulo: {
    fontSize: 12,
    color: '#6B7280',
  },
  bannerAcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#D97706',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  bannerAcaoTexto: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#1C1105',
    marginRight: 10,
  },
  bannerAcaoFechar: {
    backgroundColor: '#D97706',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bannerAcaoFecharTexto: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  secaoLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.9,
    marginBottom: 8,
  },
  gridMetricas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardMetrica: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  cardMetricaTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  metricaRotulo: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6B7280',
    letterSpacing: 0.4,
    flex: 1,
    marginRight: 6,
  },
  iconeMiniLaranja: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeMiniTextoLaranja: {
    fontSize: 14,
    color: '#D97706',
  },
  iconeMiniVerde: {
    width: 30,
    height: 30,
    borderRadius: 9,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeMiniTextoVerde: {
    fontSize: 14,
    color: '#10B981',
  },
  metricaValor: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1105',
  },
  metricaDetalhe: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  blocoSecao: {
    marginBottom: 22,
  },
  secaoTitulo: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1105',
    marginBottom: 10,
  },
  secaoTituloSemMargem: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1105',
  },
  secaoCabecalhoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  secaoTituloGrupo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  acoesRapidasLinha: {
    flexDirection: 'row',
    gap: 8,
  },
  botaoAcaoPrincipal: {
    flex: 1,
    height: 68,
    backgroundColor: '#D97706',
    borderRadius: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoAcaoIconePrimario: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 3,
  },
  botaoAcaoTextoPrimario: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  botaoAcaoSecundario: {
    flex: 1,
    height: 68,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoAcaoIconeSecundario: {
    fontSize: 17,
    marginBottom: 3,
  },
  botaoAcaoTextoSecundario: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1C1105',
    textAlign: 'center',
  },
  badgeContadorVermelho: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  badgeContadorTexto: {
    fontSize: 10,
    fontWeight: '700',
    color: '#EF4444',
  },
  linkLaranja: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D97706',
  },
  filtrosScroll: {
    gap: 6,
    paddingBottom: 10,
  },
  filtroChip: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 11,
  },
  filtroChipAtivo: {
    backgroundColor: '#D97706',
    borderColor: '#D97706',
  },
  filtroChipTexto: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  filtroChipTextoAtivo: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  listaDiretaContainer: {
    gap: 8,
  },
  itemCardIndividual: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 14,
    padding: 13,
  },
  itemCardIndividualLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 14,
    padding: 13,
  },
  alertaCardTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  badgeVermelho: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
  },
  badgeTextoVermelho: {
    fontSize: 10,
    fontWeight: '700',
    color: '#EF4444',
  },
  badgeLaranja: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
  },
  badgeTextoLaranja: {
    fontSize: 10,
    fontWeight: '700',
    color: '#D97706',
  },
  badgeVerde: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 7,
  },
  badgeTextoVerde: {
    fontSize: 10,
    fontWeight: '700',
    color: '#10B981',
  },
  pontoNaoLido: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#D97706',
  },
  itemRecenteInfo: {
    flex: 1,
    paddingRight: 10,
  },
  itemTitulo: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1105',
  },
  itemSubtitulo: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  emptyStateCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  emptyStateTitulo: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1C1105',
  },
  emptyStateSubtitulo: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  botaoVerTodosCaes: {
    backgroundColor: '#FEF3C7',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  botaoVerTodosCaesTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B45309',
  },
});
