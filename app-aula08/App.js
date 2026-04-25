import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Modal, StyleSheet, KeyboardAvoidingView,
  Platform, ScrollView, StatusBar,
} from 'react-native';

export default function App() {
  const [usuario, setUsuario]           = useState('');
  const [email, setEmail]               = useState('');
  const [senha, setSenha]               = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmarVisivel, setConfirmarVisivel] = useState(false);
  const [erros, setErros]               = useState({});
  const [focado, setFocado]             = useState(null);
  const [modalVisivel, setModalVisivel] = useState(false);

  // — validação em tempo real para mudar cor do botão —
  const dadosValidos =
    usuario.trim().length >= 3 &&
    email.includes('@') &&
    senha.length >= 6 &&
    confirmarSenha === senha;

  const validar = () => {
    const e = {};
    if (usuario.trim().length < 3)
      e.usuario = '! mínimo 3 caracteres';
    if (!email.includes('@'))
      e.email = '! e-mail inválido';
    if (senha.length < 6)
      e.senha = '! mínimo 6 caracteres';
    if (confirmarSenha !== senha)
      e.confirmarSenha = '! as senhas não coincidem';
    setErros(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (validar()) {
      setModalVisivel(true);
    }
  };

  const campo = (label, value, onChange, opts = {}) => {
    const key = opts.key || label.toLowerCase();
    const isFocado = focado === key;
    const temErro = !!erros[key];
    return (
      <View style={styles.campoWrapper}>
        <Text style={styles.label}>{label.toUpperCase()}</Text>
        <View style={[
          styles.inputWrapper,
          isFocado && styles.inputWrapperFocado,
          temErro && styles.inputWrapperErro,
        ]}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={opts.placeholder || ''}
            placeholderTextColor="#555"
            keyboardType={opts.keyboardType || 'default'}
            autoCapitalize={opts.autoCapitalize || 'none'}
            secureTextEntry={opts.secure || false}
            onFocus={() => setFocado(key)}
            onBlur={() => setFocado(null)}
          />
          {opts.toggle && (
            <TouchableOpacity onPress={opts.toggle} style={styles.olhoBtn}>
              <Text style={styles.olho}>{opts.visivel ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          )}
        </View>
        {temErro && (
          <Text style={styles.erro}>{erros[key]}</Text>
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* cabeçalho */}
        <View style={styles.header}>
          <View style={styles.headerAccent} />
          <Text style={styles.titulo}>ENTRAR</Text>
          
        </View>

        {/* formulário */}
        <View style={styles.form}>

          {campo('Nome de usuário', usuario, setUsuario, {
            key: 'usuario',
            placeholder: 'seu_usuario',
          })}

          {campo('E-mail', email, setEmail, {
            key: 'email',
            placeholder: 'voce@email.com',
            keyboardType: 'email-address',
          })}

          {campo('Senha', senha, setSenha, {
            key: 'senha',
            placeholder: '••••••••',
            secure: !senhaVisivel,
            toggle: () => setSenhaVisivel(v => !v),
            visivel: senhaVisivel,
          })}

          {campo('Confirmar senha', confirmarSenha, setConfirmarSenha, {
            key: 'confirmarSenha',
            placeholder: '••••••••',
            secure: !confirmarVisivel,
            toggle: () => setConfirmarVisivel(v => !v),
            visivel: confirmarVisivel,
          })}

          <TouchableOpacity
            style={[styles.botao, dadosValidos && styles.botaoValido]}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={[styles.botaoTexto, dadosValidos && styles.botaoTextoValido]}>
              {dadosValidos ? '▶ TUDO CERTO — ENTRAR' : 'ENTRAR'}
            </Text>
          </TouchableOpacity>

          {dadosValidos && (
            <Text style={styles.hint}>✓ dados válidos</Text>
          )}
        </View>

        <Text style={styles.rodape}>_acesso restrito_</Text>
      </ScrollView>

      {/* Modal brutalista de boas-vindas */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {/* faixa de destaque */}
            <View style={styles.modalFaixa}>
              <Text style={styles.modalFaixaTexto}>ACESSO LIBERADO</Text>
            </View>

            <View style={styles.modalCorpo}>
              <Text style={styles.modalIcone}>▓▓▓</Text>
              <Text style={styles.modalTitulo}>BEM-VINDO,</Text>
              <Text style={styles.modalUsuario}>{usuario.toUpperCase()}</Text>
              <Text style={styles.modalEmail}>{email}</Text>

              <View style={styles.modalDivisor} />

              <Text style={styles.modalStatus}>
                ● STATUS: AUTENTICADO
              </Text>

              <TouchableOpacity
                style={styles.modalBotao}
                onPress={() => setModalVisivel(false)}
              >
                <Text style={styles.modalBotaoTexto}>— FECHAR —</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
}

const PRETO    = '#0D0D0D';
const BRANCO   = '#F0EDE6';
const AMARELO  = '#F5E642';
const VERDE    = '#39FF14';
const VERMELHO = '#FF2D2D';
const CINZA    = '#1A1A1A';
const BORDA    = 3;

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: PRETO,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  // — header —
  header: {
    marginBottom: 40,
  },
  headerAccent: {
    width: 48,
    height: 6,
    backgroundColor: AMARELO,
    marginBottom: 14,
  },
  titulo: {
    fontSize: 52,
    fontWeight: '900',
    color: BRANCO,
    letterSpacing: 10,
    lineHeight: 52,
  },
 
  // — form —
  form: {
    gap: 4,
  },
  campoWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 10,
    fontWeight: '900',
    color: '#666',
    letterSpacing: 4,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: BORDA,
    borderColor: '#2A2A2A',
    backgroundColor: CINZA,
  },
  inputWrapperFocado: {
    borderColor: AMARELO,
  },
  inputWrapperErro: {
    borderColor: VERMELHO,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 15,
    color: BRANCO,
    fontWeight: '600',
    letterSpacing: 1,
  },
  olhoBtn: {
    paddingHorizontal: 14,
  },
  olho: {
    fontSize: 18,
  },
  erro: {
    fontSize: 11,
    fontWeight: '900',
    color: VERMELHO,
    letterSpacing: 2,
    marginTop: 5,
    textTransform: 'uppercase',
  },

  // — botão —
  botao: {
    borderWidth: BORDA,
    borderColor: BRANCO,
    backgroundColor: 'transparent',
    padding: 18,
    alignItems: 'center',
    marginTop: 12,
    // sombra offset brutalista
    shadowColor: BRANCO,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },
  botaoValido: {
    borderColor: VERDE,
    backgroundColor: VERDE,
    shadowColor: VERDE,
  },
  botaoTexto: {
    fontSize: 14,
    fontWeight: '900',
    color: BRANCO,
    letterSpacing: 4,
  },
  botaoTextoValido: {
    color: PRETO,
  },
  hint: {
    textAlign: 'center',
    color: VERDE,
    fontSize: 11,
    letterSpacing: 3,
    marginTop: 10,
    fontWeight: '700',
  },

  // — rodapé —
  rodape: {
    textAlign: 'center',
    color: '#2A2A2A',
    fontSize: 11,
    letterSpacing: 4,
    marginTop: 48,
  },

  // — modal —
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalBox: {
    width: '100%',
    borderWidth: BORDA,
    borderColor: VERDE,
    backgroundColor: PRETO,
    shadowColor: VERDE,
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  modalFaixa: {
    backgroundColor: VERDE,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  modalFaixaTexto: {
    fontSize: 11,
    fontWeight: '900',
    color: PRETO,
    letterSpacing: 6,
  },
  modalCorpo: {
    padding: 28,
    alignItems: 'flex-start',
    gap: 6,
  },
  modalIcone: {
    fontSize: 20,
    color: VERDE,
    letterSpacing: 4,
    marginBottom: 8,
  },
  modalTitulo: {
    fontSize: 13,
    fontWeight: '900',
    color: '#555',
    letterSpacing: 6,
  },
  modalUsuario: {
    fontSize: 36,
    fontWeight: '900',
    color: BRANCO,
    letterSpacing: 4,
    lineHeight: 38,
  },
  modalEmail: {
    fontSize: 13,
    color: '#555',
    letterSpacing: 2,
    marginTop: 4,
  },
  modalDivisor: {
    width: '100%',
    height: 3,
    backgroundColor: '#1E1E1E',
    marginVertical: 16,
  },
  modalStatus: {
    fontSize: 12,
    fontWeight: '900',
    color: VERDE,
    letterSpacing: 3,
    marginBottom: 20,
  },
  modalBotao: {
    width: '100%',
    borderWidth: BORDA,
    borderColor: BRANCO,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalBotaoTexto: {
    fontSize: 13,
    fontWeight: '900',
    color: BRANCO,
    letterSpacing: 6,
  },
});