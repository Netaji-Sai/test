
import logo from './Images/logo.jpg';

export function Footer(){
    return(
        <div class="row bg-dark-subtle">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <h1>Visit us on</h1>
                <ul>
                    <li><a href="https://facebook.com" class="nav-link">FaceBook</a></li>
                    <li><a href="https://whatsapp.com">WhatsApp</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://linkedIn.com">LinkedIn</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <h1>Reviews</h1>
                <ol type="1" start="11">
                    <li><a href="#">Blog1</a></li>
                    <li><a href="#">Blog2</a></li>
                    <li><a href="#">Blog3</a></li>
                    <li><a href="#">Blog4</a></li>
                </ol>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <h1>Topics</h1>
                <p>SubTopic</p>
                <p>SubTopic</p>
                <p>SubTopic</p>
                <p>SubTopic</p>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <a href="https://flipkart.com"><img src={logo} alt="Logo-Flipkart"></img></a>
            </div>
        </div>
    )
}