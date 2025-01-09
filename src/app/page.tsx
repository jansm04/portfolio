export default function Home() {
  return (
  <div className="flex flex-col gap-6">
    <h1 className="font-bold text-xl">Jan Smailbegovic</h1>
    <div>
      <h2 className="mb-3">Hi, I&apos;m Jan👋.</h2>
      <ul>
        <li>I&apos;m a third year computer science student at the university of british columbia.</li>
        <li>I&apos;m interested in solving hard problems with efficient solutions.</li>
      </ul>
    </div>
    <div>
      <h2 className="mb-3">Recently, I have worked on...</h2>
      <ul>
        <li>&ensp;•&ensp;a location-tracking Android application at <span className="underline"><a href="https://www.centrilogic.com/">Centrilogic</a></span>.</li>
        <li>&ensp;•&ensp;ELT pipelines for credit risk data at <span className="underline"><a href="https://www.bmo.com/">BMO</a></span>.</li>
      </ul>
    </div>
    <div>
      <h2 className="mb-3">Currently, I am...</h2>
      <ul>
        <li>&ensp;•&ensp;helping develop a new volunteer management system at <span className="underline"><a href="https://www.bcbrainwellness.ca/">BC Brain Wellness Program</a></span>.</li>
        <li>&ensp;•&ensp;studying advanced algorithms and operating systems.</li>
      </ul>
    </div>  
  </div>
  );
}
