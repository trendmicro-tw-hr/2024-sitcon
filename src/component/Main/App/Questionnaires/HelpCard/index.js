import React, { useContext, useEffect } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { FaRegLightbulb } from "react-icons/fa";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import QuestionnairesContext from "../../../../../context/questionnaires";

export default function HelpCard({ step, index }) {
  const {
    ctxValue: { questions, step: currentStep, questionsForm: { getValues } },
    setQuestionNo,
    setNextText,
  } = useContext(QuestionnairesContext);
  const {
    title = "你知道嗎",
    answer = "",
    description = "",
    chart,
  } = questions[index]?.help ?? {};

  useEffect(() => {
    if (currentStep === step) {
      setQuestionNo(index + 1);
      setNextText("下一題");
    }
  }, [setNextText, currentStep, step, setQuestionNo, index]);

  ChartJS.register(ArcElement, Tooltip, Legend, Colors, ChartDataLabels);

  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <CardHeader className="flex gap-3">
        <FaRegLightbulb className="w-10 h-10" />
        <div className="flex">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        {chart && (
          <Doughnut
            className="mt-5"
            data={{
              labels: chart.labels,
              datasets: [
                {
                  data: chart.data,
                },
              ],
            }}
            options={{
              plugins: {
                datalabels: {
                  display: true,
                  color: "white",
                },
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        )}
        {answer && (
          <>
            <br />
            <Divider />
            <br />
            {getValues(`answer-${index}`) === answer
              ? <p className="text-green-600">恭喜你答對了！</p>
              : <>
                <p>
                  <span>您的選擇為：</span>
                  <span className="text-red-600">{getValues(`answer-${index}`)}</span>
                </p>
                <p>
                  <span>正確答案為：</span>
                  <span dangerouslySetInnerHTML={{ __html: answer }} className="text-green-600" />
                </p>
              </>
            }
          </>
        )}
      </CardBody>
    </Card>
  );
}
