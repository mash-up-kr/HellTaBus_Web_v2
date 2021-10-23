import React, { useState } from 'react';
import styles from './weight.module.scss';
import classNames from 'classnames/bind';
import ProgressBar from '../ProgressBar/ProgressBar';

const { container, title, common_input, error_msg, next__button } = styles;

interface Props {
  nickname: string;
  weight: number;
  setWeight: (value: number) => void;
  setPageCount: (page: number) => void;
}

function Weight({ nickname, weight, setWeight, setPageCount }: Props): JSX.Element {
  const [error, setError] = useState<boolean | string>(!weight);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
  };

  const onSubmit = () => {
    setPageCount(5);
  };

  return (
    <>
      <ProgressBar ratio={3} />
      <div className={container}>
        <h1 className={classNames(title)}>
          {nickname}님의 <span>몸무게</span>를 알려주세요
        </h1>
        <input
          className={classNames(common_input)}
          type="text"
          placeholder="00"
          value={weight}
          onChange={onChange}
        />
        {error && <p className={classNames(error_msg)}>{error}</p>}
        <button
          className={classNames(next__button)}
          type="button"
          onClick={onSubmit}
          disabled={!!error}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default Weight;
