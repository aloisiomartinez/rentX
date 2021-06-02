"use strict";

var _tsyringe = require("tsyringe");

var _DayjsDateProvider = require("@shared/container/providers/DateProvider/implementations/DayjsDateProvider");

_tsyringe.container.registerSingleton("DateProvider", _DayjsDateProvider.DayjsDateProvider);