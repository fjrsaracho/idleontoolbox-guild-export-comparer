import PublicGoogleSheetsParser from 'public-google-sheets-parser'
import compare from './idleonGuildDataComparer'

const SPREADSHEET_ID = '1wa3cMbWuVdulfPjJPAJHKkj6SLFrxAxmH2vtEmod744'

export async function extractGP(guild) {
    const data = await loadSpreadsheetData(guild);

    // temporary workaround, because spreadsheet data has inconsistent naming
    const old = data[0].json ? data[0].json : data[0].data
    const current = data[1].json ? data[1].json : data[1].data

    return compare(old, current);
}

function loadSpreadsheetData(guild) {
    const parser = new PublicGoogleSheetsParser()

    return parser.parse(SPREADSHEET_ID, { sheetName: guild });
};
