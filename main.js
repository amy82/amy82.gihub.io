// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
  const analytics = getAnalytics(app);

// 📌 tact_logs 최근 10개 불러오기
const q = query(
  collection(db, "tact_logs"),
  orderBy("createdAt", "desc"),
  limit(10)
);

const snapshot = await getDocs(q);
const tbody = document.getElementById("tactBody");

snapshot.forEach(doc => {
  const d = doc.data();

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
