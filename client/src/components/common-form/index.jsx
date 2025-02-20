import { Button } from "../ui/button";
import FormControls from "./form-control";


function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formControls={formControls}
        formData={formData}
        buttonText={buttonText}
        setFormData={setFormData}
      />
      <Button
        disabled={isButtonDisabled}
        type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
