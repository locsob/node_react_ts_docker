import React, {FC, useContext, useState} from 'react';
import Header from "../components/Header";
import {post} from "../utils/http-client";
import {useCredentialsForm} from "../hook/credentials-form";
import {UserContext} from "../context/user";

interface OwnProps {}

type Props = OwnProps;


const Signup: FC<Props> = ({}) => {
    const signupRequest = async () => {
        try {
            const response = await post<boolean>('signup', {email, password});
        } catch (e) {
            console.log(e.message);
        }
    }

    const {formData, changeValue} = useCredentialsForm({
        sendData: signupRequest
    });

    const {email, password, disabled} = formData;

    return (
      <div>
          <Header/>
          <div>
              <label>
                  Email
                  <input
                      type="text"
                      value={email}
                      onChange={e => changeValue('email', e.target.value)}
                  />
              </label>
              <label>
                  Password
                  <input
                      type="password"
                      value={password}
                      onChange={e => changeValue('password', e.target.value)}
                  />
              </label>
              <input
                  type="submit"
                  value="Signup"
                  disabled={disabled}
                  onClick={signupRequest}
              />
          </div>
      </div>
    );
};

export default Signup;
