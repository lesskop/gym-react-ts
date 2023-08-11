import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto grid w-5/6 grid-cols-1 md:grid-cols-3 md:justify-items-center">
        {/* Logo and general info */}
        <div>
          <img src={Logo} alt="logo" />
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iusto dolore est animi, pariatur repellendus, quo ullam, omnis
            perferendis accusantium necessitatibus!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mt-8 font-bold md:mt-0">Links</h4>
          <p className="footer-link">Lorem ipsum dolor</p>
          <p className="footer-link">Quia amet sed</p>
          <p className="footer-link">Optio aut fugiat</p>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="mt-8 font-bold md:mt-0">Contacts</h4>
          <p className="footer-link">
            159 East Creekside Ave. Brooklyn, NY 11220
          </p>
          <p className="footer-link">evogym@evogym.com</p>
          <p className="footer-link">8-800-555-35-35</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
