export default (bucketName: string, fileName: string) =>
  `${process.env.SERVER_HOST}/files/show/${bucketName}/${fileName}`;
