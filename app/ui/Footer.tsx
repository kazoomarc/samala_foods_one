import Link from 'next/link';
import AwayArrow from './AwayArrow';

export default function Footer() {
  return (
    <div className="mb-0 mt-14">
      <div className="justify-between gap-24 px-4 py-12 bg-gray-300 _sm:flex _sm:flex-wrap md:justify-end _text-white _bg-orange-400 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold _text-2xl _sm:text-base ">opening hours</h3>

          <div className="mt-3 space-y-1">
            <p className="font-mono text-xs">BREAKFAST</p>
            <p className="font-mono text-xs">7:00 - 9:00</p>
          </div>

          <div className="mt-3 space-y-1">
            <p className="font-mono text-xs">LUNCH</p>
            <p className="font-mono text-xs">11:00 - 2:00</p>
          </div>

          <div className="mt-3 space-y-1">
            <p className="font-mono text-xs">DINNER</p>
            <p className="font-mono text-xs">06:00 - 11:00</p>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <h3 className="font-bold _text-2xl _sm:text-base">contact</h3>
          <div className="mt-3 space-y-1">
            <p className="font-mono text-xs">info@samalafoods.com</p>
            <p className="font-mono text-xs">(265) 889-9955-88</p>
            <p className="font-mono text-xs">(265) 983-2285-22</p>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <h3 className="font-bold _text-2xl _sm:text-base">social</h3>
          <div className="mt-3 space-y-1">
            <Link href="https://x.com/datamoree">
              <div className="text-xs font-mono flex gap-[2px] p-[2px]">
                <span>(x) twitter</span>
                <AwayArrow className="size-2" />
              </div>
            </Link>

            <Link href="https://x.com/datamoree">
              <div className="text-xs font-mono flex gap-[2px] p-[2px]">
                <span>instagram</span>
                <AwayArrow className="size-2" />
              </div>
            </Link>

            <Link href="https://x.com/datamoree">
              <div className="text-xs font-mono flex gap-[2px] p-[2px]">
                <span>facebook</span>
                <AwayArrow className="size-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 text-xs text-white bg-black _bg-orange-500 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <span>
          <Link href="https://x.com/datamoree" className="font-mono">
            &copy; Joel Mwala 2024
          </Link>
        </span>
      </div>
    </div>
  );
}
