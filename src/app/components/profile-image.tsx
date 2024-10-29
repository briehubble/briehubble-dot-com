import Image from 'next/image';

const getImage = async () => {
  try {
    const response = await fetch('/api/images/BrieHubble.jpeg');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.text();
    return data
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ProfileImage() {
 const imageUrl = await getImage();
 
  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="s3url" width='400' height='400'/>
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};