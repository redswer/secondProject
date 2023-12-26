import { useReducer, useState } from "react";


function countReducer(state, action) {
    if (action.type === 'PLUS') {
        return (
            state += action.n
        );
    } else if (action.type === 'MINUS') {
        return (
            state -= action.n
        );
    } else if (action.type === 'RESET') {
        return (
            state = 0
        );
    }
}


export default function ThisIsMyReducer() {
    const [nn, setnn] = useState(0);

    const [count, countDispatch] = useReducer(countReducer, 0);

    function plus() {
        countDispatch({ type: 'PLUS', n: stepNum });
    }

    function minus() {
        countDispatch({ type: 'MINUS', n: stepNum });
    }

    function reset() {
        countDispatch({ type: 'RESET', n: stepNum });
    }

    function change(evt) {
        setnn(Number(evt.target.value));
    }

    return (
        <div className="ccc">
            <input type="button" value='더해라' onClick={plus} />
            <input type="button" value='빼라' onClick={minus} />
            <input type="button" value='리셋' onClick={reset} />
            <input type="text" value={stepNum} onChange={change} />
            <span>실제 숫자 : {count}</span>
        </div>
    );
}



// const [count, countDispatch] = useReducer(countReducer, 0)
// const [장부, 창구직원] = 은행생성(회계직원, 장부 초기기록)

// 은행: [장부 <=> 회계직원 <=> 창구직원] <=> 주문 << 고객