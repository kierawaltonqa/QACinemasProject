import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';


const Connect = () => {
    return (
        <>
            <div className="row-md">
                <hr />
                <div className="col-md-12" id="connect">
                    <h4>Connect With Us...</h4>
                </div>
            </div>
            <div className="row-md">
                <div className="col-md-12 social padding">
                    <center>
                        <h3 id="icons"> <FiFacebook id="fb-icon" size={50} /> <FiInstagram id="i-icon" size={50} /> <FiTwitter id="t-icon" size={50} /> <FiMail id="gm-icon" size={50} /></h3>
                    </center>
                </div>
            </div>
        </>
    )

}
export default Connect;
// <div class="col-12 social padding">
//                 <a href="#"><i class="bi bi-facebook"></i></a>
//                 <a href="#"><i class="bi bi-twitter"></i></a>
//                 <a href="#"><i class="bi bi-instagram"></i></a>
//                 <a href="#"><i class="bi bi-youtube"></i></a>
//             </div>