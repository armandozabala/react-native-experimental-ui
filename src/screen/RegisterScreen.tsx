import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, Alert, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import { AuthContext } from '../context/AuthContext';
import { Background } from '../components/Background';

const RegisterScreen = ({navigation}: any) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    const { name, email, password, onChange} = useForm({
        name: '',
        email: '',
        password: ''
    });


    const onRegister = () => {
        console.log({name, email, password})
        Keyboard.dismiss();

        signUp({
            nombre: name,
            password,
            correo: email
        });
    }

    return (
        <>
        <Background/>
         <KeyboardAvoidingView 
             style={{ 
                 flex: 1,
             }}
             behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
         > 

              {/* Keyboard avoid view */}
              <View style={ loginStyles.formContainer }> 
       
              
              <Text style={ loginStyles.title }>Registro</Text>

              <Text style={ loginStyles.label }>Nombre: </Text>

                <TextInput
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        style={ [
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS   
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange(value, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}
                        autoCapitalize="words"
                        autoCorrect={false}
                />

              <Text style={ loginStyles.label }>Email: </Text>

              <TextInput
                      placeholder="Ingrese su email"
                      placeholderTextColor="rgba(255,255,255,0.4)"
                      keyboardType="email-address"
                      style={ [
                          loginStyles.inputField,
                          (Platform.OS === 'ios') && loginStyles.inputFieldIOS   
                      ]}
                      selectionColor="white"
                      onChangeText={ (value) => onChange(value, 'email')}
                      value={email}
                      onSubmitEditing={onRegister}
                      autoCapitalize="none"
                      autoCorrect={false}
              />

                  <Text style={ loginStyles.label }>Contraseña: </Text>

                  <TextInput
                      placeholder="*********"
                      placeholderTextColor="rgba(255,255,255,0.4)"
                      secureTextEntry={true}
                      style={ [
                          loginStyles.inputField,
                          (Platform.OS === 'ios') && loginStyles.inputFieldIOS   
                      ]}
                      selectionColor="white"
                      onChangeText={ (value) => onChange(value, 'password')}
                      value={password}
                      onSubmitEditing={onRegister}
                      autoCapitalize="none"
                      autoCorrect={false}
                  />

                  {/* Boton Login */}
                  <View style={loginStyles.buttonContainer}>
                      <TouchableOpacity
                          activeOpacity={0.8}
                          style={ loginStyles.button }
                          onPress={ onRegister }
                      >
                          <Text style={ loginStyles.buttonText }>Crear Cuenta</Text>
                      </TouchableOpacity>
                  </View>

                  {/**Crear nueva cuenta */}
                  <TouchableOpacity
                     onPress={()=> navigation.replace('LoginScreen')}
                     activeOpacity={0.8}
                     style={loginStyles.buttonReturn}
                  >
                        <Text style={loginStyles.buttonText}>Regresar a Login</Text>
                  </TouchableOpacity>
                  </View>

          </KeyboardAvoidingView>

      </>
    )
}

export default RegisterScreen
