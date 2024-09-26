import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto my-16">
      <h2 className="text-3xl text-center font-bold mb-12">Features that Make Us Stand Out</h2>
      <div className="flex justify-around">
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-4">Drag-and-Drop Builder</h3>
          <p className="text-gray-600">Easily create forms with a drag-and-drop interface.</p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-4">Customizable Templates</h3>
          <p className="text-gray-600">Choose from a variety of pre-designed templates.</p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold mb-4">Real-Time Responses</h3>
          <p className="text-gray-600">Receive responses instantly with real-time updates.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
