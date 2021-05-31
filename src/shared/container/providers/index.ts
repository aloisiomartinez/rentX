import { container } from "tsyringe";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { EtherealMailProvider } from "@shared/container/providers/MailProvider/implementations/EtherealMailProvider";
import { LocalStorageProvider } from "@shared/container/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "@shared/container/providers/StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>("DateProvider", DayjsDateProvider);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk]
);
