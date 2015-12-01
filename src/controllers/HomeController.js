import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';

import {Messages}                   from '../models/Messages.js';

export class HomeController extends Controller {

    Index(){
        window.messages = this.messages = new Messages();

        if(!this.homeView) {
            this.homeView = new HomeView('world');
            this.homeView.inputField.on('message', (input) => {
                this.messages.add({from: 'Tom Clement', content: input});
            });
        }
        return this.homeView;
    }
}