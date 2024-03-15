import FB from '../Images/fb.png'
import X from '../Images/x.png'
import IT from '../Images/Insta.png'
import GH from '../Images/github.png'
export default function Footer(){
    return (
        <footer className="footer--main">
            <img src={X}  alt='' />
            <img src={FB}  alt='' />
            <img src={IT}  alt='' />
            <img src={GH}  alt='' />
        </footer>
    );
}