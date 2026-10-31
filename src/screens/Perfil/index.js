import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function PerfilScreen({ route, navigation }) {
  function obterNomeUsuario() {
    if (route && route.params && route.params.usuarioNome) {
      return route.params.usuarioNome;
    } else {
      return 'Criador';
    }
  }

  function obterEmailUsuario() {
    if (route && route.params && route.params.usuarioEmail) {
      return route.params.usuarioEmail;
    } else {
      return 'admin@canil.com';
    }
  }

  function voltarParaDashboard() {
    navigation.navigate('Dashboard');
  }

  function sairDaConta() {
    navigation.replace('Apresentacao');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={voltarParaDashboard}>
          <Text style={styles.botaoVoltarTexto}>← Voltar à Tela Principal</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.avatarGrande}>
            <Text style={styles.avatarGrandeTexto}>C</Text>
          </View>
          <Text style={styles.nomeTexto}>{obterNomeUsuario()}</Text>
          <Text style={styles.emailTexto}>{obterEmailUsuario()}</Text>

          <View style={styles.divisor} />

          <View style={styles.infoLinha}>
            <Text style={styles.infoLabel}>Plano atual</Text>
            <Text style={styles.infoValor}>CanilManager Cloud</Text>
          </View>

          <View style={styles.infoLinha}>
            <Text style={styles.infoLabel}>Status da conta</Text>
            <Text style={styles.infoValorAtivo}>Ativo</Text>
          </View>

          <TouchableOpacity style={styles.botaoSair} onPress={sairDaConta} activeOpacity={0.85}>
            <Text style={styles.botaoSairTexto}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 16,
  },
  botaoVoltarTexto: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D97706',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 28,
    padding: 28,
    alignItems: 'center',
  },
  avatarGrande: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#D97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarGrandeTexto: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },
  nomeTexto: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1105',
  },
  emailTexto: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#EFECE6',
    marginVertical: 20,
  },
  infoLinha: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
  },
  infoValor: {
    fontSize: 13,
    color: '#1C1105',
    fontWeight: '700',
  },
  infoValorAtivo: {
    fontSize: 13,
    color: '#10B981',
    fontWeight: '700',
  },
  botaoSair: {
    width: '100%',
    height: 48,
    backgroundColor: '#EF4444',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  botaoSairTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

