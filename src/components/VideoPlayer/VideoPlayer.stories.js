import { VideoPlayer } from ".";

export default {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  argTypes: {
    source: {
      name: "source",
      description: "Accepts source for video as URL link or file path",
    },
    thumbnail: {
      name: "thumbnail",
      description:
        "Accepts source for video thumbnail as URL link or file path",
    },
    videoId: {
      name: "videoId",
      description: "Accepts string value as a unique ID for the video",
    },
    seekTime: {
      name: "seekTime",
      description: "Accepts numeric value for video seek time in seconds",
    },
    saveVideoProgress: {
      name: "saveVideoProgress",
      description: "Accepts callback function to save video progress",
    },
    saveVideoProgressLocal: {
      name: "saveVideoProgressLocal",
      description: "Accepts callback function to save video progress locally",
    },
  },
};

const Template = (args) => <VideoPlayer {...args} />;

export const Basic = Template.bind();

Basic.args = {
  customClass: "videoPlayer--testClass",
  source:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail:
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  videoId: "Big_Buck_Bunny_01",
  seekTime: 10,
  saveVideoProgress: () => {
    console.log("function called to save video progress");
  },
  saveVideoProgressLocal: () => {
    console.log("function called to store video progress locally");
  },
};
