
import { useForm } from "react-hook-form";
import { useFormData } from "../../context";

export default function ConfirmPurchase({ formStep, nextFormStep, prevFormStep, editDataStep }) {
  const { setFormValues } = useFormData();
  const { data } = useFormData();

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
    <div className="p-3">
      <h2>Confirm Purchase</h2>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Project Information</p>
          <p>Project title : {data.projectTitle}</p>
          <p>Repository URL : {data.repositoryUrl}</p>
        </div>
        <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" onClick={editDataStep(0)}>
              <div>
                  <p>Edit</p>
              </div>
          </button>
        </div>
      </div>
      <div className="my-2 flex items-center justify-between p-1 rounded-md bg-[#5e0370]">
        <div>
          <p className="text-xl font-bold">Domain And SSL</p>
          <p>SSL Type : {data.ssl_type}</p>
        </div>
        <div>
          <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" onClick={editDataStep(1)}>
              <div>
                  <p>Edit</p>
              </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* <p>Ensure your data entered correctly</p> */}
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            Data is correct?
          </label>
          {errors.checkbox && (
            <p className="text-red-500">Confirm purchase to proceed</p>
          )}
        </div>
        <div className="flex justify-between p-3">
            <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md" onClick={prevFormStep}>
                <div>
                    <p>back </p>
                </div>
            </button>
            <button type="submit" className="bg-[#6400CC] px-5 py-1 rounded-md">
                <div>
                    <p>Next {`>`} </p>
                </div>
            </button>
          </div>
      </form>
    </div>
  );
}
