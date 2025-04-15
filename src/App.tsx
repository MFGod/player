import { useMachine } from "@xstate/react";
import { Button, Modal } from "antd";
import styled from "styled-components";
import { videoMachine } from "./machines/video-machine";
import ReactPlayer from "react-player";
import { StyledPlayerIcon } from "./components/icons/player";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Span = styled.span`
  padding: 40px 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #85007a;
  border-radius: 12px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f9f0f6;
    transform: scale(1.05);
  }
`;

const MiniPlayer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  border: 2px solid #85007a;
  border-radius: 12px;
  padding: 6px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: end;
  padding: 10px 2px 4px 2px;
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 1200px !important;

  .ant-modal-content {
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    width: 100% !important;
  }

  .ant-modal {
    width: 1200px !important;
  }
`;

const VIDEO_URL =
  "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";

const abc = 0;

function App() {
  const [state, send] = useMachine(videoMachine);
  return (
    <Wrapper>
      <Span onClick={() => send({ type: "OPEN" })}>
        <StyledPlayerIcon type="primary" />
      </Span>
      <StyledModal
        title="Video player"
        open={state.matches("open")}
        onCancel={() => send({ type: "CLOSE" })}
        footer={[
          <Button key="minimized" onClick={() => send({ type: "MINIMIZE" })}>
            Minimize
          </Button>,
          <Button key="close" onClick={() => send({ type: "CLOSE" })}>
            Close
          </Button>,
        ]}
      >
        <ReactPlayer url={VIDEO_URL} controls width="100%" height="80%" />
      </StyledModal>
      {state.matches("minimized") && (
        <MiniPlayer>
          <ReactPlayer url={VIDEO_URL} controls width="100%" height="150px" />
          <Div>
            <Button size="middle" onClick={() => send({ type: "EXPAND" })}>
              Expand
            </Button>
            <Button size="middle" onClick={() => send({ type: "CLOSE" })}>
              Close
            </Button>
          </Div>
        </MiniPlayer>
      )}
    </Wrapper>
  );
}

export default App;
