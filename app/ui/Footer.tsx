import AwayArrow from './AwayArrow';

export default function Footer() {
  return (
    <div className="mb-0 mt-14">
      <div
        id="contact"
        className="flex justify-end gap-24 py-12 _text-white _bg-orange-400 bg-gray-300 px-28"
      >
        <div className="">
          <h3 className="font-bold">opening hours</h3>

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

        <div className="">
          <h3 className="font-bold">contact</h3>
          <div className="mt-3 space-y-1">
            <p className="font-mono text-xs">info@samalafoods.com</p>
            <p className="font-mono text-xs">(265) 889-9955-88</p>
            <p className="font-mono text-xs">(265) 983-2285-22</p>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold">social</h3>
          <div className="mt-3 space-y-1">
            <div className="text-xs font-mono flex gap-[2px]">
              <span>(X) twitter</span>
              <AwayArrow className="size-2" />
            </div>
            <div className="text-xs font-mono flex gap-[2px]">
              <span>instagram</span>
              <AwayArrow className="size-2" />
            </div>

            <div className="text-xs font-mono flex gap-[2px]">
              <span>facebook </span>
              <AwayArrow className="size-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-xs text-white _bg-orange-500 bg-black px-28">
        <span>
          <a href="#" className="font-mono">
            &copy; Joel Mwala 2024
          </a>
        </span>
      </div>
    </div>
  );
}
