import React from "react";
import styled from "styled-components";
import media from "css-in-js-media";

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 116px;
  overflow-y: auto;
  min-height: 100vh;
  max-width: 1018px;
  margin: auto;
  ${media("<=tablet")} {
  }
  ${media("<=desktop")} {
  }
  ${media("<=phone")} {
    padding: 40px;
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2);
  gap: 24px;
  padding: 89px;
  ${media("<=tablet")} {
    display: flex;
    flex-direction: column;
  }
  ${media("<=desktop")} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3);
  }
  ${media("<=phone")} {
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
  ${media("<=tablet")} {
    height: 200px;
    width: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
`;

const ImageGallery = () => {
  const images = [
    { src: "/bh.JPG", title: "bowen" },
    { src: "/feet.jpg", title: "fußreflexzonenmassage" },
    { src: "/griff.JPG", title: "massage" },
    { src: "/couch.JPEG", title: "living-room" },
    { src: "/lighted-room.jpg", title: "massage-room" },
    { src: "/table.JPG", title: "table" },
  ];

  return (
    <>
      <div>
        <GalleryWrapper>
          <GalleryContainer>
            {images.map((image, index) => (
              <GalleryItem key={index}>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500}
                  height={500}
                />
              </GalleryItem>
            ))}
          </GalleryContainer>
        </GalleryWrapper>
      </div>
    </>
  );
};

export default ImageGallery;
