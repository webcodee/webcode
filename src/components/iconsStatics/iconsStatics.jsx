import iconCall from '../../images/call.svg'
import iconIG from '../../images/ig.svg'
import iconEmail from '../../images/email.svg'
import './iconsStatics.css'
import { Link } from 'react-router-dom'
const IconsStatics = () =>{
    return(
        <div className="containerIconsStatics">
            <div className='iconsStatics'>
            <Link to="tel:+584244981397"><div className='containerIcon'><img src={iconCall}  alt=""className='imgIconStatic' /></div></Link>
            <Link to="https://www.instagram.com/webcode.ve/" target="_blank"><div className='containerIcon'><img src={iconIG}  alt=""className='imgIconStatic' /></div></Link>
            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQzCVMpBnQjPKqxQwXsSRjzLzWgBKkJQTKCpsbLwqTQVvSZNnWjftGnnklwtrBCKqHVWg" target="_blank"><div className='containerIcon'><img src={iconEmail}  alt=""className='imgIconStatic' /></div></Link>
            </div>
        </div>
    )
}
export default IconsStatics