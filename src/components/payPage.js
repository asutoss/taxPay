import React, { useState } from 'react';
import CalcTax from './calcTax';
import PayTax from './payTax';
import Status from './status';

const PayPage = () => {
    const [ status, setStatus ] = useState(true);
    return (
        <div>
            <h1>Tax Payment</h1>
            <Status status={status} />
            <CalcTax />
            <PayTax status={status}/>
        </div>
    );
}

export default PayPage;