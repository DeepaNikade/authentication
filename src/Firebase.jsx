import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyCgSi26UxFAlRJCR_txu73z7AVUSrYLGNg",
    authDomain: "reduxapp-6b60f.firebaseapp.com",
    projectId: "reduxapp-6b60f",
    storageBucket: "reduxapp-6b60f.appspot.com",
    messagingSenderId: "190376603984",
    appId: "1:190376603984:web:40b70e91688cc237367c55",
    measurementId: "G-LKG9GERXXC"
}
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;