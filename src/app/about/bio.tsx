import Image from "next/image";

export default function Bio(props: { imageUrl: string; bio: string }) {
  return (
    <div className="md:flex gap-4">
      <Image src={props.imageUrl} alt="s3url" width="400" height="400" />
      <p>{props.bio}</p>
    </div>
  );
}
