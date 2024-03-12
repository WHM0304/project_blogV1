-- CreateTable
CREATE TABLE `tbl_notice` (
    `n_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `n_uid` VARCHAR(191) NULL,
    `n_title` VARCHAR(191) NOT NULL,
    `n_div` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`n_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post` (
    `p_seq` INTEGER NOT NULL AUTO_INCREMENT,
    `p_uid` VARCHAR(191) NULL,
    `p_nseq` INTEGER NOT NULL,
    `p_date` VARCHAR(191) NULL,
    `p_time` VARCHAR(191) NULL,
    `p_title` VARCHAR(191) NOT NULL,
    `p_content` VARCHAR(191) NOT NULL,
    `p_image` VARCHAR(191) NULL,

    PRIMARY KEY (`p_seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
