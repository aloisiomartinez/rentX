"use strict";

var _tsyringe = require("tsyringe");

var _EtherealMailProvider = require("@shared/container/providers/MailProvider/implementations/EtherealMailProvider");

var _SESMailProvider = require("@shared/container/providers/MailProvider/implementations/SESMailProvider");

const mailProvider = {
  ethreal: _tsyringe.container.resolve(_EtherealMailProvider.EtherealMailProvider),
  ses: _tsyringe.container.resolve(_SESMailProvider.SESMailProvider)
};

_tsyringe.container.registerInstance("MailProvider", mailProvider[process.env.MAIL_PROVIDER]);