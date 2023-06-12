
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function ConfirmPurchase({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div >
      <h2>Confirm Purchase</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            Ready to buy?
          </label>
          {errors.checkbox && (
            <p>Confirm purchase to proceed</p>
          )}
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}
