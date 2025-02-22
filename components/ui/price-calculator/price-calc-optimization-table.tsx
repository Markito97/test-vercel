import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const data = [
  { category: "Э/энергия", consumption: "350502", avgPrice3CZK: "5,75", cost3CZK: "24 174 033,00", price1CZK: "7,41", cost1CZK: "31 172 410,68" },
  { category: "Мощность", consumption: "1 160", avgPrice3CZK: "871,71", cost3CZK: "12 134 177,16", price1CZK: "-", cost1CZK: "-" },
  { category: "Общие затраты", consumption: "", avgPrice3CZK: "8,63", cost3CZK: "36 308 210,16", price1CZK: "7,41", cost1CZK: "31 172 410,68" }
];

export const PricingOptimizationTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="border border-gray-300">
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead colSpan={7} className="text-center text-xl font-bold border-b border-gray-300">
              Сравнение расходов на электроэнергию по 3 и 1 ценовым категориям, (без НДС)
            </TableHead>
          </TableRow>
          <TableRow className="border border-gray-300">
            <TableHead rowSpan={2} className="border-b border-gray-300 font-bold">Показатели</TableHead>
            <TableHead rowSpan={2}>Средний объем потребления, кВт*ч, кВт в месяц</TableHead>
            <TableHead colSpan={2} className="text-center">До расчета на ценовом калькуляторе</TableHead>
            <TableHead colSpan={2} className="text-center">После расчета на ценовом калькуляторе</TableHead>
            <TableHead rowSpan={2} className="text-center font-bold border-b border-gray-300">Экономия, руб.</TableHead>
          </TableRow>
          <TableRow className="border-b border-gray-300 font-bold">
            <TableHead>Средняя цена по 3 ЦК, руб./кВт*ч, руб./кВт</TableHead>
            <TableHead>Стоимость по 3 ЦК, руб./год</TableHead>
            <TableHead>Цена по 1 ЦК, руб./кВт</TableHead>
            <TableHead>Стоимость по 1 ЦК, руб./год</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-gray-300">
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-bold">{row.category}</TableCell>
              <TableCell className="font-bold">{row.consumption}</TableCell>
              <TableCell className="font-bold">{row.avgPrice3CZK}</TableCell>
              <TableCell className="font-bold">{row.cost3CZK}</TableCell>
              <TableCell className="font-bold">{row.price1CZK}</TableCell>
              <TableCell className="font-bold">{row.cost1CZK}</TableCell>
              {index === 0 && (
                <TableCell rowSpan={data.length} className="text-center font-bold border-l border-gray-300">
                  5 135 799,48
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
