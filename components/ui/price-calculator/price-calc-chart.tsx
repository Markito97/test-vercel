
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

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
                        <Bar dataKey="energy" stackId="a" fill="#005FB8" name="Э/энергия, тыс.руб" />
                        <Bar dataKey="power" stackId="a" fill="#e7f5ff" name="Мощность, тыс.руб" />
                        <Bar dataKey="savings" stackId="a" fill="#1FA95C" name="Экономия, тыс.руб" />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Затраты на электроэнергию
                    снижены на 15%
                    <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    )
}
