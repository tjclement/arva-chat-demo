/**
 * Created by tom on 27/08/15.
 */

import Surface                  from 'famous/core/Surface.js';
import {View}                   from 'arva-js/core/View.js';

export class ChatBubble extends View {
    constructor(message){
        super();

        this.renderables.box = new Surface({
            properties: {
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px 0px rgba(50, 50, 50, 0.08)'
            }
        });

        this.renderables.from = new Surface({
            content: message.from,
            properties: {
                color: 'rgba(0, 0, 0, 0.4)'
            }
        });

        this.renderables.content = new Surface({
            content: message.content,
            properties: {
                color: 'rgba(0, 0, 0, 0.8)'
            }
        });

        this.layouts.push((context) => {
            context.set('box', {
                size: [undefined, undefined]
            });

            context.set('from', {
                size: [undefined, 20],
                origin: [0, 1],
                align: [0.1, 0.45],
                translate: [0, 0, 10]
            });

            context.set('content', {
                size: [undefined, 20],
                origin: [0, 0],
                align: [0.1, 0.5],
                translate: [0, 0, 10]
            });
        });

        this.build();
    }

    getSize(){
        return [undefined, 64];
    }
}