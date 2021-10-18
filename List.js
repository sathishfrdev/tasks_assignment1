import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";
import App from './App'; 

const urData = [
  {
    id:1,
    name:"sathish",
     mail_id:"sa@gmail.com",
     img:"./image/usr.png"
  },
  {
    id:2,
    name:"alfa",
   mail_id :"al@gmail.com",
     img:"./image/usr.png"
  },
  {
    id:3,
    name:"beta",
     mail_id:"be@gmail.com",
     img:"./image/usr.png"
  },
  {
    id:4,
    name:"gamma",
     mail_id:"ga@gmail.com",
     img:"./image/usr.png"
  },
  {
  id:5,
    name:"raftor",
     mail_id:"ra@gmail.com",
     img:"./image/usr.png"
  },
  {
  id:6,
    name:"blue",
     mail_id:"bl@gmail.com",
     img:"./image/usr.png"
  },
  {
    id:7,
      name:"griffin",
       mail_id:"gr@gmail.com",
       img:"./image/usr.png"
    },
    {
      id:8,
        name:"malfoi",
         mail_id:"ma@gmail.com",
         img:"./image/usr.png"
      },
      {
        id:9,
          name:"lorri",
           mail_id:"lo@gmail.com",
           img:"./image/usr.png"
        },
        {
          id:10,
            name:"tuff",
             mail_id:"tu@gmail.com",
             img:"https://icons-for-free.com/business+costume+male+man+office+user+icon-1320196264882354682/" 
          },
          {
            id:11,
              name:"rog",
               mail_id:"ro@gmail.com",
               img: '.src/image/usr.png'
            },
            {
              id:12,
                name:"leak",
                 mail_id:"lk@gmail.com",
                 img: '.src/image/usr.png'
              },
              {
                id:13,
                  name:"giriz",
                   mail_id:"fo@gmail.com",
                   img: '.src/image/usr.png'
                },
                {
                  id:14,
                    name:"mark",
                     mail_id:"mk@gmail.com",
                     img: '.src/image/usr.png'
                  },
                  {
                    id:15,
                      name:"kripto",
                       mail_id:"kr@gmail.com",
                       img: '.src/image/usr.png'
                    },
                    {
                      id:16,
                        name:"arthor",
                         mail_id:"ar@gmail.com",
                         img: '.src/image/usr.png'
                      },
                      {
                        id:17,
                          name:"thorin",
                           mail_id:"tho@gmail.com",
                           img: '.src/image/usr.png'
                        },
                        {
                          id:18,
                            name:"tharin",
                             mail_id:"tha@gmail.com",
                             img: '.src/image/usr.png'
                          },
                          {
                            id:19,
                              name:"malfoi",
                               mail_id:"ma@gmail.com",
                               img:"./image/usr.png"
                            },
                            {
                              id:20,
                                name:"lorri",
                                 mail_id:"lo@gmail.com",
                                 img:"./image/usr.png"
                              },
                              {
                                id:21,
                                  name:"tuff",
                                   mail_id:"tu@gmail.com",
                                   img:"https://icons-for-free.com/business+costume+male+man+office+user+icon-1320196264882354682/" 
                                },
                                {
                                  id:22,
                                    name:"rog",
                                     mail_id:"ro@gmail.com",
                                     img: '.src/image/usr.png'
                                  },
                                  {
                                    id:23,
                                      name:"leak",
                                       mail_id:"lk@gmail.com",
                                       img: '.src/image/usr.png'
                                    },
                                    {
                                      id:24,
                                        name:"giriz",
                                         mail_id:"fo@gmail.com",
                                         img: '.src/image/usr.png'
                                      },
                                      {
                                        id:25,
                                          name:"mark",
                                           mail_id:"mk@gmail.com",
                                           img: '.src/image/usr.png'
                                        },
                                        {
                                          id:26,
                                            name:"kripto",
                                             mail_id:"kr@gmail.com",
                                             img: '.src/image/usr.png'
                                          },
                                          {
                                            id:27,
                                              name:"arthor",
                                               mail_id:"ar@gmail.com",
                                               img: '.src/image/usr.png'
                                            },
                                            {
                                              id:28,
                                                name:"thorin",
                                                 mail_id:"tho@gmail.com",
                                                 img: '.src/image/usr.png'
                                              },
                                              {
                                                id:29,
                                                  name:"tharin",
                                                   mail_id:"tha@gmail.com",
                                                   img: '.src/image/usr.png'
                                                },
                                                {
                                                  id:30,
                                                    name:"malfoi",
                                                     mail_id:"ma@gmail.com",
                                                     img:"./image/usr.png"
                                                  },
                                                  {
                                                    id:40,
                                                      name:"lorri",
                                                       mail_id:"lo@gmail.com",
                                                       img:"./image/usr.png"
                                                    },
                                                    {
                                                      id:41,
                                                        name:"tuff",
                                                         mail_id:"tu@gmail.com",
                                                         img:"https://icons-for-free.com/business+costume+male+man+office+user+icon-1320196264882354682/" 
                                                      },
                                                      {
                                                        id:42,
                                                          name:"rog",
                                                           mail_id:"ro@gmail.com",
                                                           img: '.src/image/usr.png'
                                                        },
                                                        {
                                                          id:43,
                                                            name:"leak",
                                                             mail_id:"lk@gmail.com",
                                                             img: '.src/image/usr.png'
                                                          },
                                                          {
                                                            id:44,
                                                              name:"giriz",
                                                               mail_id:"fo@gmail.com",
                                                               img: '.src/image/usr.png'
                                                            },
                                                            {
                                                              id:45,
                                                                name:"mark",
                                                                 mail_id:"mk@gmail.com",
                                                                 img: '.src/image/usr.png'
                                                              },
                                                              {
                                                                id:46,
                                                                  name:"kripto",
                                                                   mail_id:"kr@gmail.com",
                                                                   img: '.src/image/usr.png'
                                                                },
                                                                {
                                                                  id:47,
                                                                    name:"arthor",
                                                                     mail_id:"ar@gmail.com",
                                                                     img: '.src/image/usr.png'
                                                                  },
                                                                  {
                                                                    id:48,
                                                                      name:"thorin",
                                                                       mail_id:"tho@gmail.com",
                                                                       img: '.src/image/usr.png'
                                                                    },
                                                                    {
                                                                      id:49,
                                                                        name:"tharin",
                                                                         mail_id:"tha@gmail.com",
                                                                         img: '.src/image/usr.png'
                                                                      },
                                                                       {
                                                                        id:50,
                                                                          name:"tharinhood",
                                                                           mail_id:"tha@gmail.com",
                                                                           img: '.src/image/usr.png'
                                                                        },
                                                                        
  ];
  
const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(10).keys(), n => n + 1));
  // const[taskName,settaskName]=useState(Array.from(Array(10).entries(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }

  const [userState ,setUserState]=useState();
  
  function dataComboBox(e) {
 
     const selectedValue = e.target.value;
     const selecteName = urData.filter((d) => d.id == selectedValue)[0];
     setUserState(selecteName);
   }  

  
  return (
    <div className="App">

      {/* get the furture data to display or get the binded data from the object in array y usin gjavascript onChance event */}
      
     
    

      {/* <h1>{userState?.name}</h1>
      <h1>{userState?.mail_id}</h1>
     {/* // <h1>{userState?.img}</h1> */}
     <>
      <ul className="list-group mb-2">
        {listItems.map(listItem => <li className="list-group-item">List Item {userState}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
 
       
      </div>
  );
        }

export default List;
