# lcov-summary

Cat lcov file and show summary of coverage to terminal.

## Installation

    npm install lcov-summary

Dependencies

- [davglass/lcov-parse](https://github.com/davglass/lcov-parse "davglass/lcov-parse")

## Usage

    cat lcov.info | lcov-summary
    # or
    lcov-summary lcov.info

`lcov.info` should be compatible for [lcov](http://ltp.sourceforge.net/coverage/lcov/geninfo.1.php) format. 

If you want to get no-color version, please use `--no-color` option.

    $ lcov-summary --no-color lcov.info

### Example

    $ lcov-summary test/fixtures/lcov.info
    
![screenshot](https://monosnap.com/file/Qgw6opV66MynWAw1aLZqRP1J6qM3S6.png)


## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT