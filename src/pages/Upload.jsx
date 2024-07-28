import React from 'react';
import Button from "../components/common/Button";

const Upload = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='grid md:grid-cols-1 sm:grid-cols-2 gap-16 max-w-4xl'>
        <Button
          active={true}
          linkto={"/upload/uploadLocalfile"}
          className="p-8 sm:p-12 md:p-16 w-full"
          style={{ backgroundColor: 'blue', color: 'white' }} // added color: 'white' for better contrast
        >
          Upload Local File
        </Button>
        <Button
          active={true}
          linkto={"/upload/uploadUsingDriveLink"}
          className="p-8 sm:p-12 md:p-16 w-full"
          style={{ backgroundColor: 'blue', color: 'white' }} // added color: 'white' for better contrast
        >
          Upload using Drive Link
        </Button>
      </div>
    </div>
  );
}

export default Upload;
