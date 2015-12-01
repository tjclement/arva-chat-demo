import Surface                  from 'famous/core/Surface.js';
import {View}                   from 'arva-js/core/View.js';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';
import {CollectionLayout}       from 'famous-flex/src/layouts/CollectionLayout';
import {SingleLineTextInput}    from 'arva-js/components/inputs/SingleLineTextInput.js';

import {Messages}               from '../models/Messages.js';
import {ChatBubble}             from './ChatBubble.js';

export class HomeView extends View {
    constructor(){
        super();

        /* Create the renderable components we want to show in this view. */
        this.renderables.background = new Surface({properties:{
            backgroundColor: 'rgb(229, 229, 229)'
        }});

        this.renderables.chatView = new DataBoundScrollView({
            layoutOptions: {
                margins: [16, 16, 16, 16],
                spacing: 8
            },
            itemTemplate: (message) => new ChatBubble(message),
            dataFilter: () => true,
            dataStore: new Messages()
        });

        this.renderables.input = new SingleLineTextInput({placeholder: 'Enter message here'});
        this.inputField = this.renderables.input;

        /* Tell famous-flex how to render our components in Famous. */
        this.layouts.push((context) => {
            context.set('background', {
                size: [undefined, undefined],
                origin: [0.5, 0.5],
                align: [0.5, 0.5]
            });

            context.set('chatView', {
                size: [undefined, context.size[1] * 0.9],
                origin: [0.5, 0],
                align: [0.5, 0],
                translate: [0, 0, 10]
            });

            context.set('input', {
                size: [undefined, 64],
                origin: [0.5, 1],
                align: [0.5, 1],
                translate: [0, 0, 30]
            });
        });

        /* Hook up our renderables and layout function to famous-flex */
        this.build();
    }
}