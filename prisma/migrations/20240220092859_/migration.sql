/*
  Warnings:

  - Added the required column `types` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "types" "EmployeeTypes" NOT NULL;
