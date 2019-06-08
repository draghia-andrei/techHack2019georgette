// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'AAAAFK87M-I:APA91bGisdvlYCD79SN2z4KGZHqG7O6OXSESlPUFEuAa7tBvH_sQ2qdQCIoT3EaRtOuzUVWIAC6JnfCVcMbBlTAccPhJWDNF3GCHpaZzGZumrEJ4flsOuIO4KaTNSWLjLnMH7V8i83P2'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
