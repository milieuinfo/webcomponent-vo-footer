import { LitElement, html } from "./assets/@polymer/lit-element/lit-element.js";
import '../vo-merklogo/dist/vo-merklogo.js';

/**
 * `vo-footer`
 * De standaard footer voor websites en applicaties van de Vlaamse overheid
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VoFooter extends LitElement {
	render() {
		return html`
			<style>
				:host {
					background: rgb(51, 51, 51);
					color: rgb(184, 184, 184);
					font-size: 14px;
				}
		
				#wrapper {
					max-width: 1040px;
					width: 100%;
					margin: auto;
				}
		
				vo-merklogo {
					margin-right: 5px;
				}
		
				a,
				a:active,
				a:link,
				a:visited {
					color: rgb(184, 184, 184);
					text-decoration: none;
				}
		
				a:hover {
					color: white
				}
		
				.spacer {
					@apply --layout-flex-10;
				}
		
				#wrapper {
					@apply --layout-vertical;
					align-items: stretch;
				}
		
				#top-row {
					@apply --layout-horizontal;
					margin: 20px 0;
				}
		
				#bottom-row {
					@apply --layout-horizontal;
					@apply --layout-center;
					@apply --layout-justified;
		
					border-top: solid 1px #444;
					padding: 3px 10px;
					min-height: 36px;
				}
		
				#bottom-row iron-icon {
					--iron-icon-width: 14px;
					--iron-icon-height: 14px;
				}
		
				#credits {
					@apply --layout-vertical;
					@apply --layout-start;
				}
		
				#vo-footer-content {
					margin-left: auto;
				}
		
				#credits-vo {
					font-size: 140%;
				}
		
				#credits-departement {
					font-weight: 100;
				}
		
				#credits-departement a {
					text-decoration: underline;
				}
			</style>
			
	 		<div id='wrapper'>	
	 			<div id='top-row'>
	 				<vo-merklogo></vo-merklogo>
					<div id='credits'>
						<span id='credits-vo'>Dit is een offici&euml;le website van de Vlaamse overheid</span>
						<span id='credits-departement'>uitgegeven door
						<a target='_blank' href='//www.omgevingvlaanderen.be'>het departement Omgeving</a></span>
					</div>
	 				<div id="vo-footer-content">
	 					<slot></slot>
	 				</div>
	 			</div>
	 			<div id='bottom-row'>
	 				<a href='//www.vlaanderen.be/nl/disclaimer' target="_blank">
	 					Disclaimer&nbsp;
	 					<iron-icon icon="icons:link" style="opacity:.4"></iron-icon>
	 				</a>
	 			<div class="spacer"></div>
	 		</div>
		`;
	}
}

customElements.define('vo-footer', VoFooter);
