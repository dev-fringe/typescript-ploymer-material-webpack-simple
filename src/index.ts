import { customElement, html, LitElement } from "lit-element";
import '@material/mwc-button';

@customElement("my-app")
class index extends LitElement {
  render() {
    return html`
    <mwc-button slot="primaryAction" dialogAction="set">set</mwc-button>
    `
  }
  onDialogClose (e) {
    if (e.detail.action === 'yes') {
      alert('BOOM')
    }
    else if (e.detail.action === 'no') {
      alert('nothing happens')
    }
  }  
}
