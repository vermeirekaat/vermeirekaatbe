import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound () {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 1000);
  }, []);

  return <p>Redirect...</p>
}