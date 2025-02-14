-- AlterTable
ALTER TABLE `user` MODIFY `phone` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Pizza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(191) NOT NULL,
    `pepperoni` BOOLEAN NOT NULL DEFAULT false,
    `sausage` BOOLEAN NOT NULL DEFAULT false,
    `meatball` BOOLEAN NOT NULL DEFAULT false,
    `salami` BOOLEAN NOT NULL DEFAULT false,
    `mushroom` BOOLEAN NOT NULL DEFAULT false,
    `jalapeno` BOOLEAN NOT NULL DEFAULT false,
    `olive` BOOLEAN NOT NULL DEFAULT false,
    `garlic` BOOLEAN NOT NULL DEFAULT false,
    `onion` BOOLEAN NOT NULL DEFAULT false,
    `greenPepper` BOOLEAN NOT NULL DEFAULT false,
    `pineapple` BOOLEAN NOT NULL DEFAULT false,
    `basil` BOOLEAN NOT NULL DEFAULT false,
    `tomato` BOOLEAN NOT NULL DEFAULT false,
    `anchovy` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pizza` ADD CONSTRAINT `Pizza_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
