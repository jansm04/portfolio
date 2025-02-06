import Message from "@/components/home/message"

export default function Home() {
  return (
  <div className="flex flex-col gap-6">
    <h1 className="font-bold text-2xl">Jan Smailbegovic</h1>
    <Message />
    <div className="text-center">
      <h2 className="mb-3">Hi, I&apos;m Jan👋.</h2>
      <ul>
        <li>I&apos;m a third year computer science student at the university of british columbia.</li>
        <li>I like to solve hard problems with efficient solutions.</li>
      </ul>
    </div>
    <div className="bg-[var(--foreground)] h-[1px]"/>
    <div>
      <h2 className="mb-3">Recently, I have worked on...</h2>
      <ul>
        <li>&ensp;•&ensp;a location-tracking Android application at <span className="link"><a href="https://www.centrilogic.com/">Centrilogic</a></span></li>
        <li>&ensp;•&ensp;ELT pipelines for credit risk data at <span className="link"><a href="https://www.bmo.com/">BMO</a></span></li>
      </ul>
    </div>
    <div>
      <h2 className="mb-3">Currently, I am...</h2>
      <ul>
        <li>&ensp;•&ensp;helping develop a new volunteer management system at <span className="link"><a href="https://www.bcbrainwellness.ca/">BC Brain Wellness Program</a></span></li>
        <li>&ensp;•&ensp;studying advanced algorithms and operating systems</li>
      </ul>
    </div>  
  </div>
  );
}
