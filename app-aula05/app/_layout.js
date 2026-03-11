import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
       
        tabBarActiveTintColor: '#3949AB', 
       
        tabBarInactiveTintColor: '#9E9E9E', 
        
        
        tabBarStyle: {
          backgroundColor: '#040618', 
          borderTopColor: '#1A237E',  
          height: 60,                
          paddingBottom: 8,
        },
        
        headerStyle: {
          backgroundColor: '#000000', 
        },
        headerTintColor: '#FFFFFF',   
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}