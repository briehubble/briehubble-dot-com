import Bio from './bio';
import { fetchAbout } from "../lib/data";

export default async function Page() {
  const about = await fetchAbout();

  return (
    <>
        {about.length > 0 ? (
          <Bio 
            imageUrl={about[about.length - 1].image_url}
            bio={about[about.length - 1].bio}
          />
        ) : (
          <p>Loading bio...</p>
        )}
    </>
  );
}
