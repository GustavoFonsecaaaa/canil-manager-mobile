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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [toastMensagem, setToastMensagem] = useState('');
  const [toastTipo, setToastTipo] = useState('erro');

  function alternarVisibilidadeSenha() {
    if (mostrarSenha === true) {
      setMostrarSenha(false);
    } else {
      setMostrarSenha(true);
    }
  }

  function alternarVisibilidadeConfirmarSenha() {
    if (mostrarConfirmarSenha === true) {
      setMostrarConfirmarSenha(false);
    } else {
      setMostrarConfirmarSenha(true);
    }
  }

  function obterSecureTextSenha() {
    if (mostrarSenha === true) {
      return false;
    } else {
      return true;
    }
  }

  function obterSecureTextConfirmarSenha() {
    if (mostrarConfirmarSenha === true) {
      return false;
    } else {
      return true;
    }
  }

  function obterIconeOlhoSenha() {
    if (mostrarSenha === true) {
      return '🙈';
    } else {
      return '👁';
    }
  }

  function obterIconeOlhoConfirmarSenha() {
    if (mostrarConfirmarSenha === true) {
      return '🙈';
    } else {
      return '👁';
    }
  }

  function exibirToast(mensagem, tipo) {
    setToastMensagem(mensagem);
    setToastTipo(tipo);
  }

  function handleCadastro() {
    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim();

    if (!nomeLimpo || !emailLimpo || !senha || !confirmarSenha) {
      exibirToast('Preencha todos os campos para criar a conta.', 'erro');
      return;
    }

    if (senha.length < 6) {
      exibirToast('A senha deve ter no mínimo 6 caracteres.', 'erro');
      return;
    }

    if (senha !== confirmarSenha) {
      exibirToast('As senhas não coincidem!', 'erro');
      return;
    }

    exibirToast('Conta criada com sucesso! Redirecionando para o login...', 'sucesso');
    setTimeout(function () {
      navigation.replace('Login');
    }, 1000);
  }

  function irParaLogin() {
    navigation.navigate('Login');
  }

  function voltarParaApresentacao() {
    navigation.navigate('Apresentacao');
  }

  function renderizarToast() {
    if (toastMensagem === '') {
      return null;
    } else {
      if (toastTipo === 'sucesso') {
        return (
          <View style={styles.toastSucesso}>
            <Text style={styles.toastTextoSucesso}>{toastMensagem}</Text>
          </View>
        );
      } else {
        return (
          <View style={styles.toastErro}>
            <Text style={styles.toastTextoErro}>{toastMensagem}</Text>
          </View>
        );
      }
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F5F0" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.containerCentral}>
          <TouchableOpacity
            style={styles.cabecalhoLogo}
            onPress={voltarParaApresentacao}
            activeOpacity={0.8}
          >
            <View style={styles.logoLinha}>
              <View style={styles.logoIcone}>
                <Text style={styles.logoIconeTexto}>♥</Text>
              </View>
              <Text style={styles.marcaTexto}>
                Canil<Text style={styles.marcaDestaque}>Manager</Text>
              </Text>
            </View>
            <Text style={styles.subtituloTopo}>
              Crie sua conta e comece a gerenciar seu canil
            </Text>
          </TouchableOpacity>

          {renderizarToast()}

          <View style={styles.caixaFormulario}>
            <View style={styles.campoGrupo}>
              <Text style={styles.label}>Nome do Canil/Criador</Text>
              <TextInput
                style={styles.input}
                placeholder="Seu nome ou nome do canil"
                placeholderTextColor="#9CA3AF"
                value={nome}
                onChangeText={setNome}
              />
            </View>

            <View style={styles.campoGrupo}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.campoGrupo}>
              <Text style={styles.label}>Senha</Text>
              <View style={styles.inputSenhaContainer}>
                <TextInput
                  style={styles.inputSenha}
                  placeholder="Mínimo 6 caracteres"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={obterSecureTextSenha()}
                  value={senha}
                  onChangeText={setSenha}
                />
                <TouchableOpacity
                  style={styles.botaoToggleSenha}
                  onPress={alternarVisibilidadeSenha}
                  activeOpacity={0.7}
                >
                  <Text style={styles.iconeOlhoTexto}>{obterIconeOlhoSenha()}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.campoGrupo}>
              <Text style={styles.label}>Confirmar Senha</Text>
              <View style={styles.inputSenhaContainer}>
                <TextInput
                  style={styles.inputSenha}
                  placeholder="Repita a senha"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={obterSecureTextConfirmarSenha()}
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                />
                <TouchableOpacity
                  style={styles.botaoToggleSenha}
                  onPress={alternarVisibilidadeConfirmarSenha}
                  activeOpacity={0.7}
                >
                  <Text style={styles.iconeOlhoTexto}>{obterIconeOlhoConfirmarSenha()}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.botaoCriarConta}
              onPress={handleCadastro}
              activeOpacity={0.9}
            >
              <Text style={styles.botaoCriarContaTexto}>Criar conta</Text>
            </TouchableOpacity>

            <View style={styles.rodapeFormulario}>
              <Text style={styles.rodapeTexto}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={irParaLogin} activeOpacity={0.7}>
                <Text style={styles.rodapeLink}>Faça login</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    justifyContent: 'center',
    padding: 24,
  },
  containerCentral: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    alignItems: 'center',
  },
  cabecalhoLogo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
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
    fontSize: 30,
    fontWeight: '800',
    color: '#1C1105',
  },
  marcaDestaque: {
    color: '#D97706',
  },
  subtituloTopo: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
  },
  toastSucesso: {
    width: '100%',
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  toastTextoSucesso: {
    color: '#065F46',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  toastErro: {
    width: '100%',
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  toastTextoErro: {
    color: '#991B1B',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  caixaFormulario: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 28,
    padding: 28,
  },
  campoGrupo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1105',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#FAF8F5',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1105',
  },
  inputSenhaContainer: {
    width: '100%',
    height: 48,
    backgroundColor: '#FAF8F5',
    borderWidth: 1,
    borderColor: '#EFECE6',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSenha: {
    flex: 1,
    height: '100%',
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1105',
  },
  botaoToggleSenha: {
    height: '100%',
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeOlhoTexto: {
    fontSize: 16,
    color: '#6B7280',
  },
  botaoCriarConta: {
    width: '100%',
    height: 50,
    backgroundColor: '#D97706',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  botaoCriarContaTexto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  rodapeFormulario: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
  },
  rodapeTexto: {
    fontSize: 13,
    color: '#6B7280',
  },
  rodapeLink: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D97706',
  },
});
