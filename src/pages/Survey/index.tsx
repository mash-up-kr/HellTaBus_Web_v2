import { Fragment, useState } from 'react'
import { Age, Nickname, BodyInfo, Split } from '../../components/survey'

interface SurveyState {
  nickname: string
  gender: string
  age: number
  height: number
  weight: number
  split: number
}

const SURVEY_STATE_KEY = {
  NICKNAME: 'nickname',
  AGE: 'age',
  GENDER: 'gender',
  HEIGHT: 'height',
  WEIGHT: 'weight',
  SPLIT: 'split',
}

function Survey(): any {
  const initState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    split: 0,
  }

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [surveyState, setSurveyState] = useState<SurveyState>(initState)

  const setState = (key: string) => (value: string | number) => {
    setSurveyState(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const setPageCount = (newPageCount: number) => {
    setCurrentPage(newPageCount)
  }

  const components = [
    <Age
      age={surveyState.age}
      setAge={setState(SURVEY_STATE_KEY.AGE)}
      setPageCount={setPageCount}
    />,
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
      setPageCount={setPageCount}
    />,

    <BodyInfo
      weight={surveyState.weight}
      height={surveyState.height}
      setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
      setPageCount={setPageCount}
    />,

    <Split
      split={surveyState.split}
      setSplit={setState(SURVEY_STATE_KEY.SPLIT)}
      setPageCount={setPageCount}
    />,
  ]

  return components.map((component, index) => {
    if (currentPage - 1 === index) {
      return (
        <div>
          <header>뒤로가기</header>
          <Fragment key={`${index}`}>{component}</Fragment>
        </div>
      )
    }
  })
}

export default Survey
