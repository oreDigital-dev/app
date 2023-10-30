import XLSX from 'xlsx';

export const readExcel = (file:Blob) => {
  const reader = new FileReader();

  reader.onload = (e:any) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming you want to read the first sheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Parse the sheet's data 
    const excelData = XLSX.utils.sheet_to_json(worksheet);

    // setExcelData(excelData);
  };

  reader.readAsArrayBuffer(file);
};
