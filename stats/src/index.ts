import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { ConsoleReport } from "./report/ConsoleReport";
import { Summary } from "./Summary";
import { HtmlReport } from "./report/HtmlReport";
const csvFileReader = new CsvFileReader("stats/football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

summary.buildAndOutputReport(matchReader.matches);
