import { useMachine } from "@xstate/react";
import { Button, Modal } from "antd";
import styled from "styled-components";
import { videoMachine } from "./machines/video-machine";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
  padding: 20px;
`;

const MiniPlayer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VIDEO_URL =
  "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";

function App() {
  const [state, send] = useMachine(videoMachine);
  return (
    <Wrapper>
      <Button type="primary" onClick={() => send({ type: "OPEN" })}>
        Open
      </Button>
      <Modal
        title="Video player"
        open={state.matches("open")}
        onCancel={() => send({ type: "CLOSE" })}
        footer={[
          <Button key="minimize" onClick={() => send({ type: "MINIMIZE" })}>
            Minimize
          </Button>,
          <Button key="close" onClick={() => send({ type: "CLOSE" })}>
            Close
          </Button>,
        ]}
      >
        <ReactPlayer url={VIDEO_URL} controls width="100%" />
      </Modal>
      {state.matches("minimized") && (
        <MiniPlayer>
          <ReactPlayer url={VIDEO_URL} controls width="100%" height="150px" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button size="small" onClick={() => send({ type: "EXPAND" })}>
              Развернуть
            </Button>
            <Button size="small" danger onClick={() => send({ type: "CLOSE" })}>
              Закрыть
            </Button>
          </div>
        </MiniPlayer>
      )}
    </Wrapper>
  );
}

export default App;
