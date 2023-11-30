import { View } from "react-native";
import PagerView from "react-native-pager-view";
import ReportComponent from "./ReportComponent";
import { colorScheme } from "../../../../utils/color";

function Report() {
    return ( 
        <PagerView initialPage={0} pageMargin={10} style={{flex:1,backgroundColor:colorScheme.bg}}>
            <View key="1">
                <ReportComponent/>
                
            </View>
            <View key="2">
                <ReportComponent/>
                
            </View>
            <View key="3">
                <ReportComponent/>
                
            </View>

        </PagerView>
     );
}

export default Report;