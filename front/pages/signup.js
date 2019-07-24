import React, { useState } from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

import { Form, Input, Button, Checkbox } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        })
    }

    const onChangeId = (e) => {
        setId(getValue(e));
    }

    const onChangeNick = (e) => {
        setNick(getValue(e));
    }

    const onChangePassword = (e) => {
        setPassword(getValue(e));
    }

    const onChangePasswordChk = (e) => {
        setPasswordCheck(getValue(e));
    }

    const onChangeTerm = (e) => {
        setTerm(getCheck(e));
    }

    const getValue = (e) => {
        const { value } = e.target;
        return value;
    }

    const getCheck = (e) => {
        const { checked } = e.target;
        return checked;
    }

    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding: "10px" }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>

                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>

                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-pass" value={password} type="password" required onChange={onChangePassword} />
                    </div>

                    <div>
                        <label htmlFor="user-password-check">비밀번호확인</label>
                        <br />
                        <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordChk} />
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
}

export default Signup;