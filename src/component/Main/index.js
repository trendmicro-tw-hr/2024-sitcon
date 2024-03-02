import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import yaml from "yaml";
import { v4 as uuidV4 } from "uuid";

import QuestionnairesContext from "../../context/questionnaires";
import App from "./App";

import "../../assets/index.css";

export default function Main() {
  const { setQuestions, setLoading, setKey, setFormId, setDisable, setEnableI18n } = useContext(
    QuestionnairesContext
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await axios.get(
      process.env.PUBLIC_URL + "/questionnaires.yml"
    );

    const result = yaml.parse(response.data);
    setKey(result.title);
    setDisable(result.disable)
    setQuestions(result.questionnaires);
    setEnableI18n(result.enableI18n)
    setLoading(false);
  }, [setQuestions, setLoading, setKey, setDisable, setEnableI18n]);

  useEffect(() => {
    fetchData();
    setFormId(uuidV4());
  }, [fetchData, setFormId]);

  return (
    <main className="flex flex-col h-screen max-md:px-1 px-8">
      <App />
    </main>
  );
}
