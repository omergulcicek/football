import React from "react"

export function GetCustomizeText({value, text}) {
  return (
    <div style={{opacity: value}}>
      <strong>{Math.round(value * 100)}</strong> {text}
    </div>
  )
}

export default function Skills({skills, position}) {
  const { defending, physical, speed, vision, attacking, technical, shotStopping, distribution, heading, offensive } = skills[0].data

  return (

    position !== "GK"
      ? <table>
          <tbody>
            <tr>
              <td>
                <GetCustomizeText value={speed} text="Hız" />
              </td>
              <td>
                <GetCustomizeText value={vision} text="Vizyon" />
              </td>
            </tr>
            <tr>
              <td>
                <GetCustomizeText value={attacking} text="Atak" />
              </td>
              <td>
                <GetCustomizeText value={defending} text="Defans" />
              </td>
            </tr>
            <tr>
              <td>
                <GetCustomizeText value={technical} text="Teknik" />
              </td>
              <td>
                <GetCustomizeText value={physical} text="Fizik" />
              </td>
            </tr>
          </tbody>
        </table>
      : <table>
      <tbody>
        <tr>
          <td>
            <GetCustomizeText value={shotStopping} text="Karşılama" />
          </td>
          <td>
            <GetCustomizeText value={distribution} text="Dağıtım" />
          </td>
        </tr>
        <tr>
          <td>
            <GetCustomizeText value={heading} text="Hava" />
          </td>
          <td>
            <GetCustomizeText value={speed} text="Hız" />
          </td>
        </tr>
        <tr>
          <td>
            <GetCustomizeText value={offensive} text="Ofansif" />
          </td>
          <td>
            <GetCustomizeText value={physical} text="Fizik" />
          </td>
        </tr>
      </tbody>
    </table>
    
  )
}