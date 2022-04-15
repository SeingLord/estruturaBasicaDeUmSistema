import React, { useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () =>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <Container>
                        
            <Form>
                <FormTitle>
                    Entrar
                </FormTitle>

                <Input
                    type="email" 
                    placeholder="E-mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>
    )
}

export default SignIn;