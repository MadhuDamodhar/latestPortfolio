import React, { useState } from 'react';
import './App.css';
import profile from './assets/hero.png';
import aboutPic from './assets/about-pic.png'
import eshop from './assets/eshop.png'
import ems from './assets/ems.png'
import todo from './assets/todoApp.png'
import callWaiting from './assets/callwaiting.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from "emailjs-com";
import { Tooltip } from 'react-tooltip';

function App() {
  const [count , setCount]=useState(0);
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: ""
  });


  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
   
    const SERVICE_ID = "service_0porjrq"; 
    const TEMPLATE_ID = "template_dofsbbl"; 
    const USER_ID = "GZMwJaV9Gliwt4JNR"; 
  
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setStatusMessage("Thank you! Your message has been sent.");
          setFormData({ to_name: "", from_name: "", message: "" }); // Reset form fields
        },
        (err) => {
          console.error("Failed to send email. Error:", err);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };
  
  return (
    <div className='Base'>
      <div className='nav'>
        <h2 className='brand'>Madhu Damodhar</h2>
        <button id='resume' className='resume'> Resume<i class="fas fa-download"></i></button>
        <button className='toggle'>
          <i id="modeIcon" className="fas fa-sun">&nbsp;&nbsp;</i>
        </button>
      </div>

      <div className='wrapper'>
       { count === 0 && (
        <div className='main-content'>
        <div className='image-container'>
          <img src={profile} alt='profilePic'></img>
          <p className='name'>Madhu Damodhar<br/>
          <span  id='highlightRole'>
          void role( ) &#123;<br />
          &nbsp;&nbsp;System.out.println( " <span id='highlightRole1'>Backend Developer</span> 🖥️ " );<br />
          &#125;
        </span>
          </p>
        </div>

        <div className='about-container'>
          <p>
            <span className='hello'>Hello , <br/></span>
            <span className='profiletitle'>I'm Madhu Damodhar . . !</span>
            I am a skilled <span className='highlight'>Backend Developer</span> with a primary focus on developing scalable, high-performance backend systems using <span className='highlight'>Java</span> and <span className='highlight'>Spring Boot</span>. My expertise spans <span className='highlight'>RESTful APIs</span>, <span>microservices architecture</span>, and database management with <span className='highlight'>MySQL , SQL</span>. I am adept at implementing security frameworks like <span className='highlight'>JWT</span> and <span className='highlight'>Basic Authentication</span>, ensuring secure and efficient application performance.

            While my core specialization is in backend development, I have a comprehensive understanding of <span className='highlight'>full stack</span> technologies such as <span className='highlight'>HTML, CSS, JavaScript</span>, and <span className='highlight'>React.js</span>, enabling me to contribute effectively to end-to-end development. This knowledge allows me to ensure smooth integration and collaboration between backend and frontend systems.

            With my proficiency in <span  className='highlight'>Java Full Stack Development</span>, I am ready to apply industry-standard best practices to build robust, scalable solutions that drive business value. Let’s collaborate on creating cutting-edge technology solutions.
          </p>
          <button onClick={()=>{setCount(5)}} id='hireme' className='hireme'><i class="fas fa-handshake"></i> Hire Me </button>
        </div>
        
      </div>

       ) }{
        count === 1 && (
         <div className='AboutMe'>
         <img src={aboutPic}></img>
         <div className='About-Container'>
         <p className='about-para'>
         <span className='aboutMe'>About Me <br/></span>
         <span className='aboutMetitle'> I'm&nbsp;<span className='aboutName'>Madhu Damodhar</span>.</span>
         I am currently pursuing a Master of Computer Applications <span  className='highlight'>(MCA)</span> at the <span className='highlight'>University of Post Graduate College</span>, expecting to graduate in <span className='highlight'>2025</span>. I hold a Bachelor of Science in Computer Science from <span className='highlight'>G. Pulla Reddy Degree & P.G. College</span>, where I achieved a <span className='highlight'>CGPA of 7.13</span>. My technical skills include proficiency in <span className='highlight'>HTML, CSS, JavaScript,</span> and <span className='highlight'>React.js</span> for <span className='highlight'>frontend development</span>, along with <span className='highlight'>Java</span> for <span className='highlight'>backend processing</span> and <span className='highlight'>MySQL</span> for <span className='highlight'>database management</span>. I have hands-on experience in using <span className='highlight'>Spring</span> for building scalable applications and am familiar with <span className='highlight'>Git</span> for version control. A notable achievement includes developing a comprehensive <span className='highlight'>E-Commerce Website</span> that integrates both <span>frontend</span> and <span className='highlight'>backend</span> technologies, enhancing user experience through innovative features. Additionally, I actively contributed to the <span className='highlight'>development and maintenance of the college website</span>, which earned me recognition for my <span className='highlight'>problem-solving abilities</span>. Having completed a <span>certification in Java Full Stack Technologies</span> from <span className='highlight'>Quality Thoughts Institute</span>, I am eager to apply my theoretical knowledge in real-world settings. I am currently seeking job opportunities and internships to further develop my skills and contribute meaningfully to projects.
       </p>
             <p className='thankyou'thankyou>System.out.println ( "&nbsp;&nbsp;<span className='highlightthankyou'> Thank you For Visiting</span> &nbsp;🙏 " )</p> 
         </div>
         </div>
        )
       }
       {
        count === 2 && (
          <div className='skills-edu'>
          <div className='education'>
          <h2 className='educationTitle'>  Education <i class="fas fa-graduation-cap"></i>
          </h2>
          <span>
          public class <span className='highlightthankyou'>EducationDetails &#123;</span> <br />
          &nbsp;&nbsp;public static void <span className='highlightthankyou' >main</span>(String[] args)  <span className='highlightthankyou'>&#123;</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> Education Details <span className='highlightthankyou'>)</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >mca</span> = " <span style={{color:'orange'}}>MCA at University of Post Graduate College, Expected Graduation: 2025</span> ";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >bsc</span> = " <span style={{color:'orange'}}>B.Sc. in Computer Science from G. Pulla Reddy Degree & P.G. College, CGPA: 7.13, Graduated: 2023</span> ";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;String <span  className='highlightthankyou' >intermediate</span> = " <span style={{color:'orange'}}>Intermediate (MPC) at Sri Chaitanya Junior Kalasala, Score: 787/1000, Completed: 2020</span> ";<br />
          &nbsp;&nbsp;&nbsp;&nbsp;String <span  className='highlightthankyou' >schooling</span> = " <span style={{color:'orange'}}>Schooling at S.R. High School, CGPA: 8.5, Completed: 2017 </span>";<br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> mca <span className='highlightthankyou'>)</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> bsc <span className='highlightthankyou'>)</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> intermediate <span className='highlightthankyou'>)</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> schooling <span className='highlightthankyou'>)</span>;<br />
          &nbsp;&nbsp; <span className='highlightthankyou'>&#125;</span><br />
         <span className='highlightthankyou'>&#125;</span>
        </span><br></br>
        <span>
        <span style={{color:'orange'}}>Output :</span><br></br>
        <span className='highlightthankyou' >Education Details : </span>
