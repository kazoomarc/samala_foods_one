import Link from 'next/link';

export default function Header() {
  return (
    <div className="py-4 text-base font-medium bg-black _bg-orange-700">
      <div className="px-28">
        <nav className="flex justify-between">
          <div>
            <span className="font-playfair tracking-wider text-lg text-white font-bold">
              <Link href={'/'}>SAMALA</Link>
            </span>
          </div>
          <div className="flex gap-8 text-white tracking-wide">
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
