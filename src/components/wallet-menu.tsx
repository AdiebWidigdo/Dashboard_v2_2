import { FunctionComponent, useEffect } from "react";

type WalletMenuType = {
  onClose?: () => void;
};

const WalletMenu: FunctionComponent<WalletMenuType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="relative w-full flex flex-col items-end justify-start py-20 px-6 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%] overflow-auto text-left text-base text-gray-100 font-dm-sans"
      data-animate-on-scroll
    >
      <div className="rounded-lg bg-colors-white-100 shadow-[0px_2px_20px_rgba(0,_0,_0,_0.15)] flex flex-col items-end justify-start p-8 gap-[8px]">
        <div className="flex flex-col items-end justify-start gap-[8px]">
          <div className="self-stretch flex flex-row items-end justify-start gap-[8px]">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-[11px] gap-[16px] border-[1px] border-solid border-whitesmoke-400">
              <div className="relative leading-[100%] uppercase font-medium">
                $SOL
              </div>
              <b className="relative text-xl leading-[100%] uppercase font-baloo-bhaina-2 text-dimgray">
                0.00
              </b>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-center py-1.5 px-[9px] gap-[22px] font-baloo-bhaina-2 border-[1px] border-solid border-whitesmoke-400">
              <div className="relative leading-[100%] uppercase font-medium font-dm-sans">
                $TQ
              </div>
              <b className="relative text-xl leading-[100%] uppercase text-dimgray">
                0.00
              </b>
              <div className="relative rounded bg-dimgray w-[29px] h-[27.6px] overflow-hidden shrink-0 text-[12.98px] text-colors-white-100">
                <div className="absolute top-[calc(50%_-_9.1px)] left-[calc(50%_-_12.5px)] flex flex-col items-center justify-start">
                  <b className="relative leading-[100%] uppercase">BUY</b>
                  <b className="relative text-[6.49px] leading-[100%] uppercase">
                    $TQ
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-1.5 px-[9px] gap-[35px] border-[1px] border-solid border-whitesmoke-400">
            <div className="relative leading-[100%] uppercase font-medium">
              Wallet
            </div>
            <b className="relative text-xl leading-[100%] uppercase font-baloo-bhaina-2 text-dimgray">
              0x923749237493
            </b>
            <img
              className="relative rounded w-[29px] h-[27.6px] overflow-hidden shrink-0"
              alt=""
              src="/phcopybold.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-tomato h-8 flex flex-row items-center justify-center py-0 px-16 box-border gap-[8px] text-sm text-colors-white-100">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/solarexitbold.svg"
          />
          <b className="relative tracking-[0.02em] leading-[100%]">
            Disconnect
          </b>
        </div>
      </div>
    </div>
  );
};

export default WalletMenu;
