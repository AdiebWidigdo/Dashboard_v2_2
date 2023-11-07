import { FunctionComponent } from "react";

type TransactionCompletedType = {
  onClose?: () => void;
};

const TransactionCompleted: FunctionComponent<TransactionCompletedType> = ({
  onClose,
}) => {
  return (
    <div className="relative rounded-lg bg-colors-white-100 shadow-[0px_3.5px_5.5px_rgba(0,_0,_0,_0.02)] box-border flex flex-col items-center justify-center p-8 gap-[8px] max-w-full max-h-full overflow-auto text-center text-5xl text-dimgray font-dm-sans border-[1px] border-solid border-whitesmoke-300">
      <img
        className="relative rounded-181xl w-40 h-40 object-cover z-[0]"
        alt=""
        src="/animation-lk0o43e0-small-1@2x.png"
      />
      <b className="self-stretch relative leading-[100%] z-[1]">
        Transaction Completed
      </b>
      <div className="relative text-base tracking-[0.02em] leading-[120%] font-medium inline-block w-[505px] z-[2]">
        Your transaction has been successfully processed and recorded! You can
        review it anytime.
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start py-[5px] px-[3px] gap-[8px] z-[3] text-sm text-royalblue">
        <img className="relative w-[18px] h-3" alt="" src="/vector1.svg" />
        <b className="relative tracking-[0.02em] leading-[100%]">
          View on BSC Scan
        </b>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute my-0 mx-[!important] top-[20px] left-[525px] w-6 h-6 overflow-hidden shrink-0 z-[4]">
        <img
          className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </button>
    </div>
  );
};

export default TransactionCompleted;
