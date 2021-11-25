import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialzeAuthentization = () => {
    initializeApp(firebaseConfig);
}
export default initialzeAuthentization;