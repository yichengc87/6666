// z.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// ----------------- doodle 背景 -----------------
const doodle = document.querySelector('css-doodle');
document.addEventListener('click', function(e) {
  doodle.update();
});

// ----------------- 按鈕跳轉 -----------------
const btn1 = document.getElementById("btn1");
if (btn1) {
    btn1.onclick = function(){
        location.href = "page1.html";
    };
}

// ----------------- Firebase 初始化 -----------------
const firebaseConfig = {
  apiKey: "AIzaSyBoNtm2jGaQWwBjNtvIhSN5jDTfHjE7UAE",
  authDomain: "zynvrae-54c71.firebaseapp.com",
  projectId: "zynvrae-54c71",
  storageBucket: "zynvrae-54c71.firebasestorage.app",
  messagingSenderId: "433437269146",
  appId: "1:433437269146:web:720ac5c5c3c8c5d1001323",
  measurementId: "G-8X4M6VMBDK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ----------------- 表單送出 -----------------
const form = document.getElementById("myform");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = form.email.value;
        const ig = form.ig.value;

        try {
            await addDoc(collection(db, "contacts"), {
                email,
                ig,
                timestamp: serverTimestamp()
            });
            alert("資料送出成功！");
            form.reset(); // 清空輸入框
        } catch (err) {
            alert("送出失敗：" + err);
        }
    });
}

