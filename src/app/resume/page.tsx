import { get } from "@vercel/edge-config";
import DownloadButton from "./download-button";
import WorkExperienceCard from "./work-experience-card";
import { Resume } from "../lib/definitions";
import EducationCard from "./education-card";

export default async function Page() {
  const resume = (await get("resume")) as Resume;

  return resume ? (
    <>
      <div className="grid grid-cols-2 gap-2">
        {resume.work_experience.map((work) => (
          <WorkExperienceCard key={work.company} work_experience={work} />
        ))}
      </div>
      <br />
      <div className="grid grid-cols-2 gap-2">
        {resume.education.map((ed) => (
          <EducationCard key={ed.institution} education={ed} />
        ))}
      </div>
      <br />
      <DownloadButton fileUrl={resume.pdf_url} />
    </>
  ) : (
    <p>Loading resume...</p>
  );
}
