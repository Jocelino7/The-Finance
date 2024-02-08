import { Dimensions, Text, View } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { colorScheme } from "../../../../utils/color";
const ChartConfig = {

    backgroundColor: colorScheme.main,
    backgroundGradientFrom: colorScheme.main,
    backgroundGradientTo: colorScheme.main,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}
const screenWidth = Dimensions.get("screen").width


function LineChartComponent() {
    return (
        <View>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={screenWidth} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={ChartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>)
}
function BarcChartComponent() {
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    return (
        <BarChart
            data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        data: [20, 45, 28, 80, 99, 43]
                    }
                ]
            }}
            width={screenWidth}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="$"
            chartConfig={ChartConfig}
            verticalLabelRotation={30}
        />
    )
}
function ProgressRingChartComponent() {
    // each value represents a goal ring in Progress chart
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };
    return (<ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={ChartConfig}
        hideLegend={false}
    />)
}
function PieChartComponent() {
    // each value represents a goal ring in Progress chart
    const data = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
    return (<PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={ChartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 50]}
        absolute
    />)
}
export { LineChartComponent, ProgressRingChartComponent, BarcChartComponent,PieChartComponent }