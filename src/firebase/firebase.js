import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/datastore';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyAq8fWhp6hLzoZLPUxzudWiBBGxKxefrog",
  authDomain: "design-music.firebaseapp.com",
  databaseURL: "https://design-music.firebaseio.com",
  projectId: "design-music",
  storageBucket: "design-music.appspot.com",
  messagingSenderId: "226779029276"
};
// export default firebase.initializeApp(config);
export default firebase.initializeApp(config);
