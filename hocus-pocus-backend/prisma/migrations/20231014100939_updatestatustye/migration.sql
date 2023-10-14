/*
  Warnings:

  - The values [processing,shipping,delivered] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PROCESSING', 'SHIPPING', 'DELIVERED');
ALTER TABLE "Orders" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Orders" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Orders" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
COMMIT;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "status" SET DEFAULT 'PROCESSING';
