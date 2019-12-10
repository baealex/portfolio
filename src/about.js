import React from 'react';
import SectionIntro from './section/intro/main';
import SectionSocial from './section/social/main';
import SectionProdcut from './section/product/main';
import SectionSkill from './section/skill/main';
import SectionContact from './section/contact/main';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init({
    duration : 500
  })

  return (
    <div>
      <SectionIntro/>
      <SectionSocial/>
      <SectionProdcut/>
      <SectionSkill/>
      <SectionContact/>
      <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-12 text-center font-ridi">Copyright © {(new Date().getFullYear())} BaeJino. </div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default About;