import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import Head from "./head"
import Footer from "./footer"

export default function Create() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const postData = () => {
    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }
    
    const postData = () => {
        axios.post(`https://6508fd9356db83a34d9ccb26.mockapi.io/myDb`, 
        {
            email,
            password
        })
        window.open("/register-last")
    }

    return (
        <div>
            <Head></Head>
            <div className="reg2-main">
            <div className="reg2-console">
            <h5 className="step2-reg">STEP 1 OF 3</h5>
            <h3 className="step2-reg-next">Create a password to<br></br> start<br /> your membership</h3>
            <p className="step3-reg">Just a few more steps and you're done!<br />We hate paperwork, too.</p>
            <Form className="create-form" >
                <Form.Field>
                <label className="label-reg" for="email">Email address or phone number</label>
                    <input className="email-reg" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label className="label2-reg" for="password">Password</label>
                    <input className="pwd-reg" placeholder='password'  onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit' className="reg-next">Submit</Button>
            </Form>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}