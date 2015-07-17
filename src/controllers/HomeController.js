/**
 * Created by tom on 17/07/15.
 */
import {Controller}                 from 'arva-mvc/core/Controller';
import {HomeView}                   from '../views/HomeView';

export class HomeController extends Controller {

    Index(){
        if(!this.homeView) {
            this.homeView = new HomeView('world');
        }
        return this.homeView;
    }
}