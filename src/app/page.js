import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hi welcome to My recipe app</h1>
      <Link href={'recipe-list'}>Explore recipes</Link>
    </div>
  );
}
