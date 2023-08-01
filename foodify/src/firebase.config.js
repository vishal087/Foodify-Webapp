import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
 import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDc0maVrTnNHQrUMAq7Ah4yhDWfpNA8TZ4",
    authDomain: "restaurantapp-bc24a.firebaseapp.com",
    databaseURL: "https://restaurantapp-bc24a-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bc24a",
    storageBucket: "restaurantapp-bc24a.appspot.com",
    messagingSenderId: "733935025758",
    appId: "1:733935025758:web:c2430dacb3278de563becf"
  };

  const app=getApps.length>0 ? getApp :initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage=getStorage(app);

  export {app,firestore,storage};