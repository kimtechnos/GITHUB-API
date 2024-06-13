// import React from "react";

// const Preview = (
//   //props
//   avatarurl,
//   name,
//   login,
//   piblic_repos,
//   followers,
//   following,
//   location,
//   blog,
//   twitter,
//   setIsLoading,
//   date,
//   bio
// ) => {
//   return (
//     <div className="bg-dark-grey p-5 flex text-white justify-center rounded-md">
//     {!setIsLoading? <div className="flex flex-col gap-4">
//         <div className="flex gap-10 items-center">
//           <div>
//             <img
//               className="w-28 rounded-full"
//               src={avatarurl}
//               //   src="https://avatars.githubusercontent.com/u/127467121?v=4"
//               alt=""
//             />
//           </div>
//           <div>
//           <h1>{name}</h1>
//             {/* <h1>TEMP user</h1> */}
//             <h3>{login}</h3>
//             {/* <h3 className="text-dark-blue">userName</h3> */}
//             {/* <p>joined at 23 an 2024</p> */}
//             <p>{date}</p>
//             <p></p>
//           </div>
//           <div>
//             {/* <p className="max-w-xs">user Description</p> */}
//             <p>{bio}</p>
//           </div>
//           <div className="flex bg-dark-bg p-4 rounded-md justify-evenly">
//             <div>
//               {/* <h3>Repos</h3> */}
//               <h3>{piblic_repos}</h3>
//               <span>{following}</span>
//               {/* <span>45</span> */}
//             </div>
//             <div>
//             <h3>{followers}</h3>
//               {/* <h3>followers</h3> */}
//               <span>45</span>
//             </div>
//           </div>
//           <div className="flex flex-col gap-4">
//             <div className="flex justify-evenly">
//               <div className="flex gap-5 items-center">
//                 <span>
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     height="1em"
//                     width="1em"
//                   >
//                     <path d="M11.42 21.815a1.004 1.004 0 001.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
//                     <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
//                   </svg>
//                 </span>
//                 {/* <span>Not FOUND</span> */}
//                 <span>{location?location:"NOT FOUND"}</span>
//                 <div className="flex gap-5 items-center">
//                   <span>
//                     <svg
//                       fill="currentColor"
//                       viewBox="0 0 16 16"
//                       height="1em"
//                       width="1em"
//                     >
//                       <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
//                     </svg>
//                   </span>
//                   {/* <span>Not FOUND</span> */}
//                   <span>{twitter?twitter:"NOT Found"}</span>
//                 </div>
//                 <div className="flex gap-5 items-center">
//                   <span>
//                     <svg
//                       viewBox="0 0 1024 1024"
//                       fill="currentColor"
//                       height="1em"
//                       width="1em"
//                     >
//                       <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
//                     </svg>
//                   </span>
//                   <span>{blog?blog:"not found"}</span>
//                 </div>
//                 <div className="flex gap-5 items-center">
//                   <span>
//                     <svg
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       height="1em"
//                       width="1em"
//                     >
//                       <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5m1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 01-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4 6-4V8l-6 4-6-4z" />
//                     </svg>
//                   </span>
//                   <span>{email?email:"Not found"}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>:<div className="rounded-full h-4 w-4 border border-dark-blue border-t-transparent animate-spin"></div>}
//     </div>
//   );
// };

// export default Preview;
// import React from "react";

import React from "react";

const Preview = ({
  avatar_url,
  name,
  login,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter,
  isLoading,
  date,
  bio,
  email,
}) => {
  return (
    <div className="bg-dark-grey p-5 flex text-white justify-center rounded-md">
      {!isLoading ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 items-center">
            <div>
              <img
                className="w-28 rounded-full"
                src={avatar_url}
                alt="Avatar"
              />
            </div>
            <div>
              <h1>{name}</h1>
              <h3>{login}</h3>
              <p>{date}</p>
              <p>{bio}</p>
            </div>
          </div>
          <div className="flex bg-dark-bg p-4 rounded-md justify-evenly">
            <div>
              <h3>Repos</h3>
              <span>{public_repos}</span>
            </div>
            <div>
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>{following}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M11.42 21.815a1.004 1.004 0 001.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
                    <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
                  </svg>
                </span>
                <span>{location ? location : "NOT FOUND"}</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
                  </svg>
                </span>
                <span>{twitter ? twitter : "NOT FOUND"}</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
                  </svg>
                </span>
                <span>{blog ? blog : "NOT FOUND"}</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5m1.4 3.5h11.2c.77 0 1.4.62 1.4 1.4v8.2a1.4 1.4 0 01-1.4 1.4H6.4c-.77 0-1.4-.63-1.4-1.4V7.9c0-.78.62-1.4 1.4-1.4M6 8v2l6 4 6-4V8l-6 4-6-4z" />
                  </svg>
                </span>
                <span>{email ? email : "NOT FOUND"}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-full h-4 w-4 border border-dark-blue border-t-transparent animate-spin"></div>
      )}
    </div>
  );
};

export default Preview;
