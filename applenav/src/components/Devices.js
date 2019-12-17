

import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import {faDesktop, faTabletAlt, faMobileAlt, faTv, faMusic, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
dom.watch();

library.add(faDesktop, faTabletAlt, faMobileAlt, faClock, faTv, faMusic, faQuestionCircle)

export default 
{
    "mac": {
        // "icon": "fas fa-desktop",
        "icon": faDesktop,
        "links": ["MacBook", "MacBook Air", "MacBookPro", "iMac", "iMac Pro", "Mac Pro", "Mac mini", "Accessories", "High Sierra", "Compare"]
    },
    "ipad": {
        "icon": faTabletAlt,
        "links": ["iPad Pro", "iPad Air", "iPad", "iPad mini", "Compare", "Apple Pencil", "Smart Keyboard", "AirPods", "Acessories", "iPadOS"]
    },
    
    "iphone":{
        "icon": faMobileAlt,
        "links": ["iPhone 11 Pro", "iPhone 11", "iPhone XR", "iPhone 8", "Compare", "Apple Card", "AirPods", "Accessories", "iOS13"]
    },
    "watch": {
        "icon": faClock,
        "links": ["Apple Watch Series 5", "Apple Watch Nike", "Apple Watch Hermes", "Apple Watch Edition", "Apple Watch Series 3", "Compare", "Bands", "AirPods", "Accessories", "watchOS"]
    },
    "tv": {
        "icon": faTv,
        "links": ["Apple TV app", "Apple TV+", "Apple TV 4K", "AppleTV HD", "AirPlay", "Accessories"]
    },
    "music": {
        "icon": faMusic,
        "links": ["Apple Music", "AirPods Pro", "AirPods", "HomePod", "iPod touch", "Music Accessories", "Gift Cards"]
    },
    "support": {
        "icon": faQuestionCircle,
        "links": []
    }
}