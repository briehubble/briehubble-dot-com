import { Education } from "../lib/definitions";

export default function EducationCard(props: { education: Education }) {
  const { education } = props;

  return (
    <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {education.institution}
      </h5>
      <h2>
        {education.degree}: {education.major}
      </h2>
      <h1>{education.timespan}</h1>
      <ul className="list-none md:list-disc">
        {education.points.map((point) => (
          <li key={point} className="font-normal text-gray-700 dark:text-gray-400">
            {point}
          </li>
        ))}
      </ul>
    </a>
  );
}
