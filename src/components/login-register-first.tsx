import { FunctionComponent } from "react";

type LoginRegisterFirstType = {
  onClose?: () => void;
};

const LoginRegisterFirst: FunctionComponent<LoginRegisterFirstType> = ({
  onClose,
}) => {
  return (
    <div className="relative rounded-lg bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] box-border w-[402px] flex flex-col items-center justify-center py-8 px-0 gap-[8px] max-w-full max-h-full overflow-auto text-center text-xl text-dimgray font-dm-sans border-[1px] border-solid border-whitesmoke-300">
      <div className="flex flex-col items-center justify-center py-[42px] px-0 z-[0]">
        <img
          className="relative w-80 h-44 object-cover"
          alt=""
          src="/image-35@2x.png"
        />
      </div>
      <b className="relative leading-[100%] z-[1]">
        Please Login/Register First
      </b>
      <div className="relative text-sm tracking-[0.02em] leading-[120%] font-medium z-[2]">
        Access exclusive content and features.
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute my-0 mx-[!important] top-[19px] left-[359px] w-6 h-6 overflow-hidden shrink-0 z-[3]">
        <img
          className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </button>
    </div>
  );
};

export default LoginRegisterFirst;
