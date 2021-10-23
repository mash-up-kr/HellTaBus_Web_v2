import { useState, useEffect } from 'react';
import styles from './progressBar.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProgressBar({ ratio }: { ratio: number }): JSX.Element {
  const [value, setValue] = useState((ratio / 6) * 300 - 60);

  useEffect(() => {
    setValue((ratio / 6) * 300);
  }, [ratio]);

  return (
    <div className={cx('wrapper')}>
      <div style={{ width: `${value}px` }} className={cx('progress')} />
      <span className={cx('step')}>
        <span className={cx('current__step')}>{ratio}</span> / 6step
      </span>
    </div>
  );
}

export default ProgressBar;
