import './App.css'; //
import boo from './IMAGES/boo the dog.png'
import ed from './IMAGES/EDITED .png'
import clipo from './IMAGES/Glasses clipart .png'
import ho from './IMAGES/Horiseon.png'
import rb from './IMAGES/Run buddy.png'
import scho from './IMAGES/Scholarshipapp.png'

function App() {    
  return (
    <div className="App">
<div>
  <header>
    <h1 id="Me"> SHYLA GONZALEZ</h1>
    <img src={clipo} alt="glasses" />
    <nav>
      <ul>
        <li>
          <a href="#Me">About Me</a>
        </li>
        <li>
          <a href="#Work">My Work</a>
        </li>
        <li>
          <a href="#Contact">My Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  {/*Content section about me, my work, and my contact*/}
  <section className="content">
    <article>
      <h2>ABOUT ME</h2>
      <img src={ed} alt="cute sefie" className="selfie" />
      <p>
                Hi! I’m Shyla (: I’m currently located in Texas but I’m from Boston,MA originally. I’ve
                decided to put my career on hold , in order to pursue a new career in web
                development. I am currently enrolled in the Coding Boot Camp at the University of Texas.
            </p>
            <p>
              I'm profincent in both front end and back end technology, which includes HTML,CSS,JavaScript,
              Bootstrap,React. Also some back-end includes node,Express, SQL, MongoDB, and APIs. 
            </p>
            <p> Please fill free to check my recent work on GitHub and reach out if you have any questions or if you have any
                advice you’ll like to give to a new web developer. I can’t wait to collaborate with you!!
            </p>
      
    </article>
    <article id="Work">
      <h2>MY WORK</h2>
      <p2>
        <ul>
          <li>
            <a href="https://shylag1073.github.io/Horiseon.challenge1/" target="_blank"><img src={ho} alt="Horiseon web page" style={{width: 500, height: 300}} />
            </a>
          </li>
          <li><a href="file:///Users/shylicious/Desktop/Run%20Buddy/index.html" target="_blank"><img src={rb} alt="Run Buddy" style={{width: 350, height: 300}} />
            </a>
          </li>
          <li className="small"><img src={boo} alt="boo the dog" style={{width: 350, height: 300}} /></li>
          <li><a href="https://jch95.github.io/Scholarship-App/" target="_blank"><img src={scho} alt="Run Buddy" style={{width: 350, height: 300}} />
            </a>
          </li>
        </ul>
      </p2>
    </article>
    <article id="Contact">
      <h2>CONTACT ME</h2>

      <h4> <a href="https://github.com/Shylag1073"><b> Github </b></a></h4>
      <form id="contact-form">
        <div>
         <h4><label htmlFor="name">Name:</label> </h4>
          <input
            type="text"
            name="name"
          />
        </div>
        <div>
          <h4> <label htmlFor="email">Email address:</label></h4>
          <input
            type="email"
            name="email"
          />
        </div>
        <div>
          <h4><label htmlFor="message">Message:</label></h4>
          <textarea
            name="message"
            rows="5"
          />
        </div>
    
        <button type="submit">Submit</button>
      </form>
    </article>
  </section>
</div>

    </div>
  );
}

export default App;
