import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>This page was not not found</h1>
      <Link href={'/'}>Go back to home page</Link>
    </div>
  );
}
