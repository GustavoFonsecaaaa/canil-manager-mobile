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

export default function ApresentacaoScreen({ navigation }) {
  const [abaAtiva, setAbaAtiva] = useState('recursos');

  function irParaLogin() {
    navigation.navigate('Login');
  }

  function irParaCadastro() {
    navigation.navigate('Cadastro');
  }

  function selecionarAba(aba) {
    setAbaAtiva(aba);
  }

  function obterEstiloBotaoAba(aba) {
    if (abaAtiva === aba) {
      return [styles.abaBotao, styles.abaBotaoAtivo];
    } else {
      return styles.abaBotao;
    }
  }

  function obterEstiloTextoAba(aba) {
    if (abaAtiva === aba) {
      return [styles.abaTexto, styles.abaTextoAtivo];
    } else {
      return styles.abaTexto;
    }
  }

  function renderizarConteudoAba() {
    if (abaAtiva === 'recursos') {
      return (
        <View style={styles.secaoCards}>
          <View style={styles.card}>
            <View style={styles.iconeBadgeLaranja}>
              <Text style={styles.iconeTextoLaranja}>♥</Text>
            </View>
            <Text style={styles.cardTitulo}>Cadastro de cachorros</Text>
            <Text style={styles.cardDescricao}>
              Ficha completa para cada cão: foto, raça, sexo e idade, com classificação automática de filhote ou adulto.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconeBadgeVerde}>
              <Text style={styles.iconeTextoVerde}>✚</Text>
            </View>
            <Text style={styles.cardTitulo}>Controle de vacinas</Text>
            <Text style={styles.cardDescricao}>
              Registre as vacinas e as próximas doses. Alertas avisam quando uma vacina está prestes a vencer ou já venceu.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconeBadgeLaranja}>
              <Text style={styles.iconeTextoLaranja}>◈</Text>
            </View>
            <Text style={styles.cardTitulo}>Estoque de ração</Text>
            <Text style={styles.cardDescricao}>
              Controle marca, tipo e quantidade de sacos. Receba aviso automático quando a ração estiver acabando.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconeBadgeLaranja}>
              <Text style={styles.iconeTextoLaranja}>★</Text>
            </View>
            <Text style={styles.cardTitulo}>Maternidade</Text>
            <Text style={styles.cardDescricao}>
              Questionário completo de ninhadas: data do parto, filhotes, machos e fêmeas, peso e tipo de parto.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconeBadgeVerde}>
              <Text style={styles.iconeTextoVerde}>◉</Text>
            </View>
            <Text style={styles.cardTitulo}>Ciclo reprodutivo</Text>
            <Text style={styles.cardDescricao}>
              Acompanhe o cio das fêmeas, cruzamentos e o período de amamentação, com aviso quando o cio está terminando.
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.iconeBadgeLaranja}>
              <Text style={styles.iconeTextoLaranja}>▲</Text>
            </View>
            <Text style={styles.cardTitulo}>Alertas inteligentes</Text>
            <Text style={styles.cardDescricao}>
              Notificações centralizadas para ração baixa, vacinas vencidas, cio acabando e muito mais, tudo em um só lugar.
            </Text>
          </View>
        </View>
      );
    } else if (abaAtiva === 'passos') {
      return (
        <View style={styles.secaoCards}>
          <View style={styles.passoCard}>
            <View style={styles.passoCabecalho}>
              <View style={styles.passoBadgeNumero}>
                <Text style={styles.passoBadgeTexto}>01</Text>
              </View>
              <Text style={styles.cardTitulo}>Cadastre seus cães</Text>
            </View>
            <Text style={styles.cardDescricao}>
              Crie a ficha de cada cão com foto, raça, sexo e data de nascimento. A idade é calculada automaticamente.
            </Text>
          </View>

          <View style={styles.passoCard}>
            <View style={styles.passoCabecalho}>
              <View style={styles.passoBadgeNumero}>
                <Text style={styles.passoBadgeTexto}>02</Text>
              </View>
              <Text style={styles.cardTitulo}>Acompanhe a saúde</Text>
            </View>
            <Text style={styles.cardDescricao}>
              Registre vacinas e controle o estoque de ração. O sistema avisa quando algo está prestes a vencer ou acabar.
            </Text>
          </View>

          <View style={styles.passoCard}>
            <View style={styles.passoCabecalho}>
              <View style={styles.passoBadgeNumero}>
                <Text style={styles.passoBadgeTexto}>03</Text>
              </View>
              <Text style={styles.cardTitulo}>Gerencie a reprodução</Text>
            </View>
            <Text style={styles.cardDescricao}>
              Acompanhe o cio, registre cruzamentos e ninhadas com todos os detalhes dos filhotes, em poucos cliques.
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.secaoCards}>
          <View style={styles.destaqueEstatistica}>
            <Text style={styles.estatisticaValor}>+40%</Text>
            <Text style={styles.estatisticaLegenda}>menos retrabalho no dia a dia do seu canil</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Alertas que cuidam de você</Text>
            <Text style={styles.cardDescricao}>
              Nunca mais perca uma vacina, ração ou cio. O sistema avisa no momento certo.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Visão geral do canil</Text>
            <Text style={styles.cardDescricao}>
              Tela principal com totais, próximas vacinas e alertas para acompanhar tudo de um relance.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Pronto para a nuvem</Text>
            <Text style={styles.cardDescricao}>
              Dados seguros e sincronizados, acessíveis de qualquer lugar. Estrutura preparada para a nuvem.
            </Text>
          </View>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcone}>
              <Text style={styles.logoIconeTexto}>♥</Text>
            </View>
            <Text style={styles.marcaTexto}>
              Canil<Text style={styles.marcaDestaque}>Manager</Text>
            </Text>
          </View>
        </View>

        <View style={styles.heroSection}>
          <View style={styles.pillBadge}>
            <View style={styles.pillDot} />
            <Text style={styles.pillTexto}>Gestão completa para criadores e cuidadores de cães</Text>
          </View>

          <Text style={styles.tituloPrincipal}>
            Canil<Text style={styles.tituloDestaque}>Manager</Text>
          </Text>

          <Text style={styles.headline}>
            Tudo o que o seu canil precisa{' '}
            <Text style={styles.headlineDestaque}>em um só lugar</Text>
          </Text>

          <Text style={styles.subtitulo}>
            Do cadastro dos cães ao controle de vacinas, ração, cio e ninhadas. O CanilManager organiza a rotina do seu canil com praticidade e cuidado, com alertas automáticos para você nunca perder nada.
          </Text>

          <View style={styles.botoesContainer}>
            <TouchableOpacity style={styles.botaoPrincipal} onPress={irParaLogin} activeOpacity={0.85}>
              <Text style={styles.botaoPrincipalTexto}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoSecundario} onPress={irParaCadastro} activeOpacity={0.85}>
              <Text style={styles.botaoSecundarioTexto}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divisorSecao}>
          <Text style={styles.secaoTag}>CONHEÇA A PLATAFORMA</Text>
          <Text style={styles.secaoTitulo}>Uma plataforma pensada para o dia a dia do canil</Text>
          <Text style={styles.secaoSubtitulo}>
            Tudo que um criador precisa para cuidar dos cães com organização, sem planilhas e sem perda de prazo.
          </Text>

          <View style={styles.abasContainer}>
            <TouchableOpacity
              style={obterEstiloBotaoAba('recursos')}
              onPress={() => selecionarAba('recursos')}
            >
              <Text style={obterEstiloTextoAba('recursos')}>Recursos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoAba('passos')}
              onPress={() => selecionarAba('passos')}
            >
              <Text style={obterEstiloTextoAba('passos')}>Como funciona</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={obterEstiloBotaoAba('plataforma')}
              onPress={() => selecionarAba('plataforma')}
            >
              <Text style={obterEstiloTextoAba('plataforma')}>Vantagens</Text>
            </TouchableOpacity>
          </View>

          {renderizarConteudoAba()}
        </View>

        <View style={styles.ctaFinalCard}>
          <Text style={styles.ctaFinalTitulo}>Pronto para organizar o seu canil?</Text>
          <Text style={styles.ctaFinalSubtitulo}>
            Crie sua conta grátis e descubra como é simples cuidar dos seus cães com tudo em um só lugar.
          </Text>
          <TouchableOpacity style={styles.botaoPrincipal} onPress={irParaCadastro} activeOpacity={0.85}>
            <Text style={styles.botaoPrincipalTexto}>Criar conta gratuita</Text>
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcone: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoIconeTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  marcaTexto: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1105',
  },
  marcaDestaque: {
    color: '#D97706',
  },
  heroSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#EFECE6',
    marginBottom: 32,
  },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 16,
  },
  pillDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D97706',
    marginRight: 8,
  },
  pillTexto: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3C240B',
  },
  tituloPrincipal: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1C1105',
    marginBottom: 8,
  },
  tituloDestaque: {
    color: '#D97706',
  },
  headline: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1105',
    lineHeight: 30,
    marginBottom: 12,
  },
  headlineDestaque: {
    color: '#D97706',
    fontStyle: 'italic',
  },
  subtitulo: {
    fontSize: 15,
    color: '#1C1105',
    opacity: 0.78,
    lineHeight: 23,
    marginBottom: 24,
  },
  botoesContainer: {
    gap: 12,
  },
  botaoPrincipal: {
    backgroundColor: '#D97706',
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoSecundario: {
    backgroundColor: 'transparent',
    height: 54,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSecundarioTexto: {
    color: '#D97706',
    fontSize: 16,
    fontWeight: '700',
  },
  divisorSecao: {
    marginBottom: 32,
  },
  secaoTag: {
    fontSize: 12,
    fontWeight: '800',
    color: '#D97706',
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  secaoTitulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1105',
    lineHeight: 32,
    marginBottom: 8,
  },
  secaoSubtitulo: {
    fontSize: 14,
    color: '#1C1105',
    opacity: 0.68,
    lineHeight: 21,
    marginBottom: 20,
  },
  abasContainer: {
    flexDirection: 'row',
    backgroundColor: '#EFECE6',
    borderRadius: 14,
    padding: 4,
    marginBottom: 20,
  },
  abaBotao: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  abaBotaoAtivo: {
    backgroundColor: '#FFFFFF',
  },
  abaTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3C240B',
  },
  abaTextoAtivo: {
    color: '#D97706',
    fontWeight: '800',
  },
  secaoCards: {
    gap: 14,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EFECE6',
  },
  iconeBadgeLaranja: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconeTextoLaranja: {
    color: '#D97706',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconeBadgeVerde: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconeTextoVerde: {
    color: '#10B981',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1105',
    marginBottom: 6,
  },
  cardDescricao: {
    fontSize: 14,
    color: '#1C1105',
    opacity: 0.68,
    lineHeight: 21,
  },
  passoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EFECE6',
  },
  passoCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passoBadgeNumero: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  passoBadgeTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  destaqueEstatistica: {
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#D97706',
    alignItems: 'center',
  },
  estatisticaValor: {
    fontSize: 34,
    fontWeight: '900',
    color: '#D97706',
  },
  estatisticaLegenda: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1105',
    marginTop: 4,
  },
  ctaFinalCard: {
    backgroundColor: '#1C1105',
    borderRadius: 24,
    padding: 24,
  },
  ctaFinalTitulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  ctaFinalSubtitulo: {
    fontSize: 14,
    color: '#EFECE6',
    lineHeight: 21,
    marginBottom: 20,
  },
});

