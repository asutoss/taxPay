import React, { useState } from 'react';
import './style/calcTax.css';

const CalcTax = () => {
    const [vis, setVis] = useState(false);
    return (
        <div>
            <button onClick={() => setVis(!vis)}>Calculate Tax</button>
            {
                vis && (
                    <div>
                        <h3>Enter Details</h3>
                        <form>
                            <table>
                                <tr>
                                    <td><label>Amount :</label></td>
                                    <td><input type="number" placeholder={0} /></td>
                                </tr>
                                <tr>
                                    <td><lable>Payment Status :</lable></td>
                                    <td><input type="text" placeholder="status" /></td>
                                </tr>
                            </table>
                            <button>Calculate</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
}

export default CalcTax;