import { WorkExperience } from "../lib/definitions";

export default function WorkExperienceCard(props: {
  work_experience: WorkExperience;
}) {
  const { work_experience } = props;

  return (
    <a
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {work_experience.title}, {work_experience.company}
      </h5>
      <h1>{work_experience.timespan}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {work_experience.technologies.map((technology) => (
          <div key={technology} className="rounded-md bg-slate-100 px-2 border border-transparent text-xs md:text-sm text-slate-600 transition-all shadow-sm">
            {technology}
          </div>
        ))}
      </div>
      <ul className="list-none md:list-disc">
        {work_experience.points.map((point) => (
          <li key={point} className="font-normal text-gray-700 dark:text-gray-400">
            {point}
          </li>
        ))}
      </ul>
    </a>
  );
}
