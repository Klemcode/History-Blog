
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcudItAwVIumhNwU9wgbBqXpC45fGgp8w",
    authDomain: "klemcode.firebaseapp.com",
    projectId: "klemcode",
    storageBucket: "klemcode.firebasestorage.app",
    messagingSenderId: "59149627541",
    appId: "1:59149627541:web:2e30ff389ac4b50be02b9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const colRef = collection(db, "klemblog");

const blogArr = [];

async function getAllBlogs() {
    try {

        const blogs = await getDocs(colRef)


        blogs.forEach((element) => {

            const data = { id: element.id, ...element.data() }
            blogArr.push(data)

        });


        function displayAllBlogs() {
            let display = document.getElementById("display");


            blogArr.forEach((blog) => {
                display.innerHTML += `
    <div style="border: 1px solid green; width:500px; padding=25px; margin: 10px; border-radius:4%">

    <img src="${blog.image}" Alt="" style="width:495px; border-radius:5%; height:400px">
     <h3 style="padding=10px; margin: 6px">Author: ${blog.author}</h3>
    <h1 style="padding=10px; margin: 6px font-size:20px"><a href="./singleblog.html?id=${blog.id}"> ${blog.title}</a></h1>
    <p style="padding=10px; margin: 6px">${blog.content.slice(0, 100)}...</p>
    <p>Readers: ${blog.likes}</p>
    <p style="padding=10px; margin: 6px">${blog.isPublished ? "Published" : "Not Yet Published"}</p>
  
    
    </div>
 `

            })
        }
        displayAllBlogs()


    } catch (error) {
        console.log(error);


    }


}

getAllBlogs();

