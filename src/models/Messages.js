import {PrioritisedArray}               from 'arva-ds/core/PrioritisedArray.js';
import {Message}                        from './Message.js';

export class Messages extends PrioritisedArray {
    constructor() {
        super(Message);
    }
}