const Footer = () => {
  return (
    <footer className="footer p-10 text-white bg-green-500">
        <nav>
            <h6 className="footer-title text-white-800">Services</h6> 
            <a className="link link-hover">Product Development</a>
            <a className="link link-hover">Storytelling</a>
            <a className="link link-hover">Community Engagement</a>
            <a className="link link-hover">Artisan Support</a>
        </nav> 
        <nav>
            <h6 className="footer-title">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <h6 className="footer-title">Legal</h6> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <a className="link link-hover">@2024 - All rights reserved</a>
        </nav>
    </footer>
  );
};

export default Footer;
