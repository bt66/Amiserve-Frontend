// import styles from "../styles/styles.module.scss";

export default function FormCard({ children, currentStep, prevFormStep, nextStep }) {
  return (
    <div >
      {currentStep < 3 && (
        <>

          <span >Step {currentStep + 1} of 3</span>
        </>
      )}
      {children}
      {/* {currentStep > 0 && (
        <button
          
          onClick={prevFormStep}
          type="button"
        >
          back
        </button>
      )} */}
    </div>
  );
}
