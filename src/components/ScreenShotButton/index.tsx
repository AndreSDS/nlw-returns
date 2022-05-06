import html2canvas from "html2canvas";
import {Camera, Trash} from "phosphor-react";
import {useState} from "react";
import {Loading} from "../Loading";

interface ScreenShotButtonProps {
  screenShot: string | null;
  onScreenShotTook: (screenShot: string | null) => void;
}

export const ScreenShotButton = ({
  screenShot,
  onScreenShotTook,
}: ScreenShotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenShotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenShot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
        onClick={() => onScreenShotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="bg-zinc-800 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenShot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
};
