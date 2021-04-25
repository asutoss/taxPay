import React from 'react';

const Status = (props) => {
    return (
        <div>
            <h3>Tax Status : { props.status ? 'Unpaid' : 'Paid'} </h3>
        </div>
    );
}

export default Status ;