<span style={{color:'green'}}>MCA at University of Post Graduate College, Expected Graduation : 2025</span>.<br></br>
<span style={{color:'green'}}>B.Sc. in Computer Science from G. Pulla Reddy Degree & P.G. College, CGPA: 7.13, Graduated: 2023</span>.<br></br>
<span style={{color:'green'}}>Intermediate (MPC) at Sri Chaitanya Junior Kalasala, Score: 787/1000, Completed : 2020</span>.<br></br>
<span style={{color:'green'}}>Schooling at S.R. High School, CGPA: 8.5, Completed: 2017</span>.

        </span>
          </div>
          <div className='skills'>
          <h2 className='skillsTitle'> Skills <i class="fas fa-tools"></i></h2>
          <span>
        public class <span className='highlightthankyou'>SkillsDetails  <span className='highlightthankyou'>&#123;</span></span><br />
        &nbsp;&nbsp;public static void <span className='highlightthankyou' >main</span>(String[] args)  <span className='highlightthankyou'>&#123;</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> Skills and Expertise <span className='highlightthankyou'>)</span>;<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >frontendSkills</span> = " <span style={{color:'orange'}}>HTML, CSS, JavaScript, React.js</span> ";<br />
        &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >backendSkills</span> = " <span style={{color:'orange'}}>Java, Spring Boot</span> ";<br />
        &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >databaseSkills</span> = " <span style={{color:'orange'}}>MYSQL, SQL</span> ";<br />
        &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >tools</span> = " <span style={{color:'orange'}}>Git, Postman</span> ";<br />
        &nbsp;&nbsp;&nbsp;&nbsp;String <span className='highlightthankyou' >additionalSkills</span> = " <span style={{color:'orange'}}>Problem-solving, Team Collaboration</span> ";<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> " <span style={{color:'orange'}}>Frontend Skills :</span>  "+frontendSkills <span className='highlightthankyou'>)</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> " <span style={{color:'orange'}}>Backend Skill :s</span> "+backendSkills <span className='highlightthankyou'>)</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> " <span style={{color:'orange'}}> Database Management :</span> "+databaseSkills <span className='highlightthankyou'>)</span>;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> " <span style={{color:'orange'}}>Tools :</span>"+tools <span className='highlightthankyou'>)</span>;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >System.out.println(</span> "<span style={{color:'orange'}}>Additional Skills :</span>  "+additionalSkills <span className='highlightthankyou'>)</span>;<br />

        &nbsp;&nbsp; <span className='highlightthankyou'>&#125;</span><br />
         <span className='highlightthankyou'>&#125;</span>
      </span>
      
      <span><br></br>
      <span style={{color:'orange'}}>Output :</span><br></br>
      <span className='highlightthankyou' >Skills and Expertise : </span>
      <span className='highlightthankyou' >Frontend Skills : </span><span style={{color:'green'}}>HTML, CSS, JavaScript, React.js</span>.<br></br>
      <span className='highlightthankyou' >Backend Technologies : </span> <span style={{color:'green'}}>Java, Spring Boot</span>.<br></br>
      <span className='highlightthankyou' >Database Management : </span><span style={{color:'green'}}>MYSQL, SQL</span>.<br></br>
      <span className='highlightthankyou' >Tools : </span> <span style={{color:'green'}}>Git, Postman</span>.<br></br>
      <span className='highlightthankyou' >Additional Skills : </span> <span style={{color:'green'}}>Problem-solving, Team Collaboration</span>.<br></br>
      </span>
          </div>
          </div>
        )
       }
      {
        count === 3 && (
          <div className='Certifications'>
          <span className='json'>
         <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#123;</span>  <br /> <span style={{color:'orange' , fontSize:'1.5rem' ,fontWeight:'900',paddingLeft:'10px'}}>"certifications":</span> <span  className='highlightthankyou' >[</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#123;</span> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"title":</span> <span style={{color:'orange'}}>"Java Full Stack Certification"</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"institution":</span> "Quality Thoughts Institute",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"year":</span> "2023",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"skillsAcquired":</span> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"In this certification program, I gained comprehensive knowledge of Java and its ecosystem, covering both front-end and back-end development.,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I learned to build dynamic web applications using technologies like Spring Boot for server-side programming and React.js for creating interactive user  interfaces.,
          &nbsp;Additionally, the program emphasized best practices in coding, debugging, and deploying applications, enhancing my ability to create efficient, scalable software solutions."<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"Certificate":</span><a target='_blank' href='https://drive.google.com/file/d/1_78Mow8sZKjVuEQuvE8qHV5I7hiKvNRN/view?usp=sharing'> Click here </a>,
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#125;</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#123;</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"title":</span> <span style={{color:'orange'}}>"College Website Development Contribution Certificate"</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"institution":</span> "University of Post Graduate College",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"year":</span> "2024",<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"skillsAcquired":</span> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This certification recognized my contributions to the development of the college website, where I implemented various functionalities and enhanced the site’s overall performance.
          I learned to integrate multimedia elements and optimize the website for better speed and responsiveness, which is crucial for retaining users.
          The experience also provided insight into project management and teamwork, as I coordinated with peers to achieve common goals and meet deadlines effectively."<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >"Certificate":</span><a target='_blank' href='https://drive.google.com/file/d/1MzZfcnJ4xmT9LdhVbkG_XbI39IY49gY1/view?usp=sharing'> Click here </a>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#125;</span><br />  &nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >]</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  className='highlightthankyou' >&#125;</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<br />
         
      </span>
          </div>
        )
      }
      {
        count === 4 && (
          <div className='ProjectContainer'>
          <h2 className='projectTitle'>Projects</h2>
          <div className='projects'>
          <div className='project'>
          <img src={eshop} ></img>
          <div className='project-details'>
          <p style={{textAlign:'justify'}}>
          <span className='heading'>E-Commerce Website</span><br></br>
          I built a full-stack e-commerce website using <span className='highlightthankyou'>React.js</span> for the frontend and <span className='highlightthankyou'>Spring Boot</span>  for the backend. Key features include <span className='highlightthankyou'>Product Browsing</span> , <span className='highlightthankyou'>Shopping Cart</span> , <span className='highlightthankyou'>Order Management</span> , <span className='highlightthankyou'>JWT Based Authentication</span> , and <span className='highlightthankyou'>Rest Api's</span>  for frontend-backend communication. <span className='highlightthankyou'>MYSQL</span>  is used for data storage.
          </p>
          <button className='view'><a style={{textDecoration:'none'}} href='#'>view</a></button>
          </div>
          </div>

          <div className='project'>
          <img src={ems}></img>
          <div className='project-details'>
          <p style={{textAlign:'justify'}}>
          <span className='heading'>Employee Management System</span><br></br>
          I built a full-stack Employee Management System (EMS) using <span className='highlightthankyou'>React.js</span>. This is <span className='highlightthankyou'>CRUD</span>-based application and  enables <span className='highlightthankyou'>creating</span>, <span className='highlightthankyou'>reading</span>, <span className='highlightthankyou'>updating</span>, and <span className='highlightthankyou'>deleting</span> employee data, focusing on efficient management of employee details without any authentication requirements.
          </p>
          <button className='view'><a style={{textDecoration:'none'}} href='#'>view</a></button>
          </div>
          </div>

          <div className='project'>
          <img src={todo}></img>
          <div className='project-details'>
          <p style={{textAlign:'justify'}} >
          <span className='heading'>To-Do Web Application </span><br></br>
          I built a full-stack ToDo app that allows users to <span className='highlightthankyou'>create</span>, <span className='highlightthankyou'>read</span>, <span className='highlightthankyou'>update</span>, and <span className='highlightthankyou'>delete</span> tasks. It efficiently manages task details with a simple user interface, supporting <span className='highlightthankyou'>CRUD</span> operations without authentication. The application utilizes <span className='highlightthankyou'>React.Js</span>for the front end and <span className='highlightthankyou'>Spring Boot</span> for the backend.
          </p>
          <button className='view'><a style={{textDecoration:'none'}} href='#'>view</a></button>
          </div>
          </div>
          </div>
          </div>
        )
      }
      {
        count === 5 && (
          <div id="contact" className="contact">
          <div className="contact__Image">
            <img src={callWaiting} alt="profile picture" className="contact__img" />
          </div>
          <div className="contact__form">
            <form id="contactForm" className="form" onSubmit={sendEmail}>
              <p className="title">Contact Me</p>
              <p className="message">{statusMessage ? statusMessage :"Please fill out the form below to discuss work opportunities." }</p>
              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="text"
                    name="to_name"
                    value={formData.to_name}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                  />
                  <span>Name</span>
                </label>
                <label>
                  <input
                    className="input"
                    type="email"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                  />
                  <span>Email</span>
                </label>
              </div>
              <label>
                <textarea
                  rows="5"
                  cols="7"
                  className="input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete='off'
                />
                <span>Message</span>
              </label>
              <button type="submit" className="submit">Submit</button>
            </form>
          </div>
        </div>
        )
      }

        <div className='icons'>
          <button id="facebook-btn"><i className="fab fa-facebook"></i></button>
          <button id="github-btn"><i className="fab fa-github"></i></button>
          <button id="linkedin-btn"><i className="fab fa-linkedin"></i></button>
          <button id="instagram-btn"><i className="fab fa-instagram"></i></button>
          <button id="twitter-btn"><i className="fab fa-twitter"></i></button>
        </div>

        {/* Tooltip component */}
        <Tooltip anchorId="facebook-btn" content="Visit Facebook" place="left" />
        <Tooltip anchorId="github-btn" content="Visit GitHub" place="left" />
        <Tooltip anchorId="linkedin-btn" content="Visit LinkedIn" place="left" />
        <Tooltip anchorId="instagram-btn" content="Visit Instagram" place="left" />
        <Tooltip anchorId="twitter-btn" content="Visit Twitter" place="left" />
        <Tooltip anchorId="hireme" content="Open For Jobs and Internships. Hire Me 👍" place="top" />
        <Tooltip anchorId="modeIcon" content="Light Mode" place="bottom" />
        <Tooltip anchorId="resume" content="Download Resume ↓" place="left" />
      </div>

      <div className='bottom'>
        <button onClick={()=>{setCount(0)}} ><i class="fas fa-home"></i>
         &nbsp;Home</button>
        <button onClick={()=>{setCount(1)}} > <i class="fas fa-user"></i>
        &nbsp;About Me</button>
        <button onClick={()=>{setCount(2)}}><i class="fas fa-tools"></i>
        &nbsp;Skills/Edu</button>
        <button onClick={()=>{setCount(3)}}><i class="fas fa-medal"></i>
        &nbsp; certifications</button>
        <button onClick={()=>{setCount(4)}} ><i class="fas fa-project-diagram"></i>
        &nbsp; Projects</button>
        <button onClick={()=>{setCount(5)}}><i class="fas fa-envelope"></i>
        &nbsp;Contact</button>
      </div>
    </div>
  );
}

export default App;
