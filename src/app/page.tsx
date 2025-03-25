import "./style.scss";
import Footer from "@components/components/footer/footer"

export default function Home() {




  return (
    <div className="main-layer">


      <div className="nav-bar">
        <a className="nav" href="#about">About me</a>
        {/* <a className="nav" href="#lets-connect">Contact</a> */}
        <a className="nav" href="#services">Services</a>
      </div>


      <div className="main-container">

        <div className="intro-layer">

          <div className="about-dev">
            <div className="dev-name">I'm sham roy</div>
            <div className="dev-stack">Frontend Developer</div>
            <div className="dev-content">
              Helping businesses and startups build high-performance web applications with modern technologies like Next.js, React, and Angular. Let's collaborate and turn your ideas into reality!            </div>
            <div className="gb-button">Contact me</div>
          </div>

          <div className="dev-avatar-layer">
            {/* <img src="https://i.pinimg.com/736x/2d/9b/2d/2d9b2d155ee93f6a529f98fe93567087.jpg" alt="" /> */}
          </div>
        </div>

        <div className="about-me" id="about">

          <div className="about-img-wrap">
            <img src="https://i.pinimg.com/736x/1c/0b/63/1c0b6332659c28d5932b1cdea8622138.jpg" alt="" />
          </div>

          <div className="about-info">

            <div className="about-center">
              <div className="about-me-label">About me</div>
              <div className="about-content">
                I am a Frontend Developer with expertise in Next.js, React, and Angular, backed by Node.js, Express.js, MongoDB, and WebSockets for full-stack solutions. I bring experience in agile development, UI/UX optimization, and performance-driven web applications.
                <br />
                <br />
                With a strong foundation in modern web technologies, I have helped businesses create robust, scalable, and engaging platforms. Whether it's an MVP for a startup or revamping an enterprise application, I ensure every project is optimized for performance, security, and user experience.
              </div>

              <div className="gb-button">Download CV</div>
            </div>


          </div>

        </div>

        <div className="services" id="services">

          <div className="services-title">Services</div>

          <div className="services-wrap">
            <div className="service-option">
              <div className="service-title">Web Development</div>
              <div className="service-description">
                We specialize in building modern, responsive, and scalable web applications tailored to your unique business needs. Whether you need a dynamic single-page application (SPA) with React, a server-rendered solution with Next.js, or a robust enterprise-grade app with Angular, we deliver high-performance solutions that align with your goals.
              </div>
            </div>
            <div className="service-option">
              <div className="service-title">Full-Stack Solutions</div>
              <div className="service-description">
                From front-end design to back-end functionality, we provide end-to-end development services. Using Node.js and Express.js for the back-end and MongoDB for database management, we create seamless, full-stack applications that are fast, secure, and easy to maintain.
              </div>
            </div>
            {/* <div className="service-option">
                <div className="service-title">Authentication & Security</div>
                <div className="service-description">
                Security is a top priority. We implement robust authentication systems using OAuth, JWT (JSON Web Tokens), and Firebase Authentication to ensure your application is protected against unauthorized access. Your data and user information are safeguarded with industry-standard encryption and best practices.
                </div>
            </div> */}
            <div className="service-option">
              <div className="service-title">Real-Time Applications</div>
              <div className="service-description">
                Need real-time functionality like live chat, notifications, or collaborative tools? We leverage WebSockets and Socket.io to build real-time features that keep your users engaged and connected, delivering instant updates and seamless interactions.
              </div>
            </div>
            <div className="service-option">
              <div className="service-title">Payment Gateway & API Integrations</div>
              <div className="service-description">
                We integrate secure and reliable payment gateways (e.g., Stripe, PayPal) and third-party APIs to streamline transactions and enhance functionality. Whether it’s e-commerce, subscription services, or custom integrations, we ensure smooth and secure payment processing.
              </div>
            </div>
            <div className="service-option">
              <div className="service-title">Performance Optimization & SEO</div>
              <div className="service-description">
                A fast and optimized website is critical for user experience and search engine rankings. We optimize your application’s performance by reducing load times, improving code efficiency, and implementing SEO best practices to help your site rank higher on search engines.
              </div>
            </div>
            <div className="service-option">
              <div className="service-title">Website Maintenance & Feature Enhancements</div>
              <div className="service-description">
                Your website is a living entity that requires regular updates and improvements. We offer ongoing maintenance services, including bug fixes, security patches, and feature enhancements, to ensure your application remains up-to-date, secure, and aligned with your evolving business needs.
              </div>
            </div>

          </div>
        </div>

        <div className="work-with-me">
          <div className="work-with-me-title">Why Work With Me?</div>

          <ul className="why-list">
            <li><span>Innovative Solutions</span> - I deliver cutting-edge, scalable, and high-performance applications.</li>
            <li><span>Collaborative Approach</span> -  I work closely with businesses, startups, and teams to bring their vision to life.</li>
            <li><span>Data-Driven Development</span> - Optimized applications based on analytics and best practices.</li>
            <li><span>Timely Delivery</span> - Your project will be completed on schedule without compromising quality.</li>
            <li><span>Continuous Support</span> - Ongoing maintenance and feature updates.</li>
          </ul>

        </div>

        <div className="lets-connect" id="lets-connect">

          <div className="lets-work-together">Let's Work Together!</div>
          <div className="connect-options-wrap">
            <div className="connect-options">WhatsApp: <a href="https://wa.me/917025825359?text=Hi,%20sham%20roy" target="_blank">+91-7025825359</a> </div>
            <div className="connect-options">E-mail: <a href="mailto:sy.royce@hotmail.com">Sy.royce@hotmail.com</a> </div>
            <div className="connect-options">LinkedIn:  <a href="https://www.linkedin.com/in/shyam-roy-b2bb611a3/" target="_blank">Sham roy</a></div>
            <div className="connect-options">Location: <a href="https://maps.app.goo.gl/vpvxmuh7AQw2okCf9">Kochi, Kerala</a> </div>
          </div>

          <div className="connect-base">Let's discuss your project! Contact me for a free consultation.</div>
        </div>

        <Footer />
      </div>

      <video
        className="video-layer"
        src="/video/tech-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="100%"
      />
    </div>
  );
}
