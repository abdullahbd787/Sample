import VideoItem from "../assets/Videos/Galti_Se_Mistake.mp4";
export default function Video() {
  return (
    <>
      <video controls>
        <source src={VideoItem} type="video/mp4"/>
      </video>
    </>
  )
}
