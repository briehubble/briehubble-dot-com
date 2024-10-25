'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/about");
  }, [router]);

  return <div></div>;
}

export default Home;
