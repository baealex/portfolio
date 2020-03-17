import React from 'react';
import SectionIntro from './section/intro';
import SectionSocial from './section/social';
import SectionProdcut from './section/product';
import SectionSkill from './section/skill';
import SectionContact from './section/contact';
import './about.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init({
    duration : 500
  })

  return (
    <section>
      <SectionIntro/>
      <SectionSocial/>
      <SectionProdcut/>
      <SectionSkill/>
      <SectionContact/>
      <footer className="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center font-ridi">Copyright © {(new Date().getFullYear())} BaeJino. </div>
              </div>
          </div>
      </footer>
    </section>
  );
}

export default About;