

// import Navbar from "../common/Navbar/Navbar";
// import "./history.css";
// import { useEffect, useState } from "react";

// // const dummydata = [
// //     {
// //         id: '1',
// //         title: "Sumit",
// //         date: '21',
// //     },
// //     {
// //         id: '2',
// //         title: "Rahul",
// //         date: '22',
// //     },
// //     {
// //         id: '3',
// //         title: "Rohit",
// //         date: '23',
// //     },
// //     {
// //         id: '4',
// //         title: "Raj",
// //         date: '24',
// //     }
// // ];

// const oldHistory = () => {
//     const [title, setTitle] = useState("Images");
//     const [description, setDescription] = useState("These are the images of the day");

//     const changeTitle = () => {
//         setTitle('Title changed');
//     };

//     const changeDescription = () => {
//         setDescription('Description changed');
//     };

//     const temp = () => {
//         changeDescription();
//         changeTitle();
//     };

//     useEffect(() => {
//         console.log("everytime page re-rendered");
//     }, );

//     useEffect(() => {
//         console.log("only when page re-rendered");
//     }, []);

//     useEffect(() => {
//         console.log("Title changed");
//     }, [title]);

//     useEffect(() => {
//         console.log("title or Description changed");
//     }, [title,description]);

//     return (
//         <div>
//             <Navbar />
//             <div className="history-main-container">
//                 <button onClick={changeTitle}>Change Title</button>
//                 <button onClick={temp}>Change Title and Description</button>
//                 <button onClick={changeDescription}>Change Description</button>

//                 <input onChange={(e) => { setTitle(e.target.value) }} /><br />
//                 <input onChange={(e) => { setDescription(e.target.value) }} /><br />

//                 <h3>Title = {title}</h3>
//                 <h3>Description = {description}</h3>

//                 <div>
//                     {dummydata.map((elem) => {
//                         return (
//                             <div key={elem.id}>
//                                 <h1>{elem.title}</h1>
//                                 <h3>{elem.date}</h3>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default oldHistory;

