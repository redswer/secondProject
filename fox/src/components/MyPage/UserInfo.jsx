import './UserInfo.css';
import SideButton from '../SideButton';
import SearchAddress from '../SearchAddress';
import { useRef, useState, useEffect } from 'react';

function UserInfo({ UserInfo }) {

    // ** 회원정보(UserInfo) 전달받기

    const fillFormWithUserInfo = (UserInfo) => {
        setName(UserInfo.userName || '');
        setPassword(UserInfo.userPassword || '');
        setPasswordCheck(UserInfo.userPassword || '');
        setId(UserInfo.userId || '');
        setPhoneNumber1(UserInfo.userPhoneNumber1 || '');
        setPhoneNumber2(UserInfo.userPhoneNumber2 || '');
        setPhoneNumber3(UserInfo.userPhoneNumber3 || '');
    };

    useEffect(() => {
        if (UserInfo) {
            fillFormWithUserInfo(UserInfo);
        }
    }, [UserInfo]);

    // ==============================================
    // ** 이미지 업로드

    const [Img, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const fileInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const onChange = (e) => {
        if (!e.target.files[0]) {
            // 업로드 취소할 시
            setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
            setSelectedFile(null);
            return;
        }

        // 화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        }
        setSelectedFile(e.target.files[0]);
    }

    // 이미지 클릭하면 선택 창 띄우기
    const imgClick = () => {
        if (fileInput.current) {
            fileInput.current.click();
        }
    }

    // ============================================\
    // ** 유효성 검사

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber1, setPhoneNumber1] = useState('');
    const [phoneNumber2, setPhoneNumber2] = useState('');
    const [phoneNumber3, setPhoneNumber3] = useState('');

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordCheckError, setPasswordCheckError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const nameRegex = /[가-힣]/;
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

    const validateId = () => {
        if (!id.includes('@')) {
            setIdError('유효한 이메일 형식이 아닙니다.');
        } else {
            setIdError('');
        }
    }
    const validatePassword = () => {
        if (password.length < 7) {
            setPasswordError('비밀번호는 7자 이상이어야 합니다.');
        } else if (!passwordRegex.test(password)) {
            setPasswordError('비밀번호에는 특수문자가 하나 이상 포함되어야 합니다.');
        } else {
            setPasswordError('');
        }
    }
    const validatePasswordCheck = () => {
        if (password !== passwordCheck) {
            setPasswordCheckError('비밀번호가 일치하지 않습니다.');
        } else {
            setPasswordCheckError('');
        }
    }
    const validateName = () => {
        if (name.length < 2 || name.length > 7) {
            setNameError('이름은 2글자 이상, 7글자 이하여야 합니다.');
        } else if (!nameRegex.test(name)) {
            setNameError('유효한 이름이 아닙니다.');
        } else {
            setNameError('');
        }
    }
    const validatePhoneNumber1 = () => {
        if (!phoneNumber1.match(/^\d{3}$/)) {
            setPhoneNumberError('유효한 전화번호 형식이 아닙니다.');
        } else {
            setPhoneNumberError('');
        }
    }
    const validatePhoneNumber2 = () => {
        if (!phoneNumber2.match(/^\d{3,4}$/)) {
            setPhoneNumberError('유효한 전화번호 형식이 아닙니다.');
        } else {
            setPhoneNumberError('');
        }
    }
    const validatePhoneNumber3 = () => {
        if (!phoneNumber3.match(/^\d{4}$/)) {
            setPhoneNumberError('유효한 전화번호 형식이 아닙니다.');
        } else {
            setPhoneNumberError('');
        }
    }

    // ===================================================
    // ** 버튼 활성화

    const [userInfoButton, setUserInfoButton] = useState(true);

    function changeButton() {
        id.includes('@') && passwordRegex.test(password) && password.length >= 7 &&
            password.length <= 15 && name.length >= 2 && name.length <= 7 &&
            nameRegex.test(name) && password == passwordCheck &&
            phoneNumber1.match(/^\d{3}$/) && phoneNumber2.match(/^\d{3,4}$/) &&
            phoneNumber3.match(/^\d{4}$/) ? setUserInfoButton(false) : setUserInfoButton(true);
    }

    return (
        <div className='UserInfo'>
            <div className='user_info_main_text d-flex'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        className="bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
                <div>
                    <h1>회원정보 수정</h1>
                </div>
            </div>
            <div>
                <h2>(*는 필수)</h2>
            </div>
            <form action="./MyPage">
                <table>
                    <tbody>
                        <tr className='d-flex'>
                            <th>
                                <div>프로필 사진</div>
                                <div className='user_info_profile_size'>(150 * 150)</div>
                            </th>
                            <td>
                                <div className='user_info_profile'>
                                    <label htmlFor="user_info_profile_img"></label>
                                    <input id='user_info_profile_img'
                                        className='UserInfo_input'
                                        name='user_info_profile_img'
                                        type="image" onClick={imgClick} alt='Profile'
                                        src={selectedFile ? URL.createObjectURL(selectedFile) : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                                </div>
                                <span>
                                    <label htmlFor="user_info_upload_img"></label>
                                    <input id='user_info_upload_img'
                                        className='UserInfo_input'
                                        accept='img/jgp, img/png, img/jpeg img/gif'
                                        name='user_info_upload_img' type="file"
                                        ref={fileInput} onChange={onChange} />
                                </span>
                                <div className='user_info_upload_img_explain'>
                                    ※ 파일 선택을 취소하면 초기화됩니다
                                </div>
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>이름 *</th>
                            <td>
                                <label htmlFor="user_info_name"></label>
                                <input id='user_info_name' name='user_info_name'
                                    className='UserInfo_input' onKeyUp={changeButton}
                                    type="text" maxLength={100} required
                                    value={name} placeholder={'2자 이상, 7자 이하의 한글'}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setNameError('');
                                    }}
                                    onBlur={validateName} />
                                {nameError && <div className="error-message">{nameError}</div>}
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>닉네임</th>
                            <td>
                                <label htmlFor="user_info_id"></label>
                                <input id='user_info_id' name='user_info_id'
                                    className='UserInfo_input'
                                    type="text" maxLength={100} />
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>비밀번호 *</th>
                            <td>
                                <label htmlFor="user_info_pw"></label>
                                <input id='user_info_pw' name='user_info_pw'
                                    className='UserInfo_input' autoCapitalize='off'
                                    type="password" minLength='7' autoComplete='off' required
                                    placeholder='특수문자 포함, 7자리 이상' value={password}
                                    onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError('');
                                    }}
                                    onBlur={validatePassword} />
                                {passwordError && <div className="error-message">{passwordError}</div>}
                            </td>
                        </tr>
                        <tr className="d-flex">
                            <th scope="col">비밀번호 확인 *</th>
                            <td>
                                <label htmlFor="user_info_pw_check"></label>
                                <input id="user_info_pw_check" name="user_info_pw_check" autoComplete='off'
                                    className='UserInfo_input' type="password" minLength="7" required
                                    value={passwordCheck} autoCapitalize='off'
                                    onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setPasswordCheck(e.target.value);
                                        setPasswordCheckError('');
                                    }}
                                    onBlur={validatePasswordCheck}
                                />
                                {passwordCheckError && <div className="error-message">{passwordCheckError}</div>}
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>주소</th>
                            <td>
                                <SearchAddress />
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>이메일 *</th>
                            <td>
                                <input id='user_info_email_address' name='user_info_email_address'
                                    className='UserInfo_input' type="text" required size={30}
                                    value={id} placeholder='@ 반드시 포함' onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setId(e.target.value);
                                        setIdError('');
                                    }}
                                    onBlur={validateId} />
                                {idError && <div className="error-message">{idError}</div>}
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>이메일 수신 여부*</th>
                            <td>
                                <div className='user_info_email_explain'>
                                    ※ 쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수 있습니다.
                                </div>
                                <span>
                                    <input id='user_info_email_recieve' name='user_info_email_option'
                                        className='UserInfo_input' type="radio" required />
                                    <label htmlFor="user_info_email_recieve">수신함</label>
                                    <input id='user_info_email_reject' name='user_info_email_option'
                                        className='UserInfo_input' type="radio" />
                                    <label htmlFor="user_info_email_reject">수신안함</label>
                                </span>
                            </td>
                        </tr>
                        <tr className='user_info_phone_number d-flex'>
                            <th scope='col'>전화번호 *</th>
                            <td>
                                <input type="text" size={6} className='UserInfo_input' required
                                    value={phoneNumber1} placeholder='3자리(010)'
                                    onKeyUp={changeButton}
                                    onChange={(e) => {
                                        setPhoneNumber1(e.target.value);
                                        setPhoneNumberError('');
                                    }}
                                    onBlur={validatePhoneNumber1} />
                                &#8722;
                                <input type="text" size={6} className='UserInfo_input'
                                    minLength={3} required onKeyUp={changeButton}
                                    value={phoneNumber2} placeholder='3~4자리'
                                    onChange={(e) => {
                                        setPhoneNumber2(e.target.value);
                                        setPhoneNumberError('');
                                    }}
                                    onBlur={validatePhoneNumber2} />
                                &#8722;
                                <input type="text" size={6} className='UserInfo_input'
                                    minLength={3} required onKeyUp={changeButton}
                                    value={phoneNumber3} placeholder='4자리'
                                    onChange={(e) => {
                                        setPhoneNumber3(e.target.value);
                                        setPhoneNumberError('');
                                    }}
                                    onBlur={validatePhoneNumber3} />
                                {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
                            </td>
                        </tr>
                        <tr className='d-flex'>
                            <th scope='col'>SMS 수신여부 *</th>
                            <td>
                                <div className='user_info_sms_explain'>
                                    ※ 쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다.
                                </div>
                                <div>
                                    <input id='user_info_sms_recieve' name='user_info_sms_option'
                                        className='UserInfo_input' type="radio" required />
                                    <label htmlFor="user_info_sms_recieve">수신함</label>
                                    <input id='user_info_sms_reject' name='user_info_sms_option'
                                        className='UserInfo_input' type="radio" />
                                    <label htmlFor="user_info_sms_reject">수신안함</label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='user_info_btn'>
                    <button type='submit' className='user_info_submit_btn' disabled={userInfoButton}>
                        수정완료
                    </button>
                </div>
            </form>
            <SideButton />
        </div >
    );
}

export default UserInfo;