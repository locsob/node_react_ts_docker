export function getFileName(file: Express.Multer.File) {
    return `${file.originalname}.${file.mimetype.split('/')[1]}`;
}