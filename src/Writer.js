// LICENSE : MIT
"use strict";
import { vsprintf as format } from 'sprintf-js';
import ObjectAssign  from "object.assign";
const chalk = require('chalk');
class Writer {
    constructor(defaultText = "") {
        this._output = defaultText;
    }

    get output() {
        return this._output;
    }

    write(text) {
        this._output += text;
    }

    writeln(text) {
        this.write(text);
        this.writeEOL();
    }

    writeEOL() {
        this.write("\n");
    }
}

export class ReportWriter {
    constructor(options) {
        this.writer = new Writer();
        this.options = ObjectAssign({}, {
            critical: 30.0,
            satisfactory: 70.0
        }, options);
    }

    /**
     * @param {CoverageResult} result
     */
    writeReport(result) {
        this.writer.writeln("\nCode Coverage Results:\n");
        result.files.forEach(fileResult => {
            this.formatFileResult(fileResult);
        });
        let coverage = this.colorize(result.coverage);

        this.writer.writeEOL();
        this.writer.writeln("Total Coverage: " + coverage);
        this.writer.writeEOL();
        return this.writer.output;
    }

    formatFileResult(file) {
        let coverage = this.colorize(file.coverage);
        this.writeFileResult(coverage, file.executed, file.total, file.fileName);
    }

    colorize(coverage) {
        let percent = format('%6.2f%%', [coverage]);
        if (coverage >= this.options.satisfactory) {
            return chalk.green(percent);
        } else if (coverage < this.options.critical) {
            return chalk.red(percent);
        } else {
            return chalk.yellow(percent);
        }
    }

    writeFileResult(...values) {
        let output = format('%s (%2d/%2d) %s', values);
        this.writer.writeln(output);
    }
}