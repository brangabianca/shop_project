import { Link } from "react-router-dom";
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
		</div>
	);
}
export default Footer;
