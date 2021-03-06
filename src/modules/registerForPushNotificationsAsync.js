import { Permissions, Notifications } from 'expo';

// const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send';

export default async function registerPushToken() {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') return;
  try {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log('pushToken 확인', pushToken);
    return pushToken;
  } catch (error) {
    return '';
  }
  // Get the token that uniquely identifies this device
}

// export const pushNotification = async () => {
//   const token = await Notifications.getExpoPushTokenAsync();
//   console.log(token);

//   // POST the token to your backend server
//   // from where you can retrieve it to send push notifications.
//   return fetch(PUSH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       to: token,
//       title: 'Flint',
//       body: '확인 요청이 왔어요',
//       sound: 'default',
//     }),
//   });
// };

// export default registerForPushNotificationsAsync;
