import { NextRequest } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/app/lib/r2";

type Params = Promise<{ pdfKey: string}>;

export async function GET(
  _request: NextRequest,
  { params }: { params: Params }
) : Promise<Response> {
  const { pdfKey } = await params;

  try {
    const pdf = await r2.send(
      new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: pdfKey,
      })
    );

    if (!pdf) {
      throw new Error("pdf not found.");
    }

    return new Response(pdf.Body?.transformToWebStream(), {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (err) {
    console.log("Error fetching pdf from S3:", err);
    return new Response("Error fetching pdf from S3");
  }
}
