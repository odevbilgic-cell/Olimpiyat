importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDcYNF0hMow-y1MuV3GXLG9vY_MK0tJTGs", // Senin API Key'in
  projectId: "olimpiyatkokorecmenu",
  messagingSenderId: "987017604417",
  appId: "1:987017604417:web:b6c4858712dc66d14745c0"
});

const messaging = firebase.messaging();

// Arka planda mesaj geldiğinde ne yapılacağı
messaging.onBackgroundMessage((payload) => {
  console.log('Arka plan mesajı alındı: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logom.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
