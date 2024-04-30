import React from "react";
import cl from "./Budget.module.css";
import GreyText from "../../../components/UI/GreyText/GreyText";
import BudgetInput from "../BudgetInput/BudgetInput";
const Budget = ({
  className,
  taskInformation,
  setTaskInformation,
  tonConstant,
}) => {

   
    
  return (
    <div className={className ? [className, cl.Budget].join(" ") : cl.Budget}>
      <GreyText className={cl.GreyText}> Ваш бюджет </GreyText>
      <BudgetInput
        tonConstant={tonConstant}
        setTonValue={(e) =>
          setTaskInformation({ ...taskInformation, tonValue: e })
        }
        tonValue={taskInformation.tonValue}
        budget={taskInformation.budget}
        setBudget={(e) => {
          setTaskInformation({ ...taskInformation, budget: e , tonValue :   (Number(e.replaceAll(' ' , '')) / tonConstant ).toFixed(2)  });

        }}
      />
    </div>
  );
};

export default Budget;
