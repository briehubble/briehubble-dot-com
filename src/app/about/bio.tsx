import Image from "next/image";

export default function Bio(props: { imageUrl: string; bio: string }) {
  return (
    <>
      <Image src={props.imageUrl} alt="s3url" width="400" height="400" />
      <br />
      <p>{props.bio}</p>
    </>
  );
}
