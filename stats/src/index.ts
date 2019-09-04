import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("stats/football.csv");
const summary = Summary.winAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndOutputReport(matchReader.matches);
