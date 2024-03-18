import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import do expo notifications
import * as Notifications from 'expo-notifications'

//solicitar as permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();

//Definir como as notificações devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, //deverá exibir o alert quando a notificação for recebida
    shouldPlaySound: true, //reproduz ou não som ao receber a mensagem
    shouldSetBadge: false, //configura número de notificações no ícone do app
  }),
})

export default function App() {

  async function handleCallNotifications() {
    const {status: existingStatus} = await Notifications.getPermissionsAsync(); //obter o status da permissão
    let finalStatus = existingStatus;

    //   return;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    //obter o token de envio de notificação
    // const token = await Notifications.getExpoPushTokenAsync();

    // console.log('====================================');
    // console.log(token);
    // console.log('====================================');

    //agendar uma notificação para ser exibida após 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello World!",
        subtitle:"you got it!",
        body: "Create a push notification for a POC project!",
        data: { data: 'goes here' }
      },
      trigger: null
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={.8}
        onPress={() => handleCallNotifications()}
      >
        <Text style={styles.text}>
          {/* title: {notification && notification} */}
          click me!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#496BBA",
    padding: 20,
    borderRadius: 8,
    width: 190
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  }
});
