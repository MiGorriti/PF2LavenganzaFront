import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col mr-10">
          <p className="mb-2 font-semibold">Attendance :</p>
          <p className="mb-2">Help Center</p>
          <p className="mb-2">Get Help With A Security Problem</p>
          <p className="mb-2">Disability Support</p>
          <p>Neighborhood Problems</p>
        </div>
        <div className="flex flex-col mr-10">
          <p className="mb-2 font-semibold">Known :</p>
          <p className="mb-2">Unique Accommodations</p>
          <p className="mb-2">All Destinations</p>
          <p>Opinions</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-2 font-semibold">Contact us :</p>
          <p>wanderluxehomes@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



