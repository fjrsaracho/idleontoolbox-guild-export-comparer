import PublicGoogleSheetsParser from 'public-google-sheets-parser'
import compare from './idleonGuildDataComparer'

const SPREADSHEET_ID = '1wa3cMbWuVdulfPjJPAJHKkj6SLFrxAxmH2vtEmod744'

export async function prepareSpreadsheetData() {
    const data = await loadSpreadsheetData();

    return compare(data[0].json, data[1].json);
}

function loadSpreadsheetData() {
    const parser = new PublicGoogleSheetsParser()

    return parser.parse(SPREADSHEET_ID);
};
