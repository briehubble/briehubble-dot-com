"use client";

function handleDownload(fileUrl: string) {
  const anchor = document.createElement("a");
  anchor.href = fileUrl;
  anchor.download = "BrieHubbleProfile.pdf";
  anchor.target = "_blank";
  anchor.click();
}

export default function DownloadButton(props: {fileUrl: string}) {
  return (
    <button
      type="button"
      className="rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
      onClick={() => handleDownload(props.fileUrl)}
    >
      Download
    </button>
  );
}
