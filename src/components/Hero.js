import heroImage from '../images/rick.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            style={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
        >
            <section className='hero'>
                <img src={heroImage} alt="Rock Band" />
            </section>
        </motion.section>
    )
}

export default Hero
