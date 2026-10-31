import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nomeCanil, setNomeCanil] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemStatus, setMensagemStatus] = useState('');

  function handleSimularCadastro() {
    if (!nomeCanil || !email || !senha) {
      setMensagemStatus('Preencha todos os campos para testar o registo.');
    } else {
      setMensagemStatus('Clique validado com sucesso! Ecrã provisório de Cadastro.');
    }
  }

  function voltarParaApresentacao() {
    navigation.navigate('Apresentacao');
  }

  function irParaLogin() {
    navigation.navigate('Login');
  }

  function renderizarMensagemStatus() {
    if (mensagemStatus !== '') {
      return (
        <View style={styles.alertaBox}>
          <Text style={styles.alertaTexto}>{mensagemStatus}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.botaoVoltar} onPress={voltarParaApresentacao}>
          <Text style={styles.botaoVoltarTexto}>← Voltar ao início</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.marca}>
            Canil<Text style={styles.marcaDestaque}>Manager</Text>
          </Text>
          <Text style={styles.titulo}>Criar conta gratuita</Text>
          <Text style={styles.subtitulo}>
            Comece em poucos minutos e organize toda a rotina do seu canil em um só lugar.
          </Text>

          {renderizarMensagemStatus()}

          <Text style={styles.label}>Nome do Canil ou Criador</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Canil Golden Star"
            placeholderTextColor="#8C7A6B"
            value={nomeCanil}
            onChangeText={setNomeCanil}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#8C7A6B"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#8C7A6B"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.botaoPrincipal} onPress={handleSimularCadastro} activeOpacity={0.85}>
            <Text style={styles.botaoPrincipalTexto}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoSecundario} onPress={irParaLogin} activeOpacity={0.85}>
            <Text style={styles.botaoSecundarioTexto}>Já tem uma conta? Entrar</Text>
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'center',
  },
  botaoVoltar: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginBottom: 16,
  },
  botaoVoltarTexto: {
    fontSize: 15,
    fontWeight: '700',
    color: '#D97706',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: '#EFECE6',
  },
  marca: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1105',
    marginBottom: 8,
  },
  marcaDestaque: {
    color: '#D97706',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1C1105',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: '#1C1105',
    opacity: 0.7,
    lineHeight: 20,
    marginBottom: 20,
  },
  alertaBox: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D97706',
  },
  alertaTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1C1105',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1105',
    marginBottom: 6,
  },
  input: {
    height: 50,
    backgroundColor: '#F8F5F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EFECE6',
    fontSize: 15,
    color: '#1C1105',
  },
  botaoPrincipal: {
    backgroundColor: '#D97706',
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  botaoPrincipalTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  botaoSecundario: {
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSecundarioTexto: {
    color: '#D97706',
    fontSize: 14,
    fontWeight: '700',
  },
});

