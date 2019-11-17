import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB6MTenS6f5XDRGyqC6Z_bBnEJhkO60XzU",
  authDomain: "todoist-clone-1c481.firebaseapp.com",
  databaseURL: "https://todoist-clone-1c481.firebaseio.com",
  projectId: "todoist-clone-1c481",
  storageBucket: "todoist-clone-1c481.appspot.com",
  messagingSenderId: "184211482771",
  appId: "1:184211482771:web:b5cf1a178c656aa9a78566"
});

export { firebaseConfig as firebase };
