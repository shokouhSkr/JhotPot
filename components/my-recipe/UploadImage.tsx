import { BsCloudUpload } from "react-icons/bs";

const UploadImage = () => {
  return (
    <div className="mx-2 my-5 flex flex-col items-center gap-4 rounded-lg border-2 border-dotted border-main-gray bg-white py-6">
      <BsCloudUpload className="text-6xl font-light text-orange" />
      <div className="text-center">
        <span className="font-bold">Upload Cover</span>
        <p className="text-sm text-main-gray">Click here to upload cover photo.</p>
      </div>
    </div>
  );
};

export default UploadImage;
