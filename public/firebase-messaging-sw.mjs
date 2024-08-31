import {getMessaging, onBackgroundMessage} from 'firebase/messaging/sw';
import {initializeApp} from 'firebase/app';

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyBYfuQRusLohljFeH5UV6CX6wjNgcrjiEE',
  authDomain: 'blooming-6a3d8.firebaseapp.com',
  projectId: 'blooming-6a3d8',
  storageBucket: 'blooming-6a3d8.appspot.com',
  messagingSenderId: '110967054974',
  appId: '1:110967054974:web:39732e5ff4e5ed5ac56e2f',
  measurementId: 'G-Q9P8BP5WPB',
});

const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.mjs] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon-96x96.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
