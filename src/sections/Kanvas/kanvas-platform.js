import React from "react";
import styled from "styled-components";
import SelfHosted from "./images/datacenter-crash.svg";
import CloudHosted from "./images/meshery-cloud.svg";
import Features from "../../components/Features-carousel";

const PlatformWrapper = styled.div`

.blocks {
  display: flex;
  padding: 1rem;
}

.block {
  min-height: 100px;
  width: 50%;
  width: calc(60% + 2rem);
}

.block--left {
  background-color: BLACK;
  clip-path: polygon(0 0, 100% 0, calc(100% - 3rem) 100%, 0% 100%);
  h1, p{
    text-align: left;
    padding: 1rem 2rem;
    color: white;
  }
  p{
    width: 75%;
  }
  img{
    width: 65%;
    padding-left: 3rem;
  }
}

.kanvas-item {
  cursor: pointer;
}

.block--right {
  background-color: #00b39f;
  margin-left: -8rem;
  clip-path: polygon(8rem 0, 100% 0, 100% 100%, 0% 100%);
  h1, p{
    text-align: right;
    padding: 1rem 2rem;
    color: white;
    background: linear-gradient(123deg, #00b39f 60%, #00b39f 100%)
  }
  p{
    padding: 1.1rem 2rem 0 4rem;
  }
  img{
    width: 89%;
    padding: 1rem 0 1rem 12rem;
  }
}

p.caption {
    margin: 0rem 0rem 2rem 0rem;
    font-style: normal ;
  }
  .firstheading {
    text-align: center;
    padding-top:0;
    margin-top:0;
    background-color: black;
  }
  .heading{
      text-align: center;
      padding: 1rem 0;
      text-transform: uppercase;
  }

  @media screen and (max-width: 991px) {
    .block--left, .block--right {
      width: 50%;
      margin: 0;
      clip-path: none;
      h1{
        text-align: center;
        color: white;
      }
      p{
        color: white;
        width: 100%;
        padding: 1rem;
      }
      img{
        width: 95%;
        padding-left: 0;
        display: block;
        margin: 0 auto;
      }
    }
}

.mobile-modes{
  display: none;
}

.modes-image{
  margin: 0 0 2rem;
}

@media only screen and (max-width: 768px) {
  .mobile-modes{
    display: block;
  }
  .blocks{
    display: none;
  }
}

`;

const Platform = () => {
  return (
    <PlatformWrapper>
      <h2 className="heading">Choose Your Deployment Model</h2>
      <p className="caption">
        Get Kanvas where you need it.
      </p>
      <div className="mobile-modes">
        <Features
          heading=" "
          features={[
            {
              title: "Self-hosted",
              description:
                "Keep your Kanvas designs internal to your workplace. Get remote support from Layer5 when you need it.",
              content: (
                <a href="https://docs.layer5.io/cloud/self-hosted">
                  <img
                    src={SelfHosted}
                    alt="Kanvas Self-hosted"
                    className="modes-image"
                  />
                </a>
              ),
            },
            {
              title: "Cloud",
              description:
                "Connect to Layer5 Cloud and have your Kanvas designs versioned and available for team sharing and real-time collaboration.",
              content: (
                <a href="https://docs.layer5.io/cloud/">
                  <img
                    src={CloudHosted}
                    alt="Kanvas Cloud"
                    className="modes-image"
                  />
                </a>
              ),
            },
          ]}
        />
      </div>

      <div className="blocks">
        <div className="block block--left">
          <a className="kanvas-item" href="https://docs.layer5.io/cloud/self-hosted" target="_blank" rel="noopener noreferrer">
            <h1>Self-Hosted</h1>
            <img src={SelfHosted} alt="Kanvas Self-hosted" />
            <p>
              Keep your Kanvas designs internal to your workplace. Get remote support from Layer5 when you need it.
            </p>
          </a>
        </div>
        <div className="block block--right">
          <a className="kanvas-item" href="https://docs.layer5.io/cloud" target="_blank" rel="noopener noreferrer">
            <h1>Cloud</h1>
            <img src={CloudHosted} alt="Kanvas Cloud" />
            <p>
              Connect to Layer5 Cloud and have your Kanvas designs versioned and available for team sharing and real-time collaboration.
            </p>
          </a>
        </div>
      </div>
    </PlatformWrapper >
  );
};

export default Platform;

