import AwayArrow from './AwayArrow';

export default function Footer() {
  return (
    <div className="mb-0 mt-14">
      <div
        id="contact"
        className="flex justify-end gap-24 py-12 text-white bg-orange-400 px-28"
      >
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
      <div className="py-4 text-xs text-white bg-orange-500 px-28">
        <span>
          <a href="#" className="font-mono">
            &copy; Joel Mwala 2024
          </a>
        </span>
      </div>
    </div>
  );
}
