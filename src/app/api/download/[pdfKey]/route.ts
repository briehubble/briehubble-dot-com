import { NextRequest } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "@/app/lib/r2";

export async function GET(
  _request: NextRequest,
  context: { params: { pdfKey: string } }
) {
  const { pdfKey } = context.params;
  console.log(pdfKey);

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
    console.log("error", err);
  }
}
