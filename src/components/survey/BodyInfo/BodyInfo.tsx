import React, { useState } from 'react';
import styles from './bodyInfo.module.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import classNames from 'classnames/bind';

const { container, title, s_height_info, s_weight_info, s_body_input, error_msg, next__button } =
  styles;

interface Props {
  nickname: string;
  weight: number;
  height: number;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;
  setPageCount: (page: number) => void;
}

function BodyInfo({
  nickname,
  weight,
  height,
  setHeight,
  setWeight,
  setPageCount,
}: Props): JSX.Element {
  const [heightError, setHeightError] = useState<boolean | string>(!height);
  const [weightError, setWeightError] = useState<boolean | string>(!weight);

  const changeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setHeight(+value);
    if (!value) {
      setHeightError('정보를 입력해 주세요');
    } else if (Number.isNaN(+value)) {
      setHeightError('키는 숫자만 입력 가능합니다.');
    } else if (+value > 300) {
      // setHeight(+value);
      setHeightError(`정말 ${value}cm 맞으신가요!?🤔`);
    } else {
      setHeightError(false);
    }
  };

  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setWeight(+value);

    if (!value) {
      setWeightError('정보를 입력해 주세요');
    } else if (Number.isNaN(+value)) {
      setWeightError('몸무게는 숫자만 입력 가능합니다.');
    } else if (+value > 1000) {
      setWeightError(`정말 ${value}kg 맞으신가요!?🤔`);
    } else {
      setWeightError(false);
    }
  };

  const onSubmit = () => {
    setPageCount(4);
  };

  return (
    <>
      <ProgressBar ratio={4} />
      <div className={classNames(container)}>
        <h1 className={classNames(title)}>
          {nickname}님의 <span>키&몸무게</span>를 알려주세요
        </h1>
        <div className={classNames(s_height_info)}>
          <span>키</span>
          <input
            className={classNames(s_body_input)}
            type="text"
            value={height}
            onChange={changeHeight}
          />
          <span> cm</span>
        </div>
        {heightError && <span className={classNames(error_msg)}>{heightError}</span>}

        <div className={classNames(s_weight_info)}>
          <span>몸무게</span>
          <input
            className={classNames(s_body_input)}
            type="text"
            value={weight}
            onChange={changeWeight}
          />
          <span> kg</span>
        </div>
        {weightError && <span className={classNames(error_msg)}>{weightError}</span>}

        <button
          className={classNames(next__button)}
          type="button"
          onClick={onSubmit}
          disabled={!!weightError || !!heightError}
        >
          다음
        </button>

        {/* {typeof error === 'string' && (
          <div className={styles.error__icon}>
            <ErrorOutlineIcon />
          </div>
        )} */}
        {/* {error && <span className={styles.error_msg}>{error}</span>} */}
        <button
          className={classNames(next__button)}
          type="button"
          onClick={onSubmit}
          disabled={!!heightError}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default BodyInfo;
