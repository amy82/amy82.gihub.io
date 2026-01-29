console.log("🔥 main.js loaded");  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  doc,
  updateDoc,
  where,
  getDocs,
  setDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdKhcwMd0A9OkXfasAc4hS10O1Ah8AwtU",
  authDomain: "github-b40c6.firebaseapp.com",
  projectId: "github-b40c6",
  storageBucket: "github-b40c6.firebasestorage.app",
  messagingSenderId: "416411713955",
  appId: "1:416411713955:web:6646eb2f37590eeebc5a16",
  measurementId: "G-BF7NT64VHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const q = query(
  collection(db, "users")
);

const snapshot = await getDocs(collection(db, "tact_logs"));

const tbody = document.getElementById("tactBody");
//console.log("snapshot size:", snapshot.size);
snapshot.forEach(doc => {
  const d = doc.data();
  console.log(doc.id, doc.data());
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${d.productId}</td>
    <td>${d.gripTime.toFixed(2)}</td>
    <td>${d.cylinderUpTime.toFixed(2)}</td>
    <td>${d.inspectTime.toFixed(2)}</td>
    <td><b>${d.totalTime.toFixed(2)}</b></td>
  `;
  tbody.appendChild(tr);
});

const btn = document.getElementById("btnGripPlus");

btn.addEventListener("click", async () => {
  console.log("btn click");
  try {
    const ref = doc(db, "tact_logs", "productA"); // 컬렉션 / 문서ID

    // await updateDoc(ref, {
    //   grip: increment(1)
    // });
  await setDoc(ref, {
      grip: increment(1)
    }, { merge: true });
    
    console.log("✅ grip +1 저장 완료");
  } catch (err) {
    console.error("❌ 저장 실패", err);
  }
});
















