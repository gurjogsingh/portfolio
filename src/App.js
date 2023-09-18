import './App.css';
import Typewriter from 'typewriter-effect';

function App() {

  const toggleMenu = () => {
    const menu = document.querySelector('.menuLinks');
    const icon = document.querySelector('.hamburgerIcon');
    menu.classList.toggle('open')
    icon.classList.toggle('open')
  }

  const openResume = () => {
    window.open('/portfolio/resume.pdf');
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/gurjog-singh-5b4a03232/');
  }

  const openGithub = () => {
    window.open('https://www.github.com/gurjogsingh/');
  }

  const sendEmail = () => {
    window.open('mailto:gurjog@ualberta.ca')
  }

  const downAboutToExperience = () => {
    window.location.href = './#experience'
  }

  const downExperienceToProjects = () => {
    window.location.href = './#projects'
  }

  const downProjectsToContact = () => {
    window.location.href = './#contact'
  }

  const openGithubProject = (link) => {
    window.open(link);
  }

  return (
    <div className="App">
        <nav id = 'desktopNavbar' className = 'navbar'>
          <div className='logo'>
            {/* <img className='faceLogo' src='/faceLogo.png'></img> */}
            <div className='nameLogo'>GS</div></div>
          <div>
            <ul className='navbarLinks'>
              <li><a href='#about'>About</a></li>
              <li><a href='#experience'>Experience</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav id='hamburgerNavbar'>
            <div className='logo'>
              <div className='nameLogo'>GS</div>
            </div>
            <div className='hamburgerMenu'>
              <div className='hamburgerIcon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className='menuLinks'>
                <li><a href='#about' onClick={toggleMenu}>About</a></li>
                <li><a href='#experience' onClick={toggleMenu}>Experience</a></li>
                <li><a href='#projects' onClick={toggleMenu}>Projects</a></li>
                <li><a href='#contact' onClick={toggleMenu}>Contact</a></li>
              </div>
        
              </div>

        </nav>
        <div className='portfolioSections'> 
        <section id='profile'>
          
          <div className='sectionText'>
            <p className='sectionTextP1'> Hello, I'm</p>
            <Typewriter 
                        className = 'sectionTextTitle'
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'sectionTextTitle',
                            cursor: '_',
                            delay: 100
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Gurjog Singh')
                            .pauseFor(5000)
                            .deleteAll(2)
                            .start()
                        }}/>
            <p className='sectionTextP2'>Aspiring Fullstack Developer</p>
            <div className='buttonContainer'>
              <button className='button button-color-2' onClick={openResume}>My Resume</button>
            </div>
            <div id = 'socialsContainer'>
              <img src='/portfolio/linkedin.png' alt='My LinkedIn profile' className='socialsIcon socialsLinkedInIcon' onClick={openLinkedIn}></img>
              <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={openGithub}></img>
              <img src='/portfolio/email.png' alt='My email' className='socialsIcon socialsEmailIcon' onClick={sendEmail}></img>
            </div>
          </div>

        </section>
        <section id='about'>
          <p className='sectionTextP1'> Get To Know More</p>
          <Typewriter 
                        className = 'sectionTextTitle'
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'sectionTextTitle',
                            cursor: '_',
                            delay: 100
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('About Me')
                            .pauseFor(5000)
                            .deleteAll(2)
                            .start()
                        }}/>
          <div className='sectionContainer'>
            <div className='sectionPictureContainer'>
            <div className='profilePictureCropper'>
              <img className='profilePicture' src='/portfolio/profile-pic.png' alt='Gurjog Singh Profile Picture'></img>
            </div>
          </div>
            <div className='aboutDetailsContainer'>
              <div className='aboutContainers'>
                <div className='textContainer'>
                  <p>I'm passionate about crafting digital solutions from start to finish. With a curious mind and a love for problem-solving, I thrive in the dynamic space where front-end creativity meets back-end logic. My journey has been a fusion of diverse technologies and languages, allowing me to seamlessly bridge the gap between user-centric design and robust functionality through continuous learning and hands-on experience.</p>
                </div>
                <div className='rowWrap'>
                  <div>
                    <h3>I'm familiar with</h3>
                    <p>JavaScript/TypeScript</p>
                    <p>HTML5/CSS3</p>
                    <p>Python</p>
                    <p>C#</p>
                    <p>Java</p>
                    <p>SQLite</p>
                    <p>MongoDB</p>
                    <p>And more</p>
                  </div>
                  <div>
                    <h3>I have experience with</h3>
                    <p>AngularJS</p>
                    <p>ReactJS</p>
                    <p>Azure DevOps</p>
                    <p>GCP</p>
                    <p>.NET</p>
                    <p>MS SQL Server</p>
                    <p>LangChain</p>
                    <p>Django</p>
                    <p>And more</p>
                  </div>
                  <div>
                    <h3>Education</h3>
                    <p>B.Sc. Computing Science with Specialisation, 2024</p>
                    <p>University of Alberta, Edmonton, Alberta</p>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
          <img src='/portfolio/arrow.png' alt='Arrow Icon' className='socialsIcon arrow' onClick={downAboutToExperience}></img>
        </section>
        <section id='experience'>
          <p className='sectionTextP1'>Explore My</p>
          <Typewriter 
                        className = 'sectionTextTitle'
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'sectionTextTitle',
                            cursor: '_',
                            delay: 100
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Experience')
                            .pauseFor(5000)
                            .deleteAll(2)
                            .start()
                        }}/>
          <div className='experienceDetailsContainer'>
            <div className='aboutContainers'>
              <div className='detailsContainer'>
                <div className='experienceDetails'>
                  <img className ='experienceLogo' src='/portfolio/pcl-logo.jpg'></img>
                  <div className='experienceText'>
                    <div className='experienceTitleAndDate'>
                      <h2 className='experienceTitle'>Software Developer Student at PCL Constructors Inc.</h2>
                      <h1 className='experienceDate'>September 2022 - December 2022</h1>
                    </div>
                    
                    <p className='experiencePoints'> Full stack developer in Agile practicing and Azure DevOps using team of 12 developers, for PCL’s in-house estimating software.</p>
                    <p className='experiencePoints'>• Implemented 3 new UI components, and revamped existing ones to match new design standards.</p>
                    <p className='experiencePoints'>• Developed error management feature using Angular and SpreadJS, increasing users’ error-tracking efficiency by 30%.</p>
                    <p className='experiencePoints'>• Utilized SyncFusion grids, MS SQL Server, JSON and generated a sorting algorithm to successfully redesign and validate Rate Trees feature UI and cross-window drag-drop functionality, receiving positive feedback from project stakeholders.</p>
                    <h1 className='experienceTechStack'>AngularJS | TypeScript | .NET | C# | Azure DevOps</h1>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
          <img src='/portfolio/arrow.png' alt='Arrow Icon' className='socialsIcon arrow' onClick={downExperienceToProjects}></img>
        </section>
        <section id='projects'>
          <p className='sectionTextP1'> Browse My Recent</p>
          <Typewriter 
                        className = 'sectionTextTitle'
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'sectionTextTitle',
                            cursor: '_',
                            delay: 100
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Projects')
                            .pauseFor(5000)
                            .deleteAll(2)
                            .start()
                        }}/>
          <div className='experienceDetailsContainer'>
            <div className='aboutContainers projectsContainers'>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/flowergirl-picture.png' alt='FlowerGirl' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>FlowerGirl</h2>
                <p className='projectTechStack'>ReactJS | ExpressJS | LangChain | TensorFlow | GCP</p>
                <p className='projectDescriptionText'> Website that identifies flower name through uploaded image and generates custom poem using flower name and live weather.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/gurjogsingh/silverpalmfood')}}></img>
                <img src='/portfolio/open.png' alt='Link to' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://youtu.be/6VbGz163z_M')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/silverpalmfood-picture.png' alt='Silver Palm Food' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>Silver Palm Food</h2>
                <p className='projectTechStack'>NextJS | MongoDB | Redux</p>
                <p className='projectDescriptionText'> Mobile-friendly website that allows users to view, select and order food from Silver Palm Hotel, Kilifi.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/gurjogsingh/silverpalmfood')}}></img>
                <img src='/portfolio/open.png' alt='Link to' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('/portfolio/silverpalmfood.pdf')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/tartan-picture.avif' alt='Tartan Smart Home Platform' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>Tartan Smart Home Platform</h2>
                <p className='projectTechStack'>Java | PyTest | JUnit</p>
                <p className='projectDescriptionText'> Performed testing and added additional features to a smart home controller.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/cmput402-w23/tartan-groupy2/')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/pinit-picture.png' alt='PinIt' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>PinIt</h2>
                <p className='projectTechStack'>ReactJS | ExpressJS | MongoDB</p>
                <p className='projectDescriptionText'> Website that allows authenticated users to pin and rate/review their favorite locations on a map and view other users’ pins.	</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/gurjogsingh/pinit')}}></img>
                <img src='/portfolio/open.png' alt='Link to' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('/portfolio/pinit.pdf')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/labnet-picture.jpeg' alt='LabNet' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>LabNet</h2>
                <p className='projectTechStack'>Java | Android Studio</p>
                <p className='projectDescriptionText'> Android application allowing authenticated users to record, share, and access/participate in various posted experiments.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/MdderUofA/Lab-Net/')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/bingbing-picture.png' alt='BingBing' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>BingBing</h2>
                <p className='projectTechStack'>ReactJS | Django</p>
                <p className='projectDescriptionText'> Distributed social networking website; authenticated users can create posts, follow friends and like/comment on posts.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/CMPUT404W22-GroupProject/social-distribution/')}}></img>
                <img src='/portfolio/open.png' alt='Link to' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://youtu.be/jj_-ehar8AE')}}></img>
                </div>
              </div>
              <div className='detailsContainer colorContainer singleProjectContainer'>
                <div className='articleContainer'>
                  <img src='/portfolio/portfolio-picture.png' alt='Portfolio' className='projectImage'></img>
                </div>
                <h2 className='experienceSubTitle projectTitle'>My Portfolio</h2>
                <p className='projectTechStack'>ReactJS</p>
                <p className='projectDescriptionText'> My portfolio that contains my professional information.</p>
                <div className='buttonContainer'>
                <img src='/portfolio/github.png' alt='My GitHub profile' className='socialsIcon socialsGithubIcon' onClick={() => {openGithubProject('https://github.com/gurjogsingh/portfolio')}}></img>
                </div>
              </div>
              
 









            </div>
          </div>
          <img src='/portfolio/arrow.png' alt='Arrow Icon' className='socialsIcon arrow' onClick={downProjectsToContact}></img>
        </section>
        <section id='contact'>
          <p className='sectionTextP1'> Get in Touch</p>
          <Typewriter 
                        className = 'sectionTextTitle'
                        options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'sectionTextTitle',
                            cursor: '_',
                            delay: 100
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Contact Me')
                            .pauseFor(5000)
                            .deleteAll(2)
                            .start()
                        }}/>
          <div className='contactInfoUpperContainer'>
            <div className='contactInfoContainer'>
              <img src='/portfolio/email.png' alt='Email Icon' className='socialsIcon contactIcon'></img>
              <p><a href='mailto:gurjog@ualberta.ca'>gurjog@ualberta.ca</a></p>
            </div>
            <div className='contactInfoContainer'>
              <img src='/portfolio/linkedin.png' alt='LinkedIn Icon' className='socialsIcon contactIcon'></img>
              <p><a href='https://www.linkedin.com/in/gurjog-singh-5b4a03232/'>https://www.linkedin.com/in/gurjog-singh-5b4a03232/</a></p>
            </div>
          </div>
        </section>
        <footer>
        <nav>
            <div className='navLinksContainer'>
              <ul className='navbarLinks'>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
            </div>
          </nav>
        </footer>
        </div>
    </div>
  );
}

export default App;
