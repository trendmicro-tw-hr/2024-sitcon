import React, { useContext } from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Trans } from "react-i18next";

import QuestionnairesContext from "../../../../../context/questionnaires";

export default function WelcomeCard({ step }) {
  const {
    ctxValue: { step: currentStep },
  } = useContext(QuestionnairesContext);

  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <CardHeader className="flex gap-3 text-2xl">
        <div className="flex">趨勢科技 ft. AI，世界資安的守護者</div>
      </CardHeader>
      <Divider />
      <CardBody className="text-lg">
        <p>
          <Trans i18nKey="info_1" ns="welcome_card">
            「擋住網路攻擊，不是Bug，是我們的Feature！」
          </Trans>
        </p>
        <br />
        <p>
          歡迎參加趨勢 SITCON 2024
          限定活動，完成問卷與Instagram活動，就可參加HomePod mini抽獎喲！
        </p>
        <p>好奇趨勢科技充滿挑戰與樂趣的工作日常嗎？歡迎找攤位工作人員聊聊！</p>
      </CardBody>
    </Card>
  );
}
