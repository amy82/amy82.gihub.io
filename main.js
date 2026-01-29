console.log("🔥 main.js loaded");  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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








