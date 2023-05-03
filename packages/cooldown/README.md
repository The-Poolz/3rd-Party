# The CoolDown lib

The library converts the received data from the [`DelayVault` contract](https://bscscan.com/address/0x5eb57B1210338b13E3D5572d5e1670285Aa71702#readContract#F3) `GetDelayLimits` method:

```typescript
interface IGetDelayLimits {
  Amounts: string[]
  StartDelays: string[]
  CliffDelays: string[]
  FinishDelays: string[]
}
```

The results of the conversion, see the [tests](./tests/cooldownBlock.test.ts)

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/@poolzfinance/cooldown) or using [Yarn](https://yarnpkg.com/package/@poolzfinance/cooldown)

### Using NPM

```bash
npm install @poolzfinance/cooldown
```

### Yarn

```bash
yarn add @poolzfinance/cooldown
```

## Usage

```typescript
import { cooldownBlock } from "@poolzfinance/cooldown"

const result = cooldownBlock(delayLimits)
```
