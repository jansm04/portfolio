import Project from "@/components/ui/project";

import Stride from "../../assets/stride.jpg";
import Dav from "../../assets/dav.jpeg";
import Rv from "../../assets/rv.jpeg";
import Thumbhash from "../../assets/thumbhash.png";
import Godine from "../../assets/godine.jpeg";

export default function Projects() {

  const projects = [
    {
      src: Stride,
      title: "Stride",
      description: (<div>
        This is an app for runners to generate and save marathon training plans. It is powered by 
        a relatively simple algorithm that I wrote, designed to deliver training plans for any kind of 
        runner. The main goal of this project was to gain experience working with cloud computing, as well 
        as implementing a microservices architecture to create a robust and scalable web application. 
        Although, AWS is primarily used by actual companies, and this project is currently just a concept 
        application, so I am not currently running any of the backend microservices to avoid 
        spending lots of money on ECS deployments.
      </div>),
      repo: "https://github.com/jansm04/stride"
    },
    {
      src: Rv,
      title: "Recursion Visualizer",
      description: (<div>
        This is an app that lets you code a recursive function and then visualize the recursion tree, 
        along with the order in which the recursive functions are called. The visualizer works with any 
        recursive function, as long as the code does not enter an infinite loop and the recursion does 
        not go down too many levels. Some good functions to try out are Fibonacci, Binomial Coefficient, 
        and Quicksort (templates are included). The visualizer also works with recursive functions using 
        memoization, so you can see how an algorithm&apos;s time complexity improves when storing the results 
        of previous computations.
      </div>),
      site: "https://recursion-visualizer.vercel.app",
      repo: "https://github.com/jansm04/recursion-visualizer"
    },
    {
      src: Thumbhash,
      title: "Thumbhash in C++",
      description: (<div>
        This is a C++ implementation of Thumbhash, an image compression algorithm written by Evan 
        Wallace (co-founder of Figma). The primary use of this algorithm is to store a compact binary 
        encoding of an image so that an approximate placeholder image can be displayed temporarily 
        while the original file is loading asynchronously. I wrote a C++ version of this algorithm as 
        I found it did not yet exist, and wanted to try combining the algorithm with 
        the <span className="underline"><a href="https://lodev.org/lodepng/">LodePNG</a></span> library.
      </div>),
      repo: "https://github.com/jansm04/thumbhash-cpp"
    },
    {
      src: Dav,
      title: "Dijkstra's Algorithm Visualizer",
      description: (<div>
        This is a tool for building undirected graphs with edge weights and visualizing how Dijkstra&apos;s 
        algorithm finds the shortest path from one node to all other nodes in a graph. The main goal of 
        this project was to help students first learning about graph algorithms better understand how
        Dijkstra&apos;s algorithm works, as well as why the greedy approach is effective.
      </div>),
      site: "https://www.davbyjan.com",
      repo: "https://github.com/jansm04/dijkstra-visualizer"
    },
    {
      src: Godine,
      title: "goDine",
      description: (<div>
        This is a simple application to help people who want to eat out but don&apos;t know where to eat. The app 
        works by inserting user inputs into a prompt and sending the prompt to an LLM provided by the OpenAI API. 
        The response, which is a list of places to eat, is then parsed and sent to the Google Places API to get 
        the restaurant information. Unfortunately, I am no longer running the site to avoid paying the OpenAI API 
        costs, but you can still check out the source code.
      </div>),
      repo: "https://github.com/jansm04/goDine-v2"
    }
  ]

  return (
    <div>
      <h1 className="font-bold text-xl mb-6">Projects</h1>
      <div className="flex flex-col gap-10">
        {projects && projects.map((project, index) => (
          <Project 
            key={index} 
            src={project.src} 
            title={project.title}
            description={project.description}
            site={project.site}
            repo={project.repo}
          />
        ))}
      </div>
    </div>
  );
}