import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAtbdRD0rb-6QGEEEwA3ubU_evZ_kTOv_k",
  authDomain: "disney-clone-yt-b6912.firebaseapp.com",
  projectId: "disney-clone-yt-b6912",
  storageBucket: "disney-clone-yt-b6912.appspot.com",
  messagingSenderId: "753156715134",
  appId: "1:753156715134:web:629cc50d176937a4589e2f"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
