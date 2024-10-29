import Image from "next/image";

type AboutProps = {
    imageUrl: string;
    bio: string;
}

export default function Bio(props: AboutProps) {
  return (
    <>
      <Image src={props.imageUrl} alt="s3url" width="400" height="400" />
      <br />
      <p>{props.bio}</p>
    </>
  );
}
