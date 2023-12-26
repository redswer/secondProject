import * as React from 'react-daum-postcode';
import DaumPostcode from 'react-daum-postcode';
import './SearchAddress.css';
import { useState } from 'react';

function SearchAddress({ value }) {
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState(value || '');
    const [detailAddress, setDetailAddress] = useState('');
    const [showAddressSearch, setShowAddressSearch] = useState(false);

    const handleComplete = (data) => {
        let selectedAddress = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;

        if (data.userSelectedType === 'R') {
            let detailAddr = '';

            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                detailAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
                detailAddr += detailAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            if (detailAddr !== '') {
                detailAddr = ` (${detailAddr})`;
            }

            setDetailAddress(detailAddr);
        } else {

            setDetailAddress('');
        }

        setPostcode(data.zonecode);
        setAddress(selectedAddress);
        setShowAddressSearch(false);
    };

    const resetAddress = () => {
        setPostcode('');
        setAddress('');
        setDetailAddress('');
    };

    return (
        <div className='SearchAddress'>
            <div className='search_address_btn_container'>
                <button type="button" onClick={() => setShowAddressSearch(true)} className='SearchAddress_btn'>
                    주소 검색
                </button>
                <button type="button" onClick={resetAddress} className='SearchAddress_btn'>
                    주소 초기화
                </button>
            </div>
            {showAddressSearch && (
                <div className='DaumPostcode'>
                    <DaumPostcode onComplete={handleComplete}></DaumPostcode>
                </div>
            )}
            <div>
                <input
                    type="text"
                    id="sample6_postcode"
                    placeholder="우편번호"
                    value={postcode}
                    readOnly
                />
                <br />
                <input
                    type="text"
                    id="sample6_address"
                    placeholder="주소"
                    value={address}
                    readOnly
                />
                <br />
                <input
                    type="text"
                    id="sample6_detailAddress"
                    placeholder="상세주소"
                    autoComplete='off'
                    value={detailAddress}
                    onChange={(e) => setDetailAddress(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchAddress;