import { useEffect, useState } from 'react'
import { Typography, InputNumber, Radio, Button } from 'antd'
import './App.css'

const { Title } = Typography

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState("m")
  const [sbmi, setSBMI] = useState("")
  const [message, setMessage] = useState("")
  const bmi_min = 10
  const bmi_max = 50

  useEffect(() => {
    setSBMI("0")
  }, [])

  function calculateBMI() {
    console.log("Calculating BMI")
    let result;
    if (height === 0 || weight === 0) {
      setSBMI("0")
    }
    else {
      result = (weight / ((height / 100) * (height / 100)))
      if (result < bmi_min) {
        setSBMI("< " + bmi_min.toString())
        return
      }
      if (result > bmi_max) {
        setSBMI("> " + bmi_max.toString())
        return
      }
      setSBMI(Math.round(result).toString())
      //* Data from https://plakos-akademie.de/bmi-rechner/
      // 1-10
      if (age >= 1 && age <= 10) {
        if (gender === "m") {
          if (result < 15) {
            setMessage("Underweight")
            return
          } if (result > 18) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 15) {
            setMessage("Underweight")
            return
          } if (result > 19) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 11-18
      if (age >= 11 && age <= 18) {
        if (gender === "m") {
          if (result < 17) {
            setMessage("Underweight")
            return
          } if (result > 22) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 17) {
            setMessage("Underweight")
            return
          } if (result > 23) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 19-24
      if (age >= 19 && age <= 24) {
        if (gender === "m") {
          if (result < 19) {
            setMessage("Underweight")
            return
          } if (result > 24) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 18) {
            setMessage("Underweight")
            return
          } if (result > 23) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 25-34
      if (age >= 25 && age <= 34) {
        if (gender === "m") {
          if (result < 20) {
            setMessage("Underweight")
            return
          } if (result > 25) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 19) {
            setMessage("Underweight")
            return
          } if (result > 24) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 35-44
      if (age >= 35 && age <= 44) {
        if (gender === "m") {
          if (result < 21) {
            setMessage("Underweight")
            return
          } if (result > 26) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 20) {
            setMessage("Underweight")
            return
          } if (result > 25) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 45-54
      if (age >= 45 && age <= 54) {
        if (gender === "m") {
          if (result < 22) {
            setMessage("Underweight")
            return
          } if (result > 27) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 21) {
            setMessage("Underweight")
            return
          } if (result > 26) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 55-64
      if (age >= 55 && age <= 64) {
        if (gender === "m") {
          if (result < 23) {
            setMessage("Underweight")
            return
          } if (result > 28) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 22) {
            setMessage("Underweight")
            return
          } if (result > 27) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
      // Age 65+
      if (age >= 65) {
        if (gender === "m") {
          if (result < 24) {
            setMessage("Underweight")
            return
          } if (result > 29) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        } else {
          if (result < 23) {
            setMessage("Underweight")
            return
          } if (result > 28) {
            setMessage("Overweight")
            return
          } else {
            setMessage("Normal")
            return
          }
        }
      }
    }
  }

  return (
    <>
      <div className="app">
        <div className="title_container">
          <h1 className="title">BMI</h1>
        </div>
        <div className="content_container">
          <div className="content">
            <div className="content_title">
              <Title level={3}></Title>
            </div>
            <div className="content_form">
              <div className="form">
                <div className="form_item">
                  <label htmlFor="height" className="label">Height in cm</label>
                  <InputNumber min={1} max={300} value={height} onChange={(e: any) => setHeight(e)} onPressEnter={calculateBMI} />
                </div>
              </div>
              <div className="form_item">
                <label htmlFor="weight" className="label">Weight in kg</label>
                <InputNumber min={1} max={300} value={weight} onChange={(e: any) => setWeight(e)} onPressEnter={calculateBMI} />
              </div>
              <div className="form_item">
                <label htmlFor="weight" className="label">Age</label>
                <InputNumber min={1} max={150} value={age} onChange={(e: any) => setAge(e)} onPressEnter={calculateBMI} />
              </div>
              <div className="form_item">
                <Radio.Group value={gender} onChange={(e: any) => setGender(e.target.value)}>
                  <Radio value="m" className="radio">Male</Radio>
                  <Radio value="f" className="radio">Female</Radio>
                </Radio.Group>
              </div>
              <div className="button">
                <Button type="primary" onClick={calculateBMI}>Calculate</Button>
              </div>

              <div className="form_item" id="bmi">
                <label htmlFor="bmi" className="bmi_title">Your BMI is</label>
                <p className="label" id="bmi_label">{sbmi}</p>
                <p className="msg">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
