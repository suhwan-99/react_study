import { useState } from "react";
import './App.css'

function APP02(){
    const [newBtl, setNewBtl] = useState('');
    /* const refNew = useRef(); */
    const [btl, setBtl] = useState([ {
        title:'React',
        date: '2025-07-15',
        like: 0
      },
      {
        title:'HTML',
        date: '2025-07-14',
        like: 0
      },
      {
        title:'CSS',
        date: '2025-07-16',
        like: 0
      }
    ]);
     return (
      <div>
        {
         btl.map((data, i) => {
          return(
            <div className="list" key={i}>
              <h4>
              {data.title}
              <span onClick={() => {
                btl[i].like = btl[i].like + 1;
                let btl_ = [...btl];
                setBtl(btl_);
              }}>👍</span><span>{data.like}</span>
              </h4>
              <p>{data.date}</p>
              <button onClick={() => {
                let btl_ = [...btl];
                btl_.splice(i,1);
                setBtl(btl_);
              }}>삭제</button>
            </div>
            )
          })
        }
        <input /*ref={refNew}*/ type="text" onChange={(e) => {
          setNewBtl(e.target.value);
          
        }}/>
        <button onClick={() => {
          let now = new Date();
          let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate());
          let newData = {
            title: newBtl,
            date: date,
            like: 0
          }
          let btl_ = [...btl];
          btl_.push(newData);
          setBtl(btl_);
          /* refNew.current.value = '';*/
        }}>추가</button>
        
      </div>
    
    );
}

export default APP02;