
"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const formatNumber = (value: number) => value.toLocaleString("ru-RU"); 

const chartData = [
    { name: "3ЦК", energy: 24174033, power: 12134177 },
    { name: "1ЦК", energy: 31172410, savings: 5135799 }
];

const chartConfig = {
    energy: {
        label: "Э/энергия, тыс.руб",
        color: "hsl(var(--chart-1))",
    },
    power: {
        label: "Мощность тыс.руб",
    },
    savings: {
        label: "Экономия, тыс.руб",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function PriceCalcChart() {
    return (
        <Card>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="energy" stackId="a" fill="#005FB8" name="Э/энергия, тыс.руб">
                            <LabelList dataKey="energy" position='center' style={{ fill: '#FFFFFF', fontWeight: 'bold', fontSize: '32px' }} formatter={formatNumber} />
                        </Bar>
                        <Bar dataKey="power" stackId="a" fill="#e7f5ff" name="Мощность, тыс.руб" >
                            <LabelList dataKey="power" position="center" style={{ fill: "#000000", fontWeight: "bold", fontSize: '32px' }} formatter={formatNumber} />
                        </Bar>
                        <Bar dataKey="savings" stackId="a" fill="#1FA95C" name="Экономия, тыс.руб">
                            <LabelList dataKey="savings" position="center" style={{ fill: "#ffffff", fontWeight: "bold", fontSize: '32px' }} formatter={formatNumber} />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
