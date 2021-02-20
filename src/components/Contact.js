import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.section
            style={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <form className='contact'>
                <label>Full Name: </label>
                <input className='contact-text' type='text' placeholder='Johnny Dingus' />

                <label>Email: </label>
                <input className='contact-text' type='text' placeholder='Johnnydingus@mail.com' />

                <label>Message: </label>
                <textarea placeholder='Write message here...' />

                <input className='contact-btn' type='submit' />
            </form>
        </motion.section>
    )
}

export default Contact
