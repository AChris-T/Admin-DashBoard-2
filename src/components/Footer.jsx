import "./footer.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="about">
            <span>© 2022, made with <FavoriteIcon className="footerIcon"/> by <a href="/">Fela Dev</a>for a better web.</span>
        </div>
        <div className="aboutlist">
            <ul>
                <li>About me</li>
                <li>Contact US</li>
                <li>License</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
