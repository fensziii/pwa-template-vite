import { pwaInfo } from 'virtual:pwa-info';

import * as Utils from "./plugins/utils";

import Themer from "./plugins/themer";


const theme = Themer();

theme.initTheme();


console.log(Utils.msToTime(1300 /* ms */));


// eslint-disable-next-line no-console
console.log(pwaInfo)
