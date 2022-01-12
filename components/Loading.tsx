import { FC } from "react";

const Loading: FC = () => {
  return <div className="flex items-center justify-center mt-[15vh]"><div
      className="border-t-transparent w-16 h-16 border-4 border-[rgba(255,255,255,0.7)] border-solid rounded-full animate-spin"></div>
      </div>
};

export default Loading;