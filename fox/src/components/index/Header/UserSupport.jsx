import { Link } from 'react-router-dom';

function UserSupport() {
    return (
        <div className="user_support">
            <nav>
                <ul>
                    <li>
                        <Link to='/JoinMembership' style={{ textDecoration: 'none', color:'red'}}>회원가입</Link>
                    </li>
                    <li>
                        <Link to='/LogIn' className='Link'>로그인</Link>
                    </li>
                    <li>
                        <Link to='/MyPage' className='Link'>마이페이지</Link>
                    </li>
                    <li>
                        <Link to='/CustomerServiceCategory/CustomerServiceNotice' className='Link'>고객센터</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserSupport;