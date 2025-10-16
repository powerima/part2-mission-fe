/**
 *
 *  Mission TeamProject
 *
 *  2025. 10. 13
 *
 *  make-study page
 *
 *  MakeStudyPage.jsx
 *
 *  author: ys
 *
 */

// import InputPassword from '@/components/InputPassword';
import { InputPassword } from '@/components/InputPassword';
import MainLayout from '@/Layouts/MainLayout';
import { useStudy } from '@/hooks/useStudy';

import style from './MakeStudyPage.module.css';
import visibilityOffIcon from '@/assets/icons/password/btn_visibility_off.png';
import visibilityOnIcon from '@/assets/icons/password/btn_visibility_on.png';

export default function MakeStudyPage() {
  const backgroundList = [
    'var(--card--green)',
    'var(--card--yellow)',
    'var(--card--blue)',
    'var(--card--pink)',
    'var(--card--green)',
    'var(--card--yellow)',
    'var(--card--blue)',
    'var(--card--pink)',
  ];

  const {
    newTitle,
    setTitle,
    newNickname,
    setNickname,
    newDescription,
    setDescription,
    newBackground,
    setBackground,
    newPassword,
    setPassword,
    newPasswordConfirm,
    setPasswordConfirm,
    titleInputRef,
    nicknameInputRef,
    passwordInputRef,
    passwordConfirmInputRef,
  } = useStudy();

  const passwordVisibleToggle = (event) => {
    const inputPassword = event.currentTarget.previousElementSibling;

    if (event.currentTarget.classList.contains('invisibled')) {
      inputPassword.type = 'text';
      event.currentTarget.classList.remove('invisibled');
      event.currentTarget.src = visibilityOnIcon;
    } else {
      inputPassword.type = 'password';
      event.currentTarget.classList.add('invisibled');
      event.currentTarget.src = visibilityOffIcon;
    }
  };

  const validateNickname = (value) => {};

  const validatePassword = (newPasswordConfirm) => {
    console.log('[validatePassword]newPasswordConfirm: ', newPasswordConfirm);
    return newPasswordConfirm.length > 8;
  };

  const validatePasswordConfirm = () => {};

  const handleRequsetPost = () => {};

  return (
    <MainLayout>
      <div className={style.appContainer}>
        <h1 className={style.title}>스터디 만들기</h1>
        <div className={style.inputContainer}>
          <div className={style.inputText}>
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              name="nickname"
              value={newNickname}
              onChange={(event) => setNickname(event.target.value)}
              ref={titleInputRef}
              placeholder="닉네임을 입력해 주세요"
            />
            <span className={style.inputErrMessage}>
              * 닉네임을 입력해 주세요
            </span>
          </div>
          <div className={style.inputText}>
            <label htmlFor="studyname">스터디 이름</label>
            <input
              type="text"
              name="studyname"
              value={newTitle}
              onChange={(event) => setTitle(event.target.value)}
              ref={nicknameInputRef}
              placeholder="스터디 이름을 입력해 주세요"
            />
            <span className={style.inputErrMessage}>
              * 스터디 이름을 입력해 주세요
            </span>
          </div>
          <div className={style.textArea}>
            <label htmlFor="introduce">소개</label>
            <textarea
              name="introduce"
              placeholder="소개 멘트를 작성해 주세요"
              value={{ newDescription }}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <div className={style.backgroundListContainer}>
          <span>배경을 선택해 주세요</span>
          <ul className={style.backgroundList}>
            {backgroundList.map((bg, index) => (
              <li
                className={style.backgroundItem}
                key={index}
                style={{ backgroundColor: bg }}
              ></li>
            ))}
          </ul>
        </div>
        <div className={style.inputPasswordContainer}>
          <div className={style.inputPassword}>
            <label htmlFor="password">비밀번호</label>
            <div className={style.passwordWrap}>
              <input
                type="password"
                name="password"
                value={newPassword}
                onChange={(event) => setPassword(event.target.value)}
                ref={passwordInputRef}
                placeholder="비밀번호를 입력해 주세요"
              ></input>
              <img
                className={`${style.passwordToggleButton} invisibled`}
                src={visibilityOffIcon}
                onClick={(event) => passwordVisibleToggle(event)}
              />
            </div>
            <span className={style.inputErrMessage}>
              * 비밀번호를 입력해 주세요
            </span>
          </div>
          <InputPassword
            type="password"
            errMessageList={[
              '비밀번호를 다시 한 번 입력해 주세요',
              '비밀번호가 다릅니다.',
            ]}
            name="passwordConfirm"
            value={newPasswordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
            title="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해 주세요"
            errorMessageToggleFunc={validatePassword}
          />
          {/* <div className={style.inputPassword}>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <div className={style.passwordWrap}>
              <input
                type="password"
                name="passwordConfirm"
                value={newPasswordConfirm}
                onChange={(event) => setPasswordConfirm(event.target.value)}
                ref={passwordConfirmInputRef}
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
              />
              <img
                className={style.passwordToggleButton}
                src={visibilityOffIcon}
                onClick={(event) => passwordVisibleToggle(event)}
              />
            </div>
            <span className={style.inputErrMessage}>
              * 비밀번호가 일치하지 않습니다
            </span>
          </div> */}
        </div>
        <button className={style.makeButton}>만들기</button>

        <InputPassword
          type="text"
          errMessage="입렵 좀 해주십사"
          name="whather"
          title="그냥 테스트"
          placeholder="반갑습니다."
        />
        <InputPassword
          type="password"
          errMessage="입렵 좀 해주십사"
          name="whather"
          title="그냥 테스트"
          placeholder="반갑습니다."
          errorMessageToggleFunc={validatePassword}
        />
      </div>
    </MainLayout>
  );
}

/*
<Input type="text" tile="스터디이름" palceholder="스터디 이름 입려해 주세욤">

<Input type="password" title="비밀번호" placeholder="비밀번호를 입력해줏욤" err="*테스트"/>
*/
