import React from 'react'
import FormRender from 'form-render/lib/antd'
import buyImg from "@/assets/img/jinqiuluoye.png"
import testImg from "@/assets/img/xinxishidai.png"
import "./test.less"
import "./test.css"
import SCHEMA from "./schema.json";

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
          formData: {}
        };
      }
    
      // 数据变化回调
      onChange = value => {
        this.setState({
          formData: value
        });
      };
    
      // 数据格式校验回调
      onValidate = list => {
        console.log(list);
      };
    
    render() {
        const { formData } = this.state;
        const onSubmit = () => {
            alert(JSON.stringify(formData, null, 2));
        }
        return ( 
            <div className = "test test2">
              <h3> react-webpack-form-render</h3>
              <img src = { testImg } alt = "" /> 
              
              <div className = "formRender">
                  <FormRender
                      displayType="row"
                      {...SCHEMA}
                      formData={formData}
                      onChange={this.onChange}
                      onValidate={this.onValidate}
                  />
                   
              </div>
                
              <button onClick={onSubmit}>提交</button>
            </div>
        )
    }
}