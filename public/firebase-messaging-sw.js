/* eslint-disable no-undef */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/10.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.3/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line no-undef
firebase.initializeApp({
  apiKey: 'AIzaSyBYfuQRusLohljFeH5UV6CX6wjNgcrjiEE',
  authDomain: 'blooming-6a3d8.firebaseapp.com',
  projectId: 'blooming-6a3d8',
  storageBucket: 'blooming-6a3d8.appspot.com',
  messagingSenderId: '110967054974',
  appId: '1:110967054974:web:39732e5ff4e5ed5ac56e2f',
  measurementId: 'G-Q9P8BP5WPB',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: './favicon-96x96.png',
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
