// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { Textarea } from "../ui/textarea";
// import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../ui/select";

// function FormControls({ formControls = [], formData, setFormData }) {
//   function renderComponentByType(controlItem) {
//     switch (controlItem.componentType) {
//       case "input":
//         return (
//           <Input
//             id={controlItem.name}
//             name={controlItem.name}
//             placeholder={controlItem.placeholder}
//             type={controlItem.type}
//             value={formData[controlItem.name] || ""}
//             onChange={(e) =>
//               setFormData({ ...formData, [controlItem.name]: e.target.value })
//             }
//           />
//         );
//       case "textarea":
//         return (
//           <Textarea
//             id={controlItem.name}
//             name={controlItem.name}
//             placeholder={controlItem.placeholder}
//             value={formData[controlItem.name] || ""}
//             onChange={(e) =>
//               setFormData({ ...formData, [controlItem.name]: e.target.value })
//             }
//           />
//         );
//       case "select":
//         return (
//           <Select
//             id={controlItem.name}
//             name={controlItem.name}
//             value={formData[controlItem.name] || ""}
//             onChange={(e) =>
//               setFormData({ ...formData, [controlItem.name]: e.target.value })
//             }
//           >
//             <SelectTrigger>
//               <SelectValue placeholder={controlItem.placeholder} />
//             </SelectTrigger>
//             <SelectContent>
//               {controlItem.options.map((option) => (
//                 <SelectItem key={option.id} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         );
//       default:
//         return null;
//     }
//   }

//   return (
//     <div className="flex flex-col gap-3">
//       {formControls.map((controlItem) => (
//         <div key={controlItem.name}>
//           <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
//           {renderComponentByType(controlItem)}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FormControls;
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getControlItem) {
    let element = null;
//     const currentControlItemValue = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            // value={currentControlItemValue}
            // onChange={(event) =>
            //   setFormData({
            //     ...formData,
            //     [getControlItem.name]: event.target.value,
            //   })
            // }
          />
        );
        break;
      case "select":
        element = (
          <Select
            // onValueChange={(value) =>
            //   setFormData({
            //     ...formData,
            //     [getControlItem.name]: value,
            //   })
            // }
            // value={currentControlItemValue}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            // value={currentControlItemValue}
        //     onChange={(event) =>
        //       setFormData({
        //         ...formData,
        //         [getControlItem.name]: event.target.value,
        //       })
        //     }
          />
        );
        break;

      default:
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            // value={currentControlItemValue}
            // onChange={(event) =>
            //   setFormData({
            //     ...formData,
            //     [getControlItem.name]: event.target.value,
            //   })
            // }
          />
        );
        break;
    }

    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controleItem) => (
        <div key={controleItem.name}>
          <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
          {renderComponentByType(controleItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;