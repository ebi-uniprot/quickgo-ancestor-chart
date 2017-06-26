# quickgo-ancestor-chart
A custom web component to display ancestor charts.

## Development
Run `npm install` to install dependencies.
Run `npm build` or `npm watch` to build the project
Run `npm serve` to launch browser-sync

## Usage
```html
<quickgo-ancestor-chart ids="GO:0035556" stopids="GO:0009987"></quickgo-ancestor-chart>
```
Both `ids` and `stopids` can be comma-separated lists of GO or ECO identifiers.
