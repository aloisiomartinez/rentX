"use strict";

var _tsyringe = require("tsyringe");

var _LocalStorageProvider = require("@shared/container/providers/StorageProvider/implementations/LocalStorageProvider");

var _S3StorageProvider = require("@shared/container/providers/StorageProvider/implementations/S3StorageProvider");

const diskStorage = {
  local: _LocalStorageProvider.LocalStorageProvider,
  s3: _S3StorageProvider.S3StorageProvider
};

_tsyringe.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);