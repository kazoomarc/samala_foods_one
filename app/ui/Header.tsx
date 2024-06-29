import Link from 'next/link';

export default function Header() {
  return (
    <div className="py-4 text-base font-medium bg-orange-500">
      <div className="px-28">
        <nav className="flex justify-between">
          <div>
            <span className="font-playfair">
              <Link href={'/'}>SAMALA</Link>
            </span>
          </div>
          <div className="flex gap-8">
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
