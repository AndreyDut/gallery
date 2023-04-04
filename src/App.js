import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, getDocs, query, where } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { db } from "./services/initFireBase";
import AppHeader from "./components/AppHeader/AppHeader";
import MainBox from "./pages/MainBox";
import AppFooter from './components/AppFooter/AppFooter';

function App() {

//   useEffect(() => {
// async function fetchData() {

//   // signIn("test@gallery.com", 123456)

//   const docRef1 = doc(db, "photos/favorites");


//   const setDoc1 = async  () => {
//     const docRef1 = doc(db, "photos/favorites");
//     // const docSnap3 = await setDoc(docRef1, {
//     //   array: [111]
//     // },{ merge: true });
//     const docSnap4 = await updateDoc(docRef1, {
//       array: arrayUnion({id:1, val:2,s:2})
//     });
//   }

//   setDoc1()

//   let docSnap1 = await getDoc(docRef1)
  

//   if (docSnap1.exists()) console.log(docSnap1.data())

//   const docRef = doc(db, "photos/all");
//   const docRefs = query(collection(db, "photos"), where("all", "array-contains", "id"));
//   //  let user =   await addDoc(collection(db, "users"), {
//   //         uid: "test0id1user",
//   //         email: `test0email1user`,
//   //       });

//   //   console.log(user)
//   const docSnap = await getDoc(docRef);
//   const querySnapshot = await getDocs(docRefs);

//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     console.log(JSON.parse(docSnap.data().photos));
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }
// fetchData();
//   }, [])


  return (
    <>
    <AppHeader/>
    <MainBox/>
    <AppFooter/>
    </>
  );
}

export default App;



