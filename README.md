# monorepo-app

Test monorepo architecture for a single frontend application using [pnpm workspaces](https://pnpm.io/workspaces).

## Structure

### Directory `lib`

Contains library packages (e.g. configs, components, utils, etc.) which can be installed by other packages.

### Directory `domains`

Contains the business logic and pages split up into multiple (mostly) independent packages.
Exporting only the `routes` which are used in the `app` package. A domain could have exports which could be used by
other domains as dependency

### Directory `app`

The main entry, which bundles the domains into the complete frontend application. Serves as shell for the domains.


## Usage

1. Checkout the repo
2. Run `pnpm install`
3. Run `pnpm run dev` to see the result

