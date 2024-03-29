import React from 'react'
import Navbarmainpage from './Navbarmainpage'
import './Level5.css'


export default function Level5() {
  return (
    <>
    <div id="Level5">
    <Navbarmainpage/>
    <div className="container">
    <h2 className = "transac">Transactions : </h2>
    <table>
        <tr>
            <th>Sr.no.</th>
            <th>Date</th>
            <th>Particulars</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
        </tr>
        <tr>
            <td>1</td>
            <td>14/08/22</td>
            <td>Cash Deposit Self</td>
            <td style={{color:'green'}}><b>1000</b></td>
            <td>-</td>
            <td style={{color:'blue'}}><b>21000</b></td>
        </tr>
        <tr>
            <td>2</td>
            <td>15/08/22</td>
            <td>Cash withdrawal Self</td>
            <td>-</td>
            <td style={{color:'red'}}><b>5000</b></td>
            <td style={{color:'blue'}}><b>16000</b></td>
        </tr>
        <tr>
            <td>3</td>
            <td>16/08/22</td>
            <td>Reward</td>
            <td style={{color:'green'}}><b>500</b></td>
            <td>-</td>
            <td style={{color:'blue'}}><b>16500</b></td>
        </tr>
        <tr>
            <td>4</td>
            <td>16/08/22</td>
            <td>Penalty</td>
            <td>-</td>
            <td style={{color:'red'}}><b>500</b></td>
            <td style={{color:'blue'}}><b>16000</b></td>
            
        </tr>
        <tr>
            <td>5</td>
            <td>17/08/22</td>
            <td>Mr. Rakesh Seth</td>
            <td style={{color:'green'}}><b>200</b></td>
            <td>-</td>
            <td style={{color:'blue'}}><b>16200</b></td>
        </tr>
        <tr>
            <td>6</td>
            <td>10/08/22</td>
            <td>Main Account</td>
            <td>-</td>
            <td style={{color:'red'}}><b>3000</b></td>
            <td style={{color:'blue'}}><b>13200</b></td>
        </tr>
    </table>
    </div>
    </div>
    </>
  )
}
