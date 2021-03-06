import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileNavigation = ({ toggleNav }) => {
    return (
        <motion.div className='mobile-navigation' animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: .2 }}>
            <span className='close-btn' onClick={toggleNav}>&times;</span>
            <div className="mobile-navigation-content">
                <NavLink to="/about" onClick={toggleNav}>About</NavLink>
                <NavLink to="/works" onClick={toggleNav}>Works</NavLink>
                <NavLink to="/contact" onClick={toggleNav}>Contact</NavLink>
                <div className='mobile-navigation-icons'>
                    <NavLink to='/'>
                        <svg className='mobile-nav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z" /><path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z" /><circle cx="393.6" cy="118.4" r="17.056" /></svg>
                    </NavLink>
                    <NavLink to='/'>
                        <svg className='mobile-nav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.848 0 0 114.848 0 256s114.848 256 256 256 256-114.848 256-256S397.152 0 256 0zm117.44 369.536c-3.136 4.448-8.064 6.816-13.088 6.816-3.2 0-6.4-.928-9.184-2.912-60-42.176-159.808-44.512-227.2-28.8-8.544 2.016-17.216-3.36-19.2-11.968-1.984-8.608 3.328-17.216 11.968-19.232 74.08-17.152 184.8-14.016 252.8 33.824 7.232 5.088 8.96 15.04 3.904 22.272zm31.232-62.432a15.975 15.975 0 01-12.992 6.656 15.85 15.85 0 01-9.344-3.008c-69.6-49.952-155.104-62.368-269.216-39.072-8.608 1.696-17.12-3.808-18.88-12.48-1.792-8.64 3.808-17.12 12.448-18.88 123.424-25.184 216.928-11.104 294.304 44.416 7.168 5.184 8.832 15.168 3.68 22.368zm31.552-83.84c-3.104 4.576-8.16 7.008-13.248 7.008-3.104 0-6.24-.896-8.992-2.752-88.224-59.872-222.336-60.16-309.152-29.44-8.32 2.88-17.472-1.44-20.416-9.792-2.944-8.32 1.408-17.472 9.76-20.416C188.608 134.496 334.944 135.2 432 201.024c7.296 4.96 9.152 14.912 4.224 22.24z" /></svg>
                    </NavLink>
                    <NavLink to='/'>
                        <svg className='mobile-nav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h192V336h-64v-80h64v-64c0-53.024 42.976-96 96-96h64v80h-32c-17.664 0-32-1.664-32 16v64h80l-32 80h-48v176h96c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" /></svg>
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}

export default MobileNavigation
