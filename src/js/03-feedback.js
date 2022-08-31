const Key = "feedback-form-state"
import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form')

getValue()
formRef.addEventListener('input',throttle((event)=>{
    const emeil = formRef.email.value
    const message = formRef.message.value
    localStorage.setItem(Key,JSON.stringify({emeil,message}))
},500))

function getValue(){
    const serializedState = localStorage.getItem(Key)
    if(serializedState){
        formRef.message.value = JSON.parse(serializedState).message
        formRef.email.value = JSON.parse(serializedState).emeil
    }
}

formRef.addEventListener('submit',(event)=>{
    event.preventDefault()
    event.currentTarget.reset()
    localStorage.removeItem(Key)
},)
