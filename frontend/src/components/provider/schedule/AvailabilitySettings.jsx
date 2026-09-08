import { useState } from "react";
import SlotTime from "../../common/SlotTime";
import { useProviderAvailability } from "../../../hooks/useProvider";

const AvailabilitySettings = () => {
  const [time, setTime] = useState({
    startTime: "",
    endTime: "",
  });

  const { providerAvailabilityMutation } = useProviderAvailability();

  const submitTime = async () => {
    if (!time.startTime || !time.endTime) {
      return;
    }

    try {
      await providerAvailabilityMutation.mutateAsync({ time }, {
        onSuccess: () => {
          setTime({
            startTime: "",
            endTime: "",
          })
        }
      });
    } catch (error) {
      console.error("Availability update error:", error);
    }
  };

  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <h1 className="text-lg font-semibold mb-4 text-text">
        Availability Settings
      </h1>

      <SlotTime
        label="Working Hours"
        startTime={time.startTime}
        endTime={time.endTime}
        onStartTimeChange={(value) => {
          setTime((prev) => ({
            ...prev,
            startTime: value,
          }));
        }}
        onEndTimeChange={(value) => {
          setTime((prev) => ({
            ...prev,
            endTime: value,
          }));
        }}
        date={new Date()}
      />

      <button
        type="button"
        onClick={submitTime}
        disabled={
          !time.startTime ||
          !time.endTime ||
          providerAvailabilityMutation.isPending
        }
        className="
          mt-5
          w-full
          py-2.5
          rounded-xl
          bg-green-600
          text-white
          font-semibold
          hover:bg-green-700
          transition
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {providerAvailabilityMutation.isPending
          ? "Saving..."
          : "Save Availability"}
      </button>
    </div>
  );
};

export default AvailabilitySettings;