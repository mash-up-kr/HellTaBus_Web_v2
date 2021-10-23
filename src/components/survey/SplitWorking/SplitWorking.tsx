import { ReactComponent as Pizza0 } from '../../../assets/pizza0.svg';
import { ReactComponent as Pizza3 } from '../../../assets/pizza3.svg';
import { ReactComponent as Pizza5 } from '../../../assets/pizza5.svg';
import styles from './splitWorking.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';

const { s_container, s_img, s_title, s_description } = styles;

interface Props {
  split: number;
  title: string;
  onClick: (splitNumber: number) => void;
  children: string;
}

function SplitWorking({ split, title, onClick, children }: Props): JSX.Element {
  const splitImages: { [key: number]: JSX.Element } = {
    0: <Pizza0 />,
    3: <Pizza3 />,
    5: <Pizza5 />,
  };

  return (
    <div className={classNames(s_container)} onClick={() => onClick(split)}>
      <div className={classNames(s_img)}>
        <Fragment>{splitImages[split]}</Fragment>
      </div>
      <div className={classNames(s_title)}>{title}</div>
      <div className={classNames(s_description)}>{children}</div>
    </div>
  );
}

export default SplitWorking;
