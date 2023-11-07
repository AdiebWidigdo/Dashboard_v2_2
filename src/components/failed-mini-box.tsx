import { FunctionComponent, useEffect } from "react";

type FailedMiniBoxType = {
  onClose?: () => void;
};

const FailedMiniBox: FunctionComponent<FailedMiniBoxType> = ({ onClose }) => {
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
      className="h-full flex flex-col items-end justify-end py-6 px-0 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] overflow-auto text-left text-base text-dimgray font-dm-sans"
      data-animate-on-scroll
    >
      <div className="flex flex-col items-end justify-end">
        <div className="flex flex-col items-center justify-start">
          <div className="rounded-lg bg-colors-white-100 shadow-[0px_0px_15px_rgba(0,_0,_0,_0.15)] w-[460px] overflow-hidden flex flex-row items-center justify-start py-4 px-8 box-border gap-[8px]">
            <b className="relative inline-block w-[372px] shrink-0">{`Sorry your Transaction Failed! 😔😔😔  `}</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/octiconx12.svg"
            />
          </div>
        </div>
        <div className="relative rounded-lg bg-tomato w-[239px] h-0.5" />
      </div>
    </div>
  );
};

export default FailedMiniBox;
