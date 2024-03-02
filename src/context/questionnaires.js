import React, { useCallback, useReducer } from "react";

import * as questionnairesActions from "../store/actions/questionnaires.action";
import azurePageReducer, {
  initialState,
} from "../store/reducers/questionnaires.reducer";

const QuestionnairesContext = React.createContext({});

export const QuestionnairesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(azurePageReducer, initialState);

  const setStep = useCallback((step) => {
    dispatch(questionnairesActions.setStep(step));
  }, []);

  const setMaxStep = useCallback((step) => {
    dispatch(questionnairesActions.setMaxStep(step));
  }, []);

  const setQuestions = useCallback((questions) => {
    dispatch(questionnairesActions.setQuestions(questions));
  }, []);

  const setKey = useCallback((key) => {
    dispatch(questionnairesActions.setKey(key));
  }, []);

  const setQuestionNo = useCallback((no) => {
    dispatch(questionnairesActions.setQuestionNo(no));
  }, []);

  const setNextText = useCallback((nextText) => {
    dispatch(questionnairesActions.setNextText(nextText));
  }, []);

  const setLoading = useCallback((loading) => {
    dispatch(questionnairesActions.setLoading(loading));
  }, []);

  const setQuestionsForm = useCallback((questionsForm) => {
    dispatch(questionnairesActions.setQuestionsForm(questionsForm));
  }, []);

  const setPersonalForm = useCallback((personalForm) => {
    dispatch(questionnairesActions.setPersonalForm(personalForm));
  }, []);

  const setFormId = useCallback((id) => {
    dispatch(questionnairesActions.setFormId(id));
  }, []);

  const setDisable = useCallback((disable) => {
    dispatch(questionnairesActions.setDisable(disable));
  }, []);

  const setEnableI18n = useCallback((enableI18n) => {
    dispatch(questionnairesActions.setEnableI18n(enableI18n));
  }, []);


  const resetToDefault = useCallback(() => {
    dispatch(questionnairesActions.resetToDefault());
  }, []);

  const value = {
    ctxValue: state,
    setStep,
    setMaxStep,
    setQuestions,
    setKey,
    setQuestionNo,
    setNextText,
    setLoading,
    setQuestionsForm,
    setPersonalForm,
    setFormId,
    setDisable,
    setEnableI18n,
    resetToDefault,
  };

  return (
    <QuestionnairesContext.Provider {...{ value }}>
      {children}
    </QuestionnairesContext.Provider>
  );
};

export default QuestionnairesContext;
