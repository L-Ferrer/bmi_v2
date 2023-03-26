import { useEffect, useState } from 'react'
import { Typography } from 'antd'
import { InputNumber } from 'antd';
import { Radio } from 'antd';
import './App.css'

const { Title } = Typography

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState("m")
  const [bmi, setBMI] = useState(0)
  const [sbmi, setSBMI] = useState("")
  const [status, setStatus] = useState("_____")
  const [message, setMessage] = useState("Sie sind ein Mann, mit "+status+".")
  const bmi_min = 10
  const bmi_max = 50

  useEffect(() => {
    if(bmi == (undefined || Infinity ||NaN) || bmi < bmi_min || bmi > bmi_max) {
      setBMI(0)
    } else setBMI(Math.round((weight / ((height / 100) * (height / 100)))))
    if(gender == "m"){
      console.log("m")  
    }
    if(bmi == 0){
      setSBMI("")
    }
  }, [height, weight, gender])

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
                  <InputNumber min={1} max={300} value={height} onChange={(e: any) => setHeight(e)} />
                </div>
              </div>
              <div className="form_item">
                <label htmlFor="weight" className="label">Weight in kg</label>
                <InputNumber min={1} max={300} value={weight} onChange={(e: any) => setWeight(e)} />
              </div>
              <div className="form_item">
                <Radio.Group value={gender} onChange={(e: any) => setGender(e.target.value)}>
                  <Radio value="m" className="radio">Male</Radio>
                  <Radio value="f" className="radio">Female</Radio>
                </Radio.Group>
              </div>

              <div className="form_item" id="bmi">
                <label htmlFor="bmi" className="bmi_title">Your BMI</label>
                <p className="label" id="bmi_label">{sbmi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
