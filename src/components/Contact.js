const Contact = () => {
    return (
        <form className='contact'>
            <label>Full Name: </label>
            <input className='contact-text' type='text' placeholder='Johnny Dingus'/>

            <label>Email: </label>
            <input className='contact-text' type='text' placeholder='Johnnydingus@mail.com'/>

            <label>Message: </label>
            <textarea placeholder='Write message here...'/>

            <input className='contact-btn' type='submit'/>
        </form>
    )
}

export default Contact
