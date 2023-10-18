import React, { useState } from "react";
import {
  NotBot,
  NotBotAt,
  NotCon,
  NotLi,
  NotLiCon,
  NotLiIc,
  NotLiIm,
  NotLiPa,
  NotLiPara,
  NotLiTex,
  NotTit,
  NotUl,
  NotWrap,
} from "./Notification.elements";
import Info from "../../utils/Notification.json";

const Notification = () => {
  return (
    <NotWrap>
      <NotCon>
        <NotUl>
          <NotTit>التنبيهات</NotTit>
          {Info.map((notification, index) => (
            <NotLi key={index}>
              <NotLiCon>
                <NotLiIm
                  src="https://cdn.busuu.com/files/pictures/picture-118651969_cr_2838299476491bf2f57ef63.78544382.jpeg"
                  alt=""
                />
              </NotLiCon>
              <NotLiTex>
                <NotLiPara>{notification.userName}</NotLiPara>
                <NotLiPa>{notification.timeDate}</NotLiPa>
              </NotLiTex>
              <NotLiIc>
                <NotBot>
                  <NotBotAt href=""></NotBotAt>
                </NotBot>
              </NotLiIc>
            </NotLi>
          ))}
        </NotUl>
      </NotCon>
    </NotWrap>
  );
};

export default Notification;
