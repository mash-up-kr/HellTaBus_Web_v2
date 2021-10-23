import React, { useState } from 'react';
import styles from './height.module.scss';
import classNames from 'classnames/bind';
import ProgressBar from '../ProgressBar/ProgressBar';

const { container, title, common_input, error_msg, next__button } = styles;

interface Props {
  nickname: string;
  height: number;
  setHeight: (value: number) => void;
  setPageCount: (page: number) => void;
}

function Height({ nickname, height, setHeight, setPageCount }: Props): JSX.Element {
  const [error, setError] = useState<boolean | string>(!height);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    if (!value) {
      setError('정보를 입력해 주세요');
    } else if (Number.isNaN(+value)) {
      setError('키는 숫자만 입력 가능합니다.');
    } else if (+value > 300) {
      setHeight(+value);
      setError(`정말 ${value}cm 맞으신가요!?🤔`);
    } else {
      setHeight(+value);
      setError(false);
    }
  };

  const onSubmit = () => {
    setPageCount(4);
  };

  return (
    <>
      <ProgressBar ratio={3} />
      <div className={container}>
        <h1 className={classNames(title)}>
          {nickname}님의 <span>키</span>를 알려주세요
        </h1>
        <input
          className={classNames(common_input)}
          type="text"
          placeholder="00"
          value={height}
          onChange={onChange}
        />
        {typeof error === 'string' && <p className={classNames(error_msg)}>{error}</p>}
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

export default Height;
