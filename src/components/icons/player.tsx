import React, { ComponentProps, FC } from "react";
import styled from "styled-components";

interface Props extends ComponentProps<"svg"> {}

export const PlayerIcon: FC<Props> = (props) => (
  <svg
    fill="#85007a"
    version="1.1"
    id="Capa_1"
    width="256px"
    height="256px"
    viewBox="0 0 562.746 562.746"
    xmlSpace="preserve"
    stroke="#85007a"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="M281.37,0C125.977,0,0.003,125.974,0.003,281.373c0,155.399,125.974,281.373,281.373,281.373 c155.393,0,281.367-125.974,281.367-281.373C562.743,125.974,436.769,0,281.37,0z M484.212,305.425L192.287,471.986 c-23.28,13.287-42.154,2.326-42.154-24.479V115.239c0-26.805,18.874-37.766,42.154-24.479l291.925,166.562 C507.491,270.602,507.491,292.145,484.212,305.425z"></path>{" "}
        </g>
      </g>
    </g>
  </svg>
);

export const StyledPlayerIcon = styled(PlayerIcon)`
  width: 60px;
  height: 60px;
`;
