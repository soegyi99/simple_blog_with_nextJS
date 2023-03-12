import classes from './contact-form.module.css'
import { useEffect, useState } from 'react'
import Notification from '../ui/notification'

function ContactForm () {

  async function sendReqMessage (Body) {
    const res = await fetch('/api/contact',{
      method : 'POST',
      body: JSON.stringify(Body),
       headers : {
        'Content-Type' : 'application/json'
       }
      
    })

    const data = res.json();

    // if(!res.ok) {
    //   throw new Error('something went wrong.')
    // }
    
  }

  const [enteredEmail,setEnteredEmail] = useState('')
  const [enteredMessage,setEnteredMessage] = useState('')
  const [enteredName,setEnteredName] = useState('')
  const [reqStatus,setReqStatus] = useState()


  async function sendMessage (e) {
    e.preventDefault()

    setReqStatus('pending')
   try{
    sendReqMessage({
      
      email: enteredEmail,
      name : enteredName,
      message : enteredMessage
     
  })
  setEnteredEmail('')
  setEnteredMessage('')
  setEnteredName('')
  setReqStatus('success')

   }catch(err) {
      setReqStatus('error')
   }

 
    
  }

  let notification;

  if(reqStatus==='pending'){
    notification = {
      status : 'pending',
      title : 'Sending Message...',
      message : 'Your message is sending.'
    }
  }

  if(reqStatus==='success') {
    notification = {
      status : 'success',
      title : 'Mesasage successfully sent.',
      message : 'Your message is sent'
    }
  }

  if(reqStatus==='error') {
    notification = {
      status : 'error',
      title : "Message wasn't sent",
      message : 'something went wrong'
    }
  }


  useEffect(() => {
    if(reqStatus ==='success' || reqStatus === 'error') {
      const timer = setTimeout(() => {
        setReqStatus(null)
      },2000)

      return () => clearTimeout(timer)
    }
  },[reqStatus])

return(
    <div className={classes.conatct} >
        <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
)
}

export default ContactForm