import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import Button from "../ui/button";

const ExportExcel = ({
  excelData,
  fileName,
}: {
  excelData: any;
  fileName: string;
}) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async (fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return <Button className="bg-app text-center px-4 py-[4px] rounded-md text-white" onClick={(e) => exportToExcel(fileName)}>Excel Export</Button>;
};
export default ExportExcel;
