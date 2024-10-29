import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/app/lib/r2";

type Params = Promise<{ imageKey: string }>;

export async function GET(
  _request: NextRequest,
  { params }: { params: Params }
): Promise<Response> {
  const { imageKey } = await params;

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: imageKey,
    });

    const url = await getSignedUrl(r2, command);

    return new NextResponse(url);
  } catch (error) {
    console.error("Error fetching image from S3:", error);
    return new Response("Error fetching image from S3");
  }
}
