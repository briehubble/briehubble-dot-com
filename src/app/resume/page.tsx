'use client';

async function handleDownload() {
    const fileUrl = 'https://nlgubwdrwbndabug.public.blob.vercel-storage.com/BrieHubbleProfile-KD7riWUzcMWnnuN82UDS7f8qKji4CP.pdf';
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'BrieHubbleProfile.pdf';
    anchor.target = "_blank";
    anchor.click();
}

export default function Page() {
  return (
    <>
      <p>Resume Page</p>
      <button
        type="button"
        className="rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
        onClick={handleDownload}
      >
        Download
      </button>
    </>
  );
}
