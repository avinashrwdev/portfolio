"use client"

import { ProjectsData } from "@/lib/data"
import SectionHeading from "./section-heading"
import Project from "./project-card"
import { useSectionInView } from "@/lib/useInView"


export default function Projects(){
  const {ref} = useSectionInView("#projects", 0.1)
  return(
    <section className="scroll-mt-28 mb-28"
    id="projects" ref={ref}
    >
      <SectionHeading>
          My Projects
      </SectionHeading>
      <div>
        {
          ProjectsData.map((project, index)=>(
            <Project {...project} key={index} />
          ))
        }
      </div>
    </section>
  )
}