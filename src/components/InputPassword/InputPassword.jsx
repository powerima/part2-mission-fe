/**
 *
 *  Mission TeamProject
 *
 *  2025. 10. 14
 *
 *  make-study page
 *
 *  InputPassword.jsx
 *
 *  author: ys
 *
 */

import styles from './InputPassword.module.css';
import visibilityOffIcon from '@/assets/icons/password/btn_visibility_off.png';
import visibilityOnIcon from '@/assets/icons/password/btn_visibility_on.png';
import clsx from 'clsx';
import { useState } from 'react';

/**
 * parameter 설명
 *
 * type : input type (default = password)
 * name : *input name
 * placeholder : placeholder (default = '')
 * errMessageList : input 에러 메시지리스트 (default = [])
 * onInput : input 이벤트 함수 (default = null)
 * onChange : change 이벤트 함수 (default = null)
 * inputPasswordVisibleToggle : password visibile toggle (default = true)
 * errorMessageToggleFunc :
 *
 */

export default function InputPassword({
  title = '',
  type = 'password',
  name = '',
  useStudy,
  placeholder = '',
  errMessageList = [],
  onInput = null,
  onChange = null,
  inputPasswordVisibleToggle = true,
  errorMessageToggleFunc = null,
}) {
  const [onPasswordVisible, onPasswordVisibleToggle] = useState(false);
  const [onErrMessageVisible, onToggleErrMessageVisible] = useState(false);
  const [errMessage, setErrMessage] = useState(errMessageList[0]);

  const handleOnInput = (event) => {
    onInput && onInput(event);
    if (errorMessageToggleFunc) {
      const isVisible = !errorMessageToggleFunc(event.currentTarget.value);
      console.log('isVisible', isVisible);
      onToggleErrMessageVisible(isVisible);
    }
  };

  return (
    <div className={styles.inputPasswordContainer}>
      <label className={styles.inputTitle} htmlFor={name}>
        {title}
      </label>
      <div className={styles.passwordWrap}>
        <input
          type={type === 'text' || onPasswordVisible ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          onInput={handleOnInput}
          onChange={onChange}
        ></input>
        {type === 'password' && inputPasswordVisibleToggle ? (
          <img
            className={`${styles.passwordToggleButton} invisibled`}
            src={onPasswordVisible ? visibilityOnIcon : visibilityOffIcon}
            onClick={() => onPasswordVisibleToggle(!onPasswordVisible)}
          />
        ) : null}
      </div>
      {onErrMessageVisible ? (
        <span
          className={clsx(
            styles.inputErrMessage,
            onErrMessageVisible || styles.nonDisplay,
          )}
        >
          * {errMessage}
        </span>
      ) : null}
    </div>
  );
}
