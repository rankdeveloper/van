import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

console.log("Vans collection ref : ");
console.log(vansCollectionRef);

// export async function getVans() {
//   const snapshot = await getDocs(vansCollectionRef);
//   const vans = snapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id
//   }));
//   console.log(vans);
//   return vans;
// }

export async function getVans() {
  try {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log("Firebase returned:", vans);
    if (vans.length === 0) {
      console.log("No documents found, using fallback data");
      return [
        {
          id: "1",
          name: "Modest Explorer",
          price: 60,
          description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
          imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
          type: "simple",
          hostId: "123",
        },
        {
          id: "2",
          name: "Modest Explorer",
          price: 80,
          description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
          imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
          type: "luxury",
          hostId: "123",
        },
      ];
    }
    return vans;
  } catch (error) {
    console.error("Firebase error:", error);
    return [
      {
        id: "1",
        name: "Modest Explorer",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "simple",
        hostId: "123",
      },
      {
        id: "2",
        name: "Modest Explorer",
        price: 80,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature.",
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
        type: "luxury",
        hostId: "123",
      },
    ];
  }
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error({
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    });
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) });
  const data = await res.json();

  if (!res.ok) {
    throw new Error({
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    });
  }

  return data;
}
