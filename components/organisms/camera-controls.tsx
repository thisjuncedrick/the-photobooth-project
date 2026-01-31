import { DefaultControls } from "../molecules/camera-control-inputs";

const CameraControls = () => {
  return (
    <div className='absolute inset-x-0 bottom-6 z-1'>
      <DefaultControls />
    </div>
  );
};

export { CameraControls };
