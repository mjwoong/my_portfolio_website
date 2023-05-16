import React from "react";
import styled from "styled-components";
import ModalProfileItem from "../components/ModalProfileItem";
import {
  MdEmail,
  MdPhoneIphone,
  MdPerson,
  MdCalendarToday,
} from "react-icons/md";

const profileList = [
  {
    id: 1,
    icon: <MdPerson />,
    title: "이름",
    content: "문재웅 (Mun Jaewoong)",
  },
  {
    id: 2,
    icon: <MdCalendarToday />,
    title: "생년월일",
    content: "1996.06.06",
  },
  {
    id: 3,
    icon: <MdPhoneIphone />,
    title: "번호",
    content: "010-4144-9606",
  },
  {
    id: 4,
    icon: <MdEmail />,
    title: "이메일",
    content: "answodnd112@gmail.com",
  },
];

const ModalProfile = () => {
  return (
    <>
      <ImageContainer>
        <img src="img/me.png" alt="profile_image" className="img"></img>
      </ImageContainer>
      <ListContainer>
        {profileList.map((it) => (
          <ModalProfileItem key={it.id} {...it} />
        ))}
      </ListContainer>
    </>
  );
};

const ImageContainer = styled.div`
  background-color: gray;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  position: relative;
  overflow: hidden;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

const ListContainer = styled.div`
  width: 90%;
  height: 13rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

export default ModalProfile;
