import Image from "next/image";

import Me from "../../assets/me.jpg";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div>
            I am a 3rd Year Computer Science major at the <span className="link"><a href="https://www.ubc.ca/">University of British Columbia</a></span>. 
            I was born and raised in Toronto, ON.
          </div>
          <div>
            I started writing code early in high school and pretty quickly realized it was something
            I wanted to pursue as a career.
          </div>
          <div>
            I came to UBC to study CS, and enrolled in the co-op program as quickly as possible.
            So far, I have worked at <span className="link"><a href="https://www.bmo.com/">BMO</a></span> as a Data Engineering Intern, and <span className="link"><a href="https://www.centrilogic.com/">Centrilogic</a></span> as a Software Development Intern.
            I am also a member of <span className="link"><a href="https://www.ubclaunchpad.com/">Launch Pad</a></span>, a student-run software development club at UBC.
            There, I am currently helping build a new website for the volunteers at <span className="link"><a href="https://www.bcbrainwellness.ca/">BC Brain Wellness Program</a></span>.
          </div>
          <div>
            Outside of software development, I like playing hockey, skiing, running, and cycling. 
            I&apos;m also a huge classic rock fan and spend lots of my free time listening to music or playing guitar.
          </div>
        </div>
        
        <Image src={Me} alt="Me" className="w-full md:w-[30%] md:h-[30%] rounded-lg shadow-lg" />
      </div>
    </div>
  );
}