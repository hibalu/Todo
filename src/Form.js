import React, {useState} from 'react';
import'./Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram,Github} from'react-bootstrap-icons';
function Form() {
    return(
      <div className="form">
        <h1 className='header'>Registration Form</h1>
    
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="Mobile Number">
                  <label className="form__label" for="Mobile Number">Mobile Number </label>
                  <input  type="Mobile Number" id="Mobile Number" className="form__input" placeholder="Number"/>
              </div>
              <div className="Address">
                  <label className="form__label" for="Address">Address </label>
                  <input  type="Text" id="Address" className="form__input" placeholder="Text"/>
              </div>
              <div className="city">
                  <label className="form__label" for="city">City</label>
                  <input  type="" id="text" className="form__input" placeholder="Text"/>
              </div>
              <div className="state">
                  <label className="form__label" for="state">state</label>
                  <input  type="text" id="City" className="form__input" placeholder="Text"/>
              </div>
              <div className="pincode">
                  <label className="form__label" for="pincode">pincode</label>
                  <input  type="Number" id="Pincode" className="form__input" placeholder="Pin Number"/>
              </div>
              <div className="country">
                  <label className="form__label" for="country">country </label>
                  <input  type="text" id="country" className="form__input" placeholder="Text"/>
              </div>
              <div className="company name">
                  <label className="form__label" for="company name">Company Name </label>
                  <input  type="text" id="company name" className="form__input" placeholder="Text"/>
              </div>
              <div className="occupation">
                  <label className="form__label" for="occupation">Occupation </label>
                  <input  type="Text" id="occupation" className="form__input" placeholder="Text"/>
              </div>
              <div className="years of experrience">
                  <label className="form__label" for="years of experience">Years of Experience </label>
                  <input  type="Text" id="years of experience" className="form__input" placeholder="Text"/>
              </div>





              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>
          <div class="footer">
          <label className="form__label" for="">New user </label>
              <button type="submit" class="btn">Sign in</button>
          </div>
       <div class="footer">
        <Facebook/>
        <Instagram/>
     
        <Github/>
       </div>
      </div>      
    )       
}
export default Form;