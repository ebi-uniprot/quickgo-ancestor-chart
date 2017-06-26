import * as d3 from "d3";
import dataProcessor from "./data-processor.js";

const url = 'http://ves-hx-c2.ebi.ac.uk:8082/QuickGO/services/ontology/go/terms/graph?';

class QuickGOAncestorChart extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['ids', 'stopids'];
  }

  set ids(ids) {
    this.setAttribute('ids', ids);
  }

  get ids() {
    return this.getAttribute('ids');
  }

  set stopids(stopids) {
    this.setAttribute('stopids', stopids);
  }

  get stopids() {
    return this.getAttribute('stopids');
  }

  connectedCallback() {
    fetch(`${url}startIds=${this.ids}&stopIds=${this.stopids}`).then(
      d => {
        d.json().then(d => {
          this.data = d.results;
          this._render();
        });
      }
    );
  }

  _render() {
    const width = 960,
      height = 500;

    const svg = d3.select(this)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    
  }

}

customElements.define("quickgo-ancestor-chart", QuickGOAncestorChart);
