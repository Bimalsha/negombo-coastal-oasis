
import React from 'react';
import {Facebook, MailOpen, MapPin, Phone, PhoneCall} from 'lucide-react';
import {FaFacebook, FaFacebookF, FaTripadvisor} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-400 ">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resort Info */}
          <div>

            <h3 className="text-2xl font-bold mb-4">Morning Star Resort</h3>
            <p className="text-gray-600 mb-4">
              Your perfect coastal getaway in the heart of Negombo, Sri Lanka. Experience eco-friendly hospitality with
              stunning garden views.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16}/>
              <span className="text-sm">No.55/1 Poruthota Road, Negombo 11540</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/src/components/Accommodationhero"
                     className="text-gray-600 hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="/dining" className="text-gray-600 hover:text-white transition-colors">Dining</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16}/>
                <span className="text-gray-600">+94 76 9139911</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall size={16}/>
                <span className="text-gray-600">+94 31 02274371</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailOpen size={16}/>
                <p className="text-gray-600">morningstarresorts92@gmail.com</p>
              </div>

            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/morningstarresortslk/" target="_blank"
                   rel="noopener noreferrer" className="text-white hover:text-white transition-colors bg-gray-600 p-2 rounded-full"><FaFacebookF  size={24}/></a>
                <a href="https://www.tripadvisor.com/Hotel_Review-g297897-d3400937-Reviews-Morning_Star_Resorts-Negombo_Western_Province.html" target="_blank"
                   rel="noopener noreferrer" className="text-white hover:text-white transition-colors  bg-gray-600 p-2 rounded-full"><FaTripadvisor size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center flex flex-col lg:flex-row lg:justify-between justify-center ">
          <p className="">&copy; 2024 Morning Star Resort Negombo. All rights reserved.</p>
          <p className=" ">Developed By : <a href={'https://www.1000dtechnology.com/'}
                                                           target="_blank"
                                                           rel="noopener noreferrer">1000<span
              className={'text-red-500'}>D</span> Technology (PVT) LTD</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
