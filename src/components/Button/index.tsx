import React from 'react';

import style from './style.module.scss';

export const Button = ({
  text,
  dataText,
  onclick,
  className,
}: {
  text?: string;
  dataText?: string;
  onclick?: () => void;
  className?: string;
}) => {
  return (
    <button
      data-back={dataText && dataText}
      data-front={dataText && dataText}
      className={className === 'primary' ? style.btn_primary : ''}
      onClick={() => onclick && onclick()}
    >
      {text && text}
    </button>
  );
};
