import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Button, Checkbox } from 'antd';

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = (e) => {
            setter(e.target.value);
        }
        return [value, handler];
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

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
        setPasswordError(getValue(e) !== password);
        setPasswordCheck(getValue(e));
    }

    const onChangeTerm = (e) => {
        setTermError(false);
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
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                        {termError && <div style={{ color: 'red' }}>약관에 동의 해주세요.</div>}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
}

export default Signup;