// @flow
import React from 'react';
import cn from 'classnames/bind';
import styles from './Example.css';

const cx = cn.bind(styles);
type ComponentProps = {
  message?: string,
};

const StatelessComponent = ({ message = 'world' }: ComponentProps) => (
  <div className={cx('Message', 'info')}>
    sdf
    <span>Hello {message}, React is awesome !!!</span>
  </div>
);

export default StatelessComponent;
