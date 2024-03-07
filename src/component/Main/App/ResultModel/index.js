import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import QuestionnairesContext from "../../../../context/questionnaires";

export default function ResultModel({ isOpen, onOpenChange }) {
  const {
    ctxValue: { questions, questionsForm },
  } = useContext(QuestionnairesContext);
  const { getValues: getQuestionsFormValues } = questionsForm;
  const [resultData, setResultData] = useState([]);
  const { t } = useTranslation(["questionnaires", "result"]);

  useEffect(() => {
    if (isOpen) {
      const result = [];
      Object.keys(getQuestionsFormValues()).forEach((key) => {
        const questionsIdx = key.split("answer-")[1];
        if (questionsIdx) {
          let answer = getQuestionsFormValues()[key];
          if (Array.isArray(answer)) {
            const answerValue = (questions[questionsIdx].answers ?? []).reduce(
              (prev, current) => (prev[current.value] = current.name) && prev,
              []
            );
            answer.forEach((val, idx) => {
              answer[idx] = t(answerValue[val] ?? val);
            });
            answer = answer.join(", ");
          }

          result[questionsIdx] = {
            questions: questions[questionsIdx].question,
            answer: answer,
          };
        }
      });
      setResultData(result);
    }
  }, [isOpen, getQuestionsFormValues, questions, t]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("header", { ns: "result" })}
            </ModalHeader>
            <ModalBody>
              <Accordion>
                {resultData.map((data, idx) => {
                  return (
                    <AccordionItem
                      key={`accordion-item-${idx}`}
                      aria-label={`question ${idx}`}
                      title={t(data.questions)}
                    >
                      <strong className="text-xl">
                        {data.answer || t("empty", { ns: "result" })}
                      </strong>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </ModalBody>
            <ModalFooter className="justify-center flex flex-col">
              <p className="text-2xl text-TrendMicro text-center">
                {t("footer", { ns: "result" })}
              </p>
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/trendcareerstw?igsh=OGQ5ZDc2ODk2ZA=="
                className="text-2xl text-center text-blue-600"
              >
                別忘了前往趨勢IG粉絲頁，繼續完成限動分享任務兌換扭蛋乙次！
              </a>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
