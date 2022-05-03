import React from 'react';


export const Stack = ({ logo, technos }:any) => (
  <div>
      <div>
        <div className="row justify-content-center">
          {technos.map((item:any, index:number) => (
              <div key={index} className="col-4 col-sm-3 col-md my-2">
                {item.icon}
              </div>
          ))}
        </div>
      </div>
  </div>
);
