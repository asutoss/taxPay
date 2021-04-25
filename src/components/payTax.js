import React, { useState } from 'react';

const PayTax = (props) => {
    const [vis, setVis] = useState(false);
    return (
        <div>
            <button disabled={!props.status} onClick={() => setVis(!vis)}>Pay Tax</button>
            {
                vis && (
                    <div>
                        <form>
                            <table>
                                <tr>
                                    <td><label>Amount :</label></td>
                                    <td><input type="number" placeholder={0} /></td>
                                </tr>
                            </table>
                            <button>Submit</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
}

export default PayTax;