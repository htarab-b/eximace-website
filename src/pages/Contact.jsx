import React from 'react'
import ClientCarousel from '../components/ClientCarousel';
import Logo from '../assets/logo.png';

function Contact() {
  return (
    <footer className="bg-white" id='Contact'>
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-32 pb-8 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex flex-wrap">
                    <div className=" lg:w-full">
                        <div className="flex items-start">
                            <img src={Logo} alt="Eximace Logo" className="h-14 w-auto" style={{maxHeight: '48px'}} />
                            <div className="pt-2 ml-3">
                                <div className="text-xl lg:text-2xl text-left logo-font">
                                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-8">Eximace Logistics</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 max-w-xs text-gray-500 text-sm">
                            <strong>Registered Office:</strong><br />
                            Eximace Logistics Pvt Ltd<br />
                            77/1, 5th Cross, Nanjappa Layout, Vidyaranyapura,<br />
                            Bangalore – 560097.<br /><br />
                            <strong>Corporate Office:</strong><br />
                            Eximace Logistics Pvt Ltd<br />
                            4th Floor, No. 10C,<br />
                            Gaduniya Complex, Ramaiah Layout,<br />
                            Ramachandrapura Main Road,<br />
                            Vidyaranyapura,<br />
                            Bangalore – 560097.<br /><br />
                            <strong>Phone:</strong> 9845204165<br />
                            <strong>Email ID:</strong> sv@eximacelogistics.com
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mt-8 lg:mt-0">
                    <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent leading-8 text-center">Our Clients</h2>
                        <ClientCarousel />
                    </div>
                </div>

                <div className="grid gap-8 col-span-2 grid-cols-3">
                    <div>
                        <p className="font-medium text-gray-900">Indian Branches</p>

                        <ul className="mt-4 space-y-1 pl-0 text-sm">
                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Chennai </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Tuticorin </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Mumbai </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> New Delhi </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Hyderabad </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Ahemadabad </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Calcutta </p>
                            </li>

                            <li>
                            <p className="text-gray-700 transition hover:opacity-75"> Vishakapatnam </p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Overseas Branches</p>

                        <ul className="mt-4 space-y-1 pl-0 text-sm">
                            <li>
                            <a href={'/Admission'} className="text-gray-700 transition hover:opacity-75"> U.S.A </a>
                            </li>

                            <li>
                            <a href={'/Facilities'} className="text-gray-700 transition hover:opacity-75"> U.K </a>
                            </li>

                            <li>
                            <a href={'/Gallery'} className="text-gray-700 transition hover:opacity-75"> Europe </a>
                            </li>

                            <li>
                            <a href={'/Contact'} className="text-gray-700 transition hover:opacity-75"> China </a>
                            </li>

                            <li>
                            <a href={'/Gallery'} className="text-gray-700 transition hover:opacity-75"> Taiwan </a>
                            </li>

                            <li>
                            <a href={'/Contact'} className="text-gray-700 transition hover:opacity-75"> U.A.E </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium text-gray-900">Management</p>

                        <p className="text-xs lg:text-sm">Our team is dedicated to driving innovation, ensuring operational excellence, and fostering a culture of continuous improvement. With years of expertise across various industries, prioritizing strategic growth, sustainability, and delivering exceptional value to our clients and partners worldwide.</p>
                    </div>
                </div>
            </div>

            <p className="text-xs text-center text-gray-500">&copy; {(new Date().getFullYear())}. Eximace Logistics Pvt Ltd. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Contact