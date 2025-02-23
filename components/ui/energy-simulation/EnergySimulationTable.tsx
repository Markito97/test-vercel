import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "../table";

const data = [
  {
    category: "Потребление, кВт-ч",
    april1: "188 688",
    april3: "188 688",
    may1: "183 083",
    may3: "183 083",
    june1: "230 534",
    june3: "230 534",
    july1: "232 895",
    july3: "232 895",
    august1: "202 116",
    august3: "202 116",
  },
  {
    category: "Цена, руб. / кВт-ч",
    april1: "5,91",
    april3: "5,66",
    may1: "5,72",
    may3: "5,56",
    june1: "5,95",
    june3: "5,66",
    july1: "6,46",
    july3: "6,11",
    august1: "6,5",
    august3: "6,1",
  },
  {
    category: "Затраты, руб.",
    april1: "1 115 491",
    april3: "1 305 910",
    may1: "1 046 952",
    may3: "1 017 946",
    june1: "1 372 313",
    june3: "1 305 910",
    july1: "1 504 613",
    july3: "1 422 393",
    august1: "1 312 808",
    august3: "1 233 895",
  },
  {
    category: "Экономический эффект, руб.",
    april1: "-",
    april3: "66 402",
    may1: "-",
    may3: "29 006",
    june1: "-",
    june3: "82 220",
    july1: "-",
    july3: "78 912",
    august1: "-",
    august3: "",
  },
  {
    category: "Итого снижение по текущей ЦК",
    april1: "4 767",
    april3: "",
    may1: "4 364",
    may3: "",
    june1: "6 213",
    june3: "",
    july1: "7 450",
    july3: "",
    august1: "5 905",
    august3: "",
  },
  {
    category: "Итого снижение по наиболее выгодной ЦК",
    april1: "",
    april3: "64 407",
    may1: "",
    may3: "33 371",
    june1: "",
    june3: "72 615",
    july1: "",
    july3: "89 671",
    august1: "",
    august3: "84 818",
  },
];

export const EnergySimulationTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="border border-gray-300">
        <TableHeader className="bg-gray-100 font-bold">
          <TableRow className="border-b border-gray-300">
            <TableHead className="border-b border-gray-300 font-bold p-2">Дата</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300" colSpan={2}>Апрель</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300" colSpan={2}>Май</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300" colSpan={2}>Июнь</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200 font-bold" colSpan={2}>Июль</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200 font-bold" colSpan={2}>Август</TableHead>
          </TableRow>
          <TableRow className="border-b border-gray-300">
            <TableHead className="border-b border-gray-300 p-2">Ценовая категория</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">1 ЦК (текущая)</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">3 ЦК</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">1 ЦК (текущая)</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">3 ЦК</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">1 ЦК (текущая)</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300">3 ЦК</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200">1 ЦК (текущая)</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200">3 ЦК</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200">1 ЦК (текущая)</TableHead>
            <TableHead className="text-center p-2 border-b border-gray-300 bg-gray-200">3 ЦК</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b border-gray-300">
          {data.map((row, index) => (
            <TableRow key={index} className="border-b border-gray-300">
              <TableCell className="font-medium p-2">{row.category}</TableCell>
              <TableCell className="text-center p-2">{row.april1}</TableCell>
              <TableCell className="text-center p-2">{row.april3}</TableCell>
              <TableCell className="text-center p-2">{row.may1}</TableCell>
              <TableCell className="text-center p-2">{row.may3}</TableCell>
              <TableCell className="text-center p-2">{row.june1}</TableCell>
              <TableCell className="text-center p-2">{row.june3}</TableCell>
              <TableCell className="text-center p-2 bg-gray-200">{row.july1}</TableCell>
              <TableCell className="text-center p-2 bg-gray-200">{row.july3}</TableCell>
              <TableCell className="text-center p-2 bg-gray-200">{row.august1}</TableCell>
              <TableCell className="text-center p-2 bg-gray-200">{row.august3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};