import Image from "next/image";

async function getImage() {
  return "https://nlgubwdrwbndabug.public.blob.vercel-storage.com/BrieHubble-FPBsRuvPAV8idNCxDO9rWNtve5iR7e.jpeg";
}

export default async function ProfileImage() {
  const imageUrl = await getImage();

  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width="400" height="400" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
