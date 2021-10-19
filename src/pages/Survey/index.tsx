import styles from './index.module.scss'
import { Fragment } from 'react'
import { Age, Gender, Nickname, BodyInfo, Split } from '../../components/survey'
import useForm from '../../hooks/useForm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
  const initialState = {
    nickname: '',
    gender: '',
    age: 0,
    height: 0,
    weight: 0,
    split: 0,
  }

  const { currentPage, surveyState, setState, setPageCount } = useForm({
    initialState,
  })

  const components = [
    <Nickname
      nickname={surveyState.nickname}
      setNickname={setState(SURVEY_STATE_KEY.NICKNAME)}
      setPageCount={setPageCount}
    />,
    <Gender
      nickname={surveyState.nickname}
      gender={surveyState.gender}
      setGender={setState(SURVEY_STATE_KEY.GENDER)}
      setPageCount={setPageCount}
    />,
    <Age
      nickname={surveyState.nickname}
      setAge={setState(SURVEY_STATE_KEY.AGE)}
      setPageCount={setPageCount}
    />,
    <BodyInfo
      nickname={surveyState.nickname}
      setHeight={setState(SURVEY_STATE_KEY.HEIGHT)}
      setWeight={setState(SURVEY_STATE_KEY.WEIGHT)}
      setPageCount={setPageCount}
    />,
    <Split setSplit={setState(SURVEY_STATE_KEY.SPLIT)} setPageCount={setPageCount} />,
  ]

  return components.map((component, page) => {
    if (currentPage === page) {
      return (
        <div className={styles.container} key={`component-${page}`}>
          <header className={styles.header}>
            <button
              className={styles.previous__button}
              onClick={() => setPageCount(currentPage - 1)}
            >
              <ArrowBackIcon />
            </button>
          </header>
          <Fragment>{component}</Fragment>
        </div>
      )
    }
  })
}

export default Survey
