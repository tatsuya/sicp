# sqrt

A TypeScript code to compute square roots. It uses Newton's method of successive approximations, which says that whenever we have a guess `y` for the value of the square root of a number `x`, we can perform a simple manipulation to get a better guess (one closer to the acqual square root) by averaging `y` with `x/y`.

The original code comes from the book [Structure and Interpretation of Computer Programs](https://sarabander.github.io/sicp/html/index.xhtml) in its section 1.1.7 Example: Square Roots by Newton’s Method.

## Development

- Build: `npm run build`
- Run tests: `npm test`
- Run lint: `npm run lint`
- Run lint with autofix: `npm run lint:fix`
