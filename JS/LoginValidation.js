import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './FirebaseAuth.js'
import { showToast } from './Toastify.js'

signInForm.addEventListener('submit', e => {
    e.preventDefault()

    const email = signInForm['email'].value;
    const password = signInForm['password'].value;

    try{
        const credentials = signInWithEmailAndPassword(auth, email, password)
    } catch(error){
        console.log(error)
    }

})