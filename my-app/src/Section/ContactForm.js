import React, {useState} from 'react'

function ContactForm ()  {
    const [contactForm, setContactForm ] = useState ({name:'', mail:'', comment:''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!values.name)
            errors.name='You must enter your name'

        if (!values.mail)
            errors.mail='You must enter your e-mail adress'
            else if (!regex_mail.test(values.mail))
                errors.mail='You must enter a valid e-mail adress (ex. name@domaim.com)'

        if (!values.comment)
            errors.comment='You must enter your comment'
        else if(values.comment.length < 5)
        errors.comment='Your comment must be longer'
       
        
        
        return errors;
    }

    const handleChange = (e) =>{
        const {id, value} = e.target
        setContactForm({...contactForm, [id]:value})
        setFailedSubmit(false)
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let name= contactForm.name
        let mail= contactForm.mail
        let comment = contactForm.comment
        setFormErrors(validate({name, mail, comment}))
        
        if (formErrors.name == null && formErrors.mail == null && formErrors.comment == null ){
            let json = JSON.stringify( {name, mail, comment})
            //console.log(json);
            const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:json
            })
            .then(res => {
                //consol.log(res.status)
                if (res.status == 200){
                    setSubmitted(true)
                    setFailedSubmit(false)
                    contactForm.name='' 
                    contactForm.mail='' 
                    contactForm.comment=''
                } 
                else {
                    setSubmitted(false)
                    setFailedSubmit(true)     
                }
            })
                        
        }
        else{
             
            setSubmitted(false)

            }
        }

         

  return (
    <section className='ContactForm'>
        <div className='container'>
            {
                submitted ? (
                    <div className="alert alert-success text-center" role="alert">
                        <h3>Thank you for your comments</h3> 
                        <p>We will contact you as soon as possible.</p>
                        </div>  ) : (<></>)
                    }
                    
                    {
                    failedSubmit ? (
                    <div className="alert alert-danger text-center" role="alert">
                        <h3>Something went wrong!</h3> 
                        <p>We couldn't submit your comments right now.</p>
                        </div>  ) : (<></>)
                    }   
                <h2>Come in Contact with Us </h2>
                <form id='cForm' onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id='name' className={(formErrors.name?'error':'')} type='text' placeholder='Your Name' value={contactForm.name} onChange={handleChange}/>
                        <div className='errorMessage'>{formErrors.name}</div>
                    </div>
                    <div>
                        <input id='mail' className={(formErrors.mail ? 'error' : '')} type='email' placeholder='Your mail' value={contactForm.mail} onChange={handleChange}/>
                        <div className='errorMessage'>{formErrors.mail}</div>
                    </div>
                    <div className='textArea'>
                        <textarea id='comment' className={(formErrors.comment ? 'error' : '')} style={(formErrors.comments ? {border: '1px solid #FF7373'}: {} )} placeholder='Comments' value={contactForm.comment} onChange={handleChange} />
                        <div className='errorMessage'>{formErrors.comment}</div>
                    </div>
                    <div>
                        <button className='send' type='submit'>Post Comments</button>
                        <div className='errorMessage'></div>
                    </div>
                </form> 
        </div>
    </section>
)}
                

export default ContactForm
