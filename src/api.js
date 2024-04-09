// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , collection , getDocs} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB664ZsWFdK6Iauo9p2K0KrgKuc3ZUWv8k",
  authDomain: "vanlife-6e1e0.firebaseapp.com",
  projectId: "vanlife-6e1e0",
  storageBucket: "vanlife-6e1e0.appspot.com",
  messagingSenderId: "401483711905",
  appId: "1:401483711905:web:c96a69c390d971a1dbb7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const vansCollectionRef = collection(db,"vans")

console.log("Vans collection ref : ")
console.log(vansCollectionRef)

// export async function getVans(){
//     const res = await fetch("/api/vans")
//     if(!res.ok){
//         throw{
//             message:"Failed to fetch data...",
//             statusText : res.statusText,
//             status:res.status
//         }
//     }
//     const data = await res.json()

//     return data.vans
// }

export async function getVans(){
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => {
        console.log("doc id : " , doc.id)
    })
    console.log(vans)
    return vans.data;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}