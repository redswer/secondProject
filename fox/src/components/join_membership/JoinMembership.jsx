import './JoinMembership.css';
import SearchAddress from '../SearchAddress';
import SideButton from '../SideButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function JoinMembership() {

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

    const nameRegex = /[가-힣]/; // 이름은 한글만 허용
    const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/; // 패스워드에 특수문자 반드시 포함

    const validateId = () => {
        if (!id.includes('@')) {
            setIdError('유효한 이메일 형식이 아닙니다.');
        } else {
            setIdError('');
        }
    }
    const validatePassword = () => {
        if (password.length < 7 || password.length > 15) {
            setPasswordError('비밀번호는 7자 이상, 15자 이하여야 합니다.');
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

    // ===========================================
    // ** 주소 입력 여부

    const [hideAddressSearch, setHideAddressSearch] = useState(false);
    const [hideAfterAddressInput, setHideAfterAddressInput] = useState(false);

    const handleAfterAddressInputCheckbox = () => {
        setHideAfterAddressInput(!hideAfterAddressInput);

        // 주소 다음에 입력 체크박스 체크 시, 주소 검색 창도 숨겨지도록 함
        if (!hideAfterAddressInput) {
            setHideAddressSearch(true);
        }
    }

    // ============================================
    // ** 체크박스 선택

    const checkboxData = [
        { id: 'join_membership_agree_use', title: '이용약관', link: '/Use' },
        { id: 'join_membership_agree_community', title: '커뮤니티 이용약관', link: '/Community' },
        { id: 'join_membership_agree_privacy', title: '개인정보 수집 및 이용', link: '/Privacy' },
        { id: 'join_membership_agree_privacy_option', title: '선택적 개인정보 수집 및 이용', link: '/PrivacySelect' },
        { id: 'join_membership_agree_newsletter', title: '관심 분야별 맞춤 뉴스레터 수신', link: '/Newsletter' },
        { id: 'join_membership_agree_text', title: '문자/카카오톡', link: '/TextMessage' },
        { id: 'join_membership_agree_email', title: '이메일', link: '/Mail' },
    ]

    // 필수 약관 동의
    const requiredCheckboxes = [
        'join_membership_agree_use',
        'join_membership_agree_community',
        'join_membership_agree_privacy'
    ];

    const [checkbox, setCheckbox] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {

        // 필수 선택 해제 시 경고 창
        if (requiredCheckboxes.includes(id)) {
            if (!checked) {
                alert('필수 약관에 동의해주세요');
            }
        }

        // 단일 선택 시 체크된 아이템 배열에 추가
        if (checked) {
            setCheckbox(prev => [...prev, id]);

            // 단일 선택 해제 시 체크된 아이템 제외한 배열
        } else {
            setCheckbox(checkbox.filter((el) => el !== id));
        }
    }

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {

        // 전체 선택 시
        if (checked) {
            const idArray = [];
            checkboxData.forEach((el) => { idArray.push(el.id) });
            setCheckbox(idArray);

            // 전체 선택 해제 시
        } else {
            setCheckbox([]);
        }
    }

    // ==================================================================
    // ** 회원정보

    const [UserInfo, setUserInfo] = useState({
        userId: id,
        userPassword: password,
        userPhoneNumber1: phoneNumber1,
        userPhoneNumber2: phoneNumber2,
        userPhoneNumber3: phoneNumber3,
        userPhoneNumber: (phoneNumber1 + phoneNumber2 + phoneNumber3),
        userName: name
    });

    // ==========================================================
    // ** 회원가입 버튼 활성화

    const [joinMembershipButton, setJoinMembershipButton] = useState(true);

    function changeButton() {
        id.includes('@') && passwordRegex.test(password) && password.length >= 7 &&
            password.length <= 15 && name.length >= 2 && name.length <= 7 &&
            nameRegex.test(name) && password == passwordCheck &&
            phoneNumber1.match(/^\d{3}$/) && phoneNumber2.match(/^\d{3,4}$/) &&
            phoneNumber3.match(/^\d{4}$/) ? setJoinMembershipButton(false) : setJoinMembershipButton(true);
    }

    return (
        <div className='JoinMembership d-flex'>
            <div className='join_membership_main_text d-flex'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                        className="bi bi-person-fill-add" viewBox="0 0 16 16">
                        <path
                            d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path
                            d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                    </svg>
                </div>
                <div>
                    <h1>회원가입</h1>
                </div>
            </div>
            <form className='join_membership_form' action="./JoinMembershipServer">
                <fieldset className='join_membership_fieldset'>
                    <div className='d-flex'>
                        <div className='join_membership_section_1'>기본 정보 입력
                            <div className='join_membership_section_1_info'>(필수)</div>
                        </div>
                        <div className='join_membership_section_2 d-flex'>
                            <div>
                                <span className='join_membership_basic_span'>이메일(아이디)</span>
                                <span>
                                    <input id='join_membership_id' name='join_membership_id'
                                        autoComplete='off' type="text" required
                                        value={id} placeholder='@ 반드시 포함' onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setId(e.target.value);
                                            setIdError('');
                                        }} onBlur={validateId} />
                                    {idError && <span className="error-message">{idError}</span>}
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>비밀번호</span>
                                <span>
                                    <input id='join_membership_pw' name='join_membership_pw' type="password"
                                        placeholder='특수문자 포함, 7자리 이상' minLength={7} autoComplete='off' required
                                        value={password} autoCapitalize='off' onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setPasswordError('');
                                        }}
                                        onBlur={validatePassword} />
                                    {passwordError && <span className="error-message">{passwordError}</span>}
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>비밀번호 확인</span>
                                <span>
                                    <input id='join_membership_pw_check' name='join_membership_pw_check'
                                        type="password" minLength={7} autoComplete='off' required
                                        value={passwordCheck} autoCapitalize='off' onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setPasswordCheck(e.target.value);
                                            setPasswordCheckError('');
                                        }}
                                        onBlur={validatePasswordCheck}
                                    />
                                    {passwordCheckError && <span className="error-message">{passwordCheckError}</span>}
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>휴대전화</span>
                                <span>
                                    <input type="text" size={6} required className='join_membership_phone1'
                                        value={phoneNumber1} placeholder='3자리(010)' onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setPhoneNumber1(e.target.value);
                                            setPhoneNumberError('');
                                        }}
                                        onBlur={validatePhoneNumber1} />
                                    &#8722;
                                    <input type="text" size={6} className='join_membership_phone2'
                                        minLength={3} required value={phoneNumber2} placeholder='3~4자리'
                                        onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setPhoneNumber2(e.target.value);
                                            setPhoneNumberError('');
                                        }}
                                        onBlur={validatePhoneNumber2} />
                                    &#8722;
                                    <input type="text" size={6} minLength={3} required className='join_membership_phone3'
                                        value={phoneNumber3} placeholder='4자리' onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setPhoneNumber3(e.target.value);
                                            setPhoneNumberError('');
                                        }}
                                        onBlur={validatePhoneNumber3} />
                                </span>
                                {phoneNumberError && <span className="error-message">{phoneNumberError}</span>}
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>개인정보 유효기간</span>
                                <span className='join_membership_radio'>
                                    <input id='year_1' name='join_membership_valid_year' type="radio" required />
                                    <label htmlFor="year_1">1년</label>
                                    <input id='year_3' name='join_membership_valid_year' type="radio" />
                                    <label htmlFor="year_3">3년</label>
                                    <input id='year_5' name='join_membership_valid_year' type="radio" />
                                    <label htmlFor="year_5">5년</label>
                                    <input id='end' name='join_membership_valid_year' type="radio" />
                                    <label htmlFor="end">탈퇴 시까지</label>
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>이름</span>
                                <span>
                                    <input id='join_membership_name' name='join_membership_name'
                                        type="text" autoComplete='off' maxLength={100} required
                                        value={name} placeholder='2자 이상, 7자 이하의 한글'
                                        onKeyUp={changeButton}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setNameError('');
                                        }}
                                        onBlur={validateName} />
                                    {nameError && <span className="error-message">{nameError}</span>}
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>성별</span>
                                <span className='join_membership_radio'>
                                    <input id='male' name='sex' type="radio" required />
                                    <label htmlFor="male">남자</label>
                                    <input id='female' name='sex' type="radio" />
                                    <label htmlFor="female">여자</label>
                                </span>
                            </div>
                            <div>
                                <span className='join_membership_basic_span'>생년월일</span>
                                <span className='join_membership_birth'>
                                    <label htmlFor="year_birth"></label>
                                    <select name="year_birth" id="year_birth">
                                        <option defaultValue="2023">2023</option>
                                        <option defaultValue="2022">2022</option>
                                        <option defaultValue="2021">2021</option>
                                        <option defaultValue="2020">2020</option>
                                        <option defaultValue="2019">2019</option>
                                        <option defaultValue="2018">2018</option>
                                        <option defaultValue="2017">2017</option>
                                        <option defaultValue="2016">2016</option>
                                        <option defaultValue="2015">2015</option>
                                        <option defaultValue="2014">2014</option>
                                        <option defaultValue="2013">2013</option>
                                        <option defaultValue="2012">2012</option>
                                        <option defaultValue="2011">2011</option>
                                        <option defaultValue="2010">2010</option>
                                        <option defaultValue="2009">2009</option>
                                        <option defaultValue="2008">2008</option>
                                        <option defaultValue="2007">2007</option>
                                        <option defaultValue="2006">2006</option>
                                        <option defaultValue="2005">2005</option>
                                        <option defaultValue="2004">2004</option>
                                        <option defaultValue="2003">2003</option>
                                        <option defaultValue="2002">2002</option>
                                        <option defaultValue="2001">2001</option>
                                        <option defaultValue="2000">2000</option>
                                        <option defaultValue="1999">1999</option>
                                        <option defaultValue="1998">1998</option>
                                        <option defaultValue="1997">1997</option>
                                        <option defaultValue="1996">1996</option>
                                        <option defaultValue="1995">1995</option>
                                        <option defaultValue="1994">1994</option>
                                        <option defaultValue="1993">1993</option>
                                        <option defaultValue="1992">1992</option>
                                        <option defaultValue="1991">1991</option>
                                        <option defaultValue="1990">1990</option>
                                        <option defaultValue="1989">1989</option>
                                        <option defaultValue="1988">1988</option>
                                        <option defaultValue="1987">1987</option>
                                        <option defaultValue="1986">1986</option>
                                        <option defaultValue="1985">1985</option>
                                        <option defaultValue="1984">1984</option>
                                        <option defaultValue="1983">1983</option>
                                        <option defaultValue="1982">1982</option>
                                        <option defaultValue="1981">1981</option>
                                        <option defaultValue="1980">1980</option>
                                        <option defaultValue="1979">1979</option>
                                        <option defaultValue="1978">1978</option>
                                        <option defaultValue="1977">1977</option>
                                        <option defaultValue="1976">1976</option>
                                        <option defaultValue="1975">1975</option>
                                        <option defaultValue="1974">1974</option>
                                        <option defaultValue="1973">1973</option>
                                        <option defaultValue="1972">1972</option>
                                        <option defaultValue="1971">1971</option>
                                        <option defaultValue="1970">1970</option>
                                        <option defaultValue="1969">1969</option>
                                        <option defaultValue="1968">1968</option>
                                        <option defaultValue="1967">1967</option>
                                        <option defaultValue="1966">1966</option>
                                        <option defaultValue="1965">1965</option>
                                        <option defaultValue="1964">1964</option>
                                        <option defaultValue="1963">1963</option>
                                        <option defaultValue="1962">1962</option>
                                        <option defaultValue="1961">1961</option>
                                        <option defaultValue="1960">1960</option>
                                        <option defaultValue="1959">1959</option>
                                        <option defaultValue="1958">1958</option>
                                        <option defaultValue="1957">1957</option>
                                        <option defaultValue="1956">1956</option>
                                        <option defaultValue="1955">1955</option>
                                        <option defaultValue="1954">1954</option>
                                        <option defaultValue="1953">1953</option>
                                        <option defaultValue="1952">1952</option>
                                        <option defaultValue="1951">1951</option>
                                        <option defaultValue="1950">1950</option>
                                    </select> 년
                                </span>
                                <span className='join_membership_birth'>
                                    <label htmlFor="month_birth"></label>
                                    <select name="month_birth" id="month_birth" required>
                                        <option defaultValue="1">1</option>
                                        <option defaultValue="2">2</option>
                                        <option defaultValue="3">3</option>
                                        <option defaultValue="4">4</option>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="6">6</option>
                                        <option defaultValue="7">7</option>
                                        <option defaultValue="8">8</option>
                                        <option defaultValue="9">9</option>
                                        <option defaultValue="10">10</option>
                                        <option defaultValue="11">11</option>
                                        <option defaultValue="12">12</option>
                                    </select> 월
                                </span>
                                <span className='join_membership_birth'>
                                    <label htmlFor="day_birth"></label>
                                    <select name="day_birth" id="day_birth" required>
                                        <option defaultValue="1">1</option>
                                        <option defaultValue="2">2</option>
                                        <option defaultValue="3">3</option>
                                        <option defaultValue="4">4</option>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="6">6</option>
                                        <option defaultValue="7">7</option>
                                        <option defaultValue="8">8</option>
                                        <option defaultValue="9">9</option>
                                        <option defaultValue="10">10</option>
                                        <option defaultValue="11">11</option>
                                        <option defaultValue="12">12</option>
                                        <option defaultValue="13">13</option>
                                        <option defaultValue="14">14</option>
                                        <option defaultValue="15">15</option>
                                        <option defaultValue="16">16</option>
                                        <option defaultValue="17">17</option>
                                        <option defaultValue="18">18</option>
                                        <option defaultValue="19">19</option>
                                        <option defaultValue="20">20</option>
                                        <option defaultValue="21">21</option>
                                        <option defaultValue="22">22</option>
                                        <option defaultValue="23">23</option>
                                        <option defaultValue="24">24</option>
                                        <option defaultValue="25">25</option>
                                        <option defaultValue="26">26</option>
                                        <option defaultValue="27">27</option>
                                        <option defaultValue="28">28</option>
                                        <option defaultValue="29">29</option>
                                        <option defaultValue="30">30</option>
                                        <option defaultValue="31">31</option>
                                    </select> 일
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='d-flex'>
                        <div className='join_membership_section_1'>부가 정보 입력
                        </div>
                        <div>
                            <div className='join_membership_section_2 d-flex'>
                                <span className='join_membership_checkbox d-flex'>
                                    <input id='join_membership_address_checkbox' name='join_membership_address_checkbox'
                                        type="checkbox" checked={hideAfterAddressInput}
                                        onChange={handleAfterAddressInputCheckbox} />
                                    <label htmlFor="join_membership_address_checkbox">
                                        주소는 다음에 입력합니다. 단, 주소가 없으면 경품 이벤트 추첨에서 제외될 수 있습니다.</label>
                                </span>
                            </div>
                            {!hideAfterAddressInput && (<SearchAddress className={hideAddressSearch ? 'hidden' : ''} />)}
                        </div>
                    </div>
                    <hr />

                    <div className='d-flex'>
                        <div className='join_membership_section_1'>약관 동의
                            <div className='join_membership_section_1_info'>(*는 필수)</div>
                        </div>
                        <div className='join_membership_section_2'>
                            <div className='join_membership_check_all d-flex'>
                                <input id='join_membership_agree_all' name='join_membership_agree_all'
                                    type="checkbox" onChange={(e) => { handleAllCheck(e.target.checked) }}
                                    checked={checkbox.length === checkboxData.length ? true : false} />
                                <label htmlFor="join_membership_agree_all">모든 약관에 동의합니다</label>
                            </div>
                            <div>
                                {checkboxData.map((checkboxData, key) => (
                                    <div key={key} className='join_membership_agree_checkbox d-flex'>
                                        <span>
                                            <input type='checkbox' name={`select-${checkboxData.id}`} id={checkboxData.id}
                                                onChange={(e) => handleSingleCheck(e.target.checked, checkboxData.id)}
                                                checked={checkbox.includes(checkboxData.id) ? true : false}
                                                {...(requiredCheckboxes.includes(checkboxData.id) && { required: true })} />
                                        </span>
                                        <label htmlFor={checkboxData.id}>{checkboxData.title}
                                            {requiredCheckboxes.includes(checkboxData.id) && <span className="required-indicator">*</span>}
                                        </label>
                                        <Link to={checkboxData.link}
                                            className='join_membership_termsOfService_detail'>자세히 보기
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className='join_membership_hr' />

                    <div className='join_membership_btn_div'>
                        <button className='join_membership_submit_btn' type='submit'
                            disabled={joinMembershipButton}>회원 가입하기
                        </button>
                    </div>
                </fieldset>
            </form>
            <SideButton />
        </div >
    );
}
export default JoinMembership;