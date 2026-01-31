import { ActionControls, CameraControls } from "../molecules/camera-control-inputs";

const CameraControlContainer = () => {
  return (
    <div className='absolute inset-x-0 bottom-6 z-1'>
      <div
        className='flex size-full items-center justify-evenly gap-3'
        role='toolbar'
        aria-label='Camera controls'
      >
        <CameraControls />
        <ActionControls />
      </div>
    </div>
  );
};

export { CameraControlContainer as CameraControls };
