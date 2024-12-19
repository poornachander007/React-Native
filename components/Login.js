import { TextInput, Button, View } from "react-native";
import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        if(username === 'poorna' && password === '123'){
            console.log('Login successful');
        } else {
            console.log('Invalid credentials');
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' , padding: 20, borderRadius: 20 }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />    
        </View>
    );
}

export default Login