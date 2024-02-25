# badger-form

This is a React form library built on the styles provided by
[badger-css](https://abw.github.io/badger-css/).

It is a work in progress.  Use at your own risk.

## Getting Started

Add the `@abw/badger-form` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/badger-form

## using yarn
$ yarn add @abw/badger-form

## using pnpm
$ pnpm add @abw/badger-form
```

You can then import the modules and start using them.

```jsx
import { Form, Field, Submit } from '@abw/badger-form'
```

## Documentation

Documentation and examples can be found at https://abw.github.io/badger-form/

Please be warned that this is a work in progress.

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/badger-form.git
$ cd badger-form
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build everything (library, CSS and documentation) for production.

```bash
$ pnpm build
```

To build the library only.

```bash
$ pnpm build:lib
```

To build the CSS only.

```bash
$ pnpm build:css
```

To build the documentation only.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```

## Author

Andy Wardley