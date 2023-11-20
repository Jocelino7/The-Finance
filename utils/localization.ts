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
        dec: string

    }

}

const localStrings = new LocalizedStrings<LocalString>({
    en: {
        month:{
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
        }
      
    },
    pt: {
        month:{
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

        }
       
    }
});
export default localStrings