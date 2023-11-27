import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');
export type LocalString = {
    month: {
        jan: string,
        feb: string,
        mar: string,
        apr: string,
        ma: string,
        jun: string,
        jul: string,
        aug: string,
        sept: string,
        oct: string,
        nov: string,
        dec: string,
    },
    login: string,
    welcome: string,
    submit: string,
    haveAnAccount: string,
    dontHaveAnAccount: string,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    repearPassword:string

}

const localStrings = new LocalizedStrings<LocalString>({
    en: {
        month: {
            jan: "January",
            feb: "February",
            mar: "March",
            apr: "April",
            ma: "May",
            jun: "June",
            jul: "July",
            aug: "August",
            sept: "September",
            oct: "October",
            nov: "November",
            dec: "December"
        },
        login: "Login",
        haveAnAccount: "Already have an account? Signin",
        dontHaveAnAccount: "Don´t have an Account? Signup",
        submit: "Submit",
        welcome: "Welcome",
        firstName:"First Name",
        lastName:"Last Name",
        email:"E-mail",
        password:"Password",
        repearPassword:"Repeat Password"
        


    },
    pt: {
        month: {
            jan: "Janeiro",
            feb: "Fevereiro",
            mar: "Março",
            apr: "Abril",
            ma: "Maio",
            jun: "Junho",
            jul: "Julho",
            aug: "Agosto",
            sept: "Setembro",
            oct: "Outubro",
            nov: "Novembro",
            dec: "Dezembro"
        },
        login: "Login",
        haveAnAccount: "Já tem uma conta? Entre",
        dontHaveAnAccount: "Não tem uma conta? Inscreve-se",
        submit: "Confirmar",
        welcome: "Seja bem-vindo",
        firstName:"Primeiro Nome",
        lastName:"Último Nome",
        email:"E-mail",
        password:"Senha",
        repearPassword:"Repita Senha"

    }
});
export default localStrings