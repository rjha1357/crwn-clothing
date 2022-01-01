import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }


    }

    handelChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handelChange} label='email' value={this.state.email} required />
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' handleChange={this.handelChange} label='password' value={this.state.password} required />
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign in </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>
                    </div>

                </form>
            </div>

        );
    }
}

export default SignIn;