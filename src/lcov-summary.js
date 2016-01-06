// LICENSE : MIT
"use strict";
import parse from "lcov-parse";
import { FileResult,CoverageResult } from "./FileResult";
import { ReportWriter } from "./Writer";
function summary(content, callback) {
    if (!content) {
        return callback(new Error("content is empty"));
    }
    parse(content, (error, results) => {
        try {
            /** @type FileResult[] */
            const fileResults = results.map((result) => {
                return new FileResult(result.file, result.lines);
            });
            const coverageResult = new CoverageResult(fileResults);
            const writer = new ReportWriter();
            const output = writer.writeReport(coverageResult);
            callback(null, output);
        } catch (error) {
            callback(error);
        }
    });
}
module.exports = summary;