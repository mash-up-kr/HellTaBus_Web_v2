import React, { useState } from 'react';
import { Age, Gender, Nickname, BodyInfo, Split } from '../../components';

interface SurveyState {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  split: number;
}

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT: 'split',
};

function Survey(): JSX.Element {
  const initState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    split: 0,
  };

  const [currentPage, setCurrentPage] = useState<number>(2);
  const [surveyState, setSurveyState] = useState<SurveyState>(initState);
  const setState = (key: string) => (value: string | number) => {
    setSurveyState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const setPageCount = (newPageCount: number) => {
    setCurrentPage(newPageCount);
  };

  switch (currentPage) {
    case 1:
      return (
        <Nickname
          nickname={surveyState.nickname}
          setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
          setPageCount={setPageCount}
        />
      );
    case 2:
      return (
        <Gender
          gender={surveyState.gender}
          setGender={setState(SURVEY_STATE_KEY.NICKNAME)}
          setPageCount={setPageCount}
        />
      );
    case 3:
      return (
        <Age
          age={surveyState.age}
          setAge={setState(SURVEY_STATE_KEY.AGE)}
          setPageCount={setPageCount}
        />
      );
    case 4:
      return (
        <BodyInfo
          weight={surveyState.weight}
          height={surveyState.height}
          setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
          setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
          setPageCount={setPageCount}
        />
      );
    case 5:
      return <Split />;
    default:
      return (
        <Nickname
          nickname={surveyState.nickname}
          setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
          setPageCount={setPageCount}
        />
      );
  }
}

export default Survey;
