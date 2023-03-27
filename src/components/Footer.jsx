import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Footer.style.css";

function Footer() {
	return (
		<div className='footer_container '>
			<div className='footer_left mt-4 ms-4'>
				<div className='footer_left_links'>
					<Link className='me-2' to='/home'>
						Home
					</Link>
					<p className='me-2'>-</p>
					<Link to='/products'>Produse</Link>
				</div>
				<div>
					<p id='footer_company_name'>The Designers © 2023</p>
				</div>
			</div>
			<div className='footer_right me-4'>
				<img id='fb_logo' src='fb.png' alt='logo_fb' />

				<img id='twitter_logo' src='twitter.png' alt='logo_twitter' />

				<img id='linkedin_logo' src='in.png' alt='logo_linkedin' />

				<img id='git_logo' src='git.png' alt='logo_git' />
			</div>
		</div>
	);
}
export default Footer;
