// app/index.tsx
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
      <View style={s.container}>
        <Text style={s.title}>¡Bienvenido! 👋</Text>
        <Text style={s.subtitle}>Tu app GPS con Expo</Text>

        {/* Si quieres que NO se pueda volver a la bienvenida, usa replace */}
        <Pressable onPress={() => router.replace('/(tabs)/explore')} style={s.button}>
          <Text style={s.buttonText}>Entrar</Text>
        </Pressable>

        {/* Si prefieres que sí se pueda regresar, cambia a:
         onPress={() => router.push('/(tabs)/chat')} */}
      </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 6 },
  subtitle: { fontSize: 16, opacity: 0.75, marginBottom: 24 },
  button: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12, backgroundColor: '#0A84FF' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
