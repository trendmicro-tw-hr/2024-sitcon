import React, { useContext, useEffect } from "react";
import { Card, CardBody, Divider, Input, CardHeader, Checkbox, ScrollShadow } from "@nextui-org/react";
import { BsChatTextFill } from "react-icons/bs";
import { FaUserAlt, FaPhoneAlt, FaSchool } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Controller } from "react-hook-form";
import { MdSchool, MdGrade } from "react-icons/md";
import { useTranslation } from "react-i18next";

import QuestionnairesContext from "../../../../../context/questionnaires";
import Terms from "./Terms";

export default function ThanksCard({ step }) {
  const {
    ctxValue: {
      step: currentStep,
      personalForm: { control },
    },
    setMaxStep,
  } = useContext(QuestionnairesContext);
  const { t } = useTranslation("thanks");

  useEffect(() => {
    setMaxStep(step);
  }, [setMaxStep, step]);

  const renderForm = () => {
    if (!control) return null;

    return (
      <>
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="name"
              label={t("姓名")}
              labelPlacement="outside"
              placeholder="Apple Hong"
              size="lg"
              startContent={
                <FaUserAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="email"
              type="email"
              label={t("email")}
              labelPlacement="outside"
              placeholder="apple_hong@trendmicro.com"
              size="lg"
              startContent={
                <HiOutlineMailOpen className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          )}
        />
        <Controller
          name="tel"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="tel"
              label={t("電話")}
              labelPlacement="outside"
              placeholder="0223789666"
              size="lg"
              startContent={
                <FaPhoneAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

          )}
        />

        <Controller
          name="school"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="school"
              label={t("學校")}
              labelPlacement="outside"
              placeholder="趨勢大學"
              size="lg"
              startContent={
                <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

          )}
        />

        <Controller
          name="department"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="department"
              label={t("系所")}
              labelPlacement="outside"
              placeholder="資安防毒系"
              size="lg"
              startContent={
                <MdSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

          )}
        />

        <Controller
          name="grade"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Input
              {...field}
              className="flex-1"
              key="grade"
              label={t("年級")}
              labelPlacement="outside"
              placeholder="四年級"
              size="lg"
              startContent={
                <MdGrade className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

          )}
        />
        <p>個人資料同意書</p>
        <ScrollShadow className="w-full h-[200px] pb-5">
          <Terms />
        </ScrollShadow>
        <Controller
          name="getInfo"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Checkbox
              {...field}
              className="flex-1"
              key="getInfo"
              size="lg"
            >
              我同意
            </Checkbox>

          )}
        />
      </>
    );
  };
  return (
    <Card className={`flex-0 w-full ${currentStep !== step ? "h-0" : ""}`}>
      <CardHeader className="flex gap-3">
        <BsChatTextFill className="w-10 h-10" />
        <div className="flex flex-col">
          <p className="text-2xl">{t("header-1")}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex py-5 gap-4 flex-col">{renderForm()}</div>
      </CardBody>
    </Card>
  );
}
