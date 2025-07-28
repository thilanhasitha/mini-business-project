import React from 'react'
import { Link } from 'react-router-dom';
import fb from '../assets/fb.png'
import office from '../assets/office.jpg'
import whatsapp from '../assets/whatsapp.jpg'
import tiktok from '../assets/tiktok.jpg'


export default function Contact() {
  return (
     <div className="bg-gray-50 dark:bg-gray-900">
     
       <div className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900 dark:text-white">Contact Us</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Passionate individuals dedicated to making exportation easier for everyone.
              </p>
            </div>
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 md:grid-cols-4 lg:max-w-7xl">
              {/* Team Member 1 */}
              <li className="group">
                <div className="space-y-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                   
                    <img
                      className="h-full w-full object-cover"
                       src={fb}
                      //src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900 dark:text-white">Official Facebook Page</h3>
                      {/* <p className="text-green-600 dark:text-green-400">Co - Founder</p> */}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {/* <p className="text-base">
                        I am a dedicated and passionate individual with a strong commitment to excellence. I am committed to continuous learning and growth, always seeking new opportunities to expand my knowledge and skills.
                      </p> */}
                     
                    </div>
                   
                  </div>
                 
                </div>
              </li>

              {/* Team Member 2 */}
              <li className="group">
                <div className="space-y-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src = {office}
                      //src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900 dark:text-white">Head Office</h3>
                      <p className="text-green-600 dark:text-green-400">Land - Numbers</p>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      <p className="text-base">
                       (+94)32 2248722  -  open from 9.30 AM to 5.00 PM
                      </p>
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      
                      <p className="text-green-600 dark:text-green-400">Mobile - Numbers</p>
                    </div>
                     <div className="text-gray-500 dark:text-gray-400">
                      <p className="text-base">
                       (+94)77 6915740  -  open from 9.30 AM to 5.00 PM <br/>
                       (+94)77 6915740  -  open from 9.30 AM to 5.00 PM <br/>
                       (+94)77 6915740  -  open from 9.30 AM to 5.00 PM <br/>
                       
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Team Member 3 */}
              <li className="group">
                <div className="space-y-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src = {whatsapp}
                      //src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900 dark:text-white">Official whatsapp Group</h3>
                      {/* <p className="text-green-600 dark:text-green-400">Supporter</p> */}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {/* <p className="text-base">
                        I am responsible for managing the inventory, ensuring that we have the right products in stock and that they are properly stored and organized.
                      </p> */}
                    </div>
                  </div>
                </div>
              </li>

              {/* Team Member 4 */}
              <li className="group">
                <div className="space-y-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src = {tiktok}
                      //src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900 dark:text-white">Tik Tok Page</h3>
                      <p className="text-green-600 dark:text-green-400">Transport Management</p>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      <p className="text-base">
                        I am responsible for managing user profiles, ensuring that our users have a personalized experience and that their data is secure and private.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

   
  )
}
