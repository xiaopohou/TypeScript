//// [tests/cases/compiler/moduleAugmentationInAmbientModule2.ts] ////

//// [O.d.ts]

declare module "Observable" {
    class Observable {}
}

declare module "M" {
    class Cls { x: number }
}

declare module "Map" {
    import { Cls } from "M";
    module "Observable" {
        interface Observable {
            foo(): Cls;
        }
    }
}

//// [main.ts]
/// <reference path="O.d.ts" />

import {Observable} from "Observable";
import "Map";
let x: Observable;
x.foo().x;


//// [main.js]
/// <reference path="O.d.ts" />
"use strict";
exports.__esModule = true;
require("Map");
var x;
x.foo().x;
