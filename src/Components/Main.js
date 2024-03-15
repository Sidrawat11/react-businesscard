import mailIco from '../Images/mail.png';
import linkIco from '../Images/linkedin.png';

export default function Main(){
    return (
        <main className="main--container">            
            <section className="container--info">
                <h3>Parth Rawat</h3>
                <h4>Software Engineer</h4>
                <p>Place Holder for Parth's Website</p>
            </section>

            <section className="buttons--main">
                <button type="button" className="mail">
                    <img src={mailIco} alt='' />
                    <p>Email</p>                    
                </button>
                <button type="button" className="linkedin">
                    <img src={linkIco} alt=''/>
                    <p>LinkedIn</p> 
                </button>
            </section>

            <section className="info--main">
                <h4>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </main>
    );
}