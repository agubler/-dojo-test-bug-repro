import { v, w, registry } from '@dojo/widget-core/d';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import load from '@dojo/core/load';

declare const require: any;

registry.define('hello-world', () => {
    return load(require, './widgets/HelloWorld').then(([helloWorld]) => helloWorld.default);
});

export default class App extends WidgetBase<WidgetProperties> {

	private stranger = true;

	private toggleStranger(): void {
		this.stranger = !this.stranger;
		this.invalidate();
	}

	protected render(): DNode {
		const { stranger, toggleStranger } = this;

		return v('div', [
			w<any>('hello-world', { stranger, toggleStranger })
		]);
	}
}
