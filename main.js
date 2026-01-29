console.log("🔥 main.js loaded");  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// 📌 tact_logs 최근 10개 불러오기
const q = query(
  collection(db, "tact_logs"),
  orderBy("createdAt", "desc"),
  limit(10)
);

const snapshot = await getDocs(q);
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




