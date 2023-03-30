import { Link } from "react-router-dom";
import "./Footer.style.css";

function Footer() {
	return (
		<div className='footer_container '>
			<div className='footer_left mt-4 ms-4'>
				<div className='footer_left_links'>
					<Link className='test me-2' to='/home'>
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
				<a href='https://www.facebook.com/bianca.branga'>
					<button className='fotter_buttons'>
						<img
							id='fb_logo'
							src='https://raw.githubusercontent.com/brangabianca/shop_project/main/fb.png'
							alt='logo_fb'
						/>
					</button>
				</a>
				<a href='https://www.instagram.com/brangabianca/?igshid=YmMyMTA2M2Y%3D'>
					<button className='fotter_buttons'>
						<img
							id='instagram_logo'
							src='https://raw.githubusercontent.com/brangabianca/shop_project/main/instagram.png'
							alt='logo_instagram'
						/>
					</button>
				</a>
				<a href='https://www.linkedin.com/in/bianca-branga-348411127'>
					<button className='fotter_buttons'>
						<img
							id='linkedin_logo'
							src='https://raw.githubusercontent.com/brangabianca/shop_project/main/in.png'
							alt='logo_linkedin'
						/>
					</button>
				</a>
				<a href='https://github.com/brangabianca/shop_project.git'>
					<button id='git_button' className='fotter_buttons'>
						<img
							id='git_logo'
							src='https://raw.githubusercontent.com/brangabianca/shop_project/main/git.png'
							alt='logo_git'
						/>
					</button>
				</a>
			</div>
		</div>
	);
}
export default Footer;
