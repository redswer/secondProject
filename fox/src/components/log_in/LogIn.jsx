import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

function LogIn() {

    // ** 유효성 검사
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateId = () => {
        if (!id.includes('@')) {
            setIdError('유효한 이메일 형식이 아닙니다.');
        } else {
            setIdError('');
        }
    }

    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const capitalRegex = /[A-Z]/;
    const languageRegex = /[ㄱ-ㅎ가-힣]/

    const validatePassword = () => {
        if (password.length < 7 || password.length > 15) {
            setPasswordError('비밀번호는 7자 이상, 15자 이하여야 합니다.');
        } else if (!specialCharacterRegex.test(password)) {
            setPasswordError('비밀번호에는 특수문자가 하나 이상 포함되어야 합니다.');

            // 비밀번호 표시 체크박스를 체크했을 때  (input 의 type 이 text로 변경되었을 때)
        } else if (capitalRegex.test(password)) {
            setPasswordError('비밀번호에는 대문자가 포함될 수 없습니다.');
        } else if (languageRegex.test(password)) {
            setPasswordError('비밀번호에는 한글이 포함될 수 없습니다.');
        } else {
            setPasswordError('');
        }
    }

    // ========================================================
    // ** 비밀번호 표시

    const [showPassword, setShowPassword] = useState(false);

    // =========================================================
    // ** 로그인 버튼 활성화

    const [button, setButton] = useState(true);

    function changeButton() {
        id.includes('@') && specialCharacterRegex.test(password) &&
            password.length >= 7 && password.length <= 15 ? setButton(false) : setButton(true);
    }

    // ============================================================

    return (
        <div className='LogIn'>
            <form className='log_in_form' action='/'>
                <fieldset className='log_in_field d-flex'>
                    <div>
                        <div>
                            <div>
                                <input id='id' className='log_in_id' required
                                    value={id} placeholder='아이디(이메일, @ 반드시 포함)'
                                    onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                        setIdError('');
                                    }}
                                    onBlur={validateId} />
                                {idError && <div className="error-message">{idError}</div>}
                            </div>
                            <div>
                                <input id='pw' className='log_in_pw' type={showPassword ? 'text' : 'password'}
                                    minLength={7} autoComplete='off' required autoCapitalize='off'
                                    placeholder='비밀번호(특수문자 포함, 7자 이상, 15자 이하)' value={password} onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                    onBlur={validatePassword} />
                                {passwordError && <div className="error-message">{passwordError}</div>}
                            </div>
                        </div>
                        <div>
                            <span className='log_in_checkbox'>
                                <input id='log_in_checkbox_saveId' type='checkbox'
                                    autoCapitalize='off' />
                                <label htmlFor='log_in_checkbox_saveId'>아이디 저장</label>
                            </span>
                            <span className='log_in_checkbox'>
                                <input id='log_in_checkbox_password' type='checkbox'
                                    autoCapitalize='off' checked={showPassword} onChange={() => { setShowPassword(!showPassword) }} />
                                <label htmlFor='log_in_checkbox_password'>비밀번호 표시</label>
                            </span>
                        </div>
                        <div>
                            <button id='log_in_button' type='submit' disabled={button}>로그인
                            </button>
                        </div>
                        <div className='log_in_find_container'>
                            <span className='log_in_find_id'>
                                <Link to='#'>아이디 찾기</Link>
                            </span>
                            &#124;
                            <span className='log_in_find_pw'>
                                <Link to='#'>비밀번호 찾기</Link>
                            </span>
                        </div>
                        <div className='log_in_SNS'>
                            <div>SNS 계정으로 로그인하기</div>
                            <span>
                                <Link to="http://www.facebook.com/">
                                    <svg className="bi-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://accounts.google.com/signin/chrome/sync/identifier?ssp=1&continue=https%3A%2F%2Fwww.google.com%2F&flowName=GlifDesktopChromeSync">
                                    <svg className="bi-google" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path
                                            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://www.instagram.com/">
                                    <svg className="bi-instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </Link>
                            </span>
                            <span>
                                <Link to="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
                                    <svg className="bi-naver" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M1.6 0S0 0 0 1.6v20.8S0 24 1.6 24h20.8s1.6 0 1.6-1.6V1.6S24 0 22.4 0zm3.415 5.6h4.78l4.425 6.458V5.6h4.765v12.8h-4.78L9.78 11.943V18.4H5.015Z" />
                                    </svg>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='log_in_ad'>
                            <Link to="/EventPageItemContent/0">
                                <img src="./img/log_in_ad_2.jpg" alt='#' />
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default LogIn;