CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);

BEGIN TRANSACTION;

CREATE TABLE "Products" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Products" PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NULL,
    "Description" TEXT NULL,
    "Price" INTEGER NOT NULL,
    "PictureUrl" TEXT NULL,
    "Type" TEXT NULL,
    "Brand" TEXT NULL,
    "QuantityInStock" INTEGER NOT NULL
);

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20240613160539_InitialCreate', '7.0.3');

COMMIT;

