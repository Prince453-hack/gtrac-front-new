import LockExplosion from "./_components/lock-explosion";
import PadlockAnatomy from "./_components/padlock-anatomy";
import Specifications from "./_components/specifications";

const PadlockContent = () => {
  return (
    <div>
      <Specifications />
      <PadlockAnatomy />
      <LockExplosion />
    </div>
  );
};

export default PadlockContent;
