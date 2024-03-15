// ImageGenerator.js

import { useRef, useState ,useEffect} from "react";
import { OPTIONS } from "./constants";
import Option from "./Options";
import styles from "./ImageGenerator.module.css"; // Import CSS module
import SubHead from "../../components/Header/SubHead";
import SideMenu from "../../components/sidebar/SideBar";
import { baseurl } from "../../utils/BaseUrl";
import axios from "axios";
import { saveAs } from 'file-saver'
import WaveCircle from "../OcrPdf/Loader";
export default function ImageGenerator() {
  const promptRef = useRef();
  const [renderedImages, setRenderedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgloading, setImgLoading] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const countdownRef = useRef(countdown);
  const appendPrompt = (word) => {
    promptRef.current.value = promptRef.current.value.concat(", ", word);
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    try {
      const res= await axios.post(`${baseurl}/api/pdf/genrateImage`, { prompt: promptRef.current.value });
      setRenderedImages([res.data]); // Assuming data is an object containing the URL
      const expectedTimeInSeconds = 60;
      setCountdown(expectedTimeInSeconds);
      if (res.status === 200) {
        // Move setIngestLoading(true) inside the setTimeout block
        setTimeout(() => {

          setTimeout(() => {

          }, 7000);
        }, countdown * 1000);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    countdownRef.current = countdown;
  }, [countdown]);
  const downloadImage = (url) => {
 try{
    setImgLoading(true)
    saveAs(`https://anywhere.synapssolutions.com/${url}`) // Put your image URL here.
 }catch(e){}finally{
    setImgLoading(false)
 }

}
useEffect(() => {
    let timer;

    if (loading && countdownRef.current !== null) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            clearInterval(timer);
            return null;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [loading]);
  return (
 <>
    <SubHead />
    <SideMenu />
    <div className=" bg-[#faf9f6] mx-auto"
          style={{ minHeight: "calc(100vh - 61px)", width: "", paddingLeft: "75px" }}>
    <main className="max-w-[] col-lg-11 mx-auto p-2">
    <div className="text-left  my-2">
            <h1 className="hrHead " style={{ paddingLeft: "30px" }}>
            Design Your Own Images
            </h1>
          </div>

   
      <section className="flex items-center gap-2 px-6 py-6">
      
        <input
          type="text"
          className={`${styles.prompt} outline-none py-2 px-6 rounded-3xl text-sm`}
          placeholder="a woman walking her dog, a ballerina dancing, a dog with glasses, etc"
          defaultValue="a dog playing with a ball"
          ref={promptRef}
        />
      </section>

      <section className="d-flex justify-between">
        {/* LEFT */}
        <div className="flex flex-col gap-6 px-6 py-6">
          <button
            disabled={loading}
            onClick={handleGenerateImage}
            className={`${styles.generateButton}`}
          >
            {loading ? `Generating, please wait upto ${countdown} sec` : "Generate"}
          </button>

          {renderedImages.length === 0 && (
            <div className={`${styles.imageWrapper}`}>
              Image will show up here
            </div>
          )}

{renderedImages.map((image) => {
  return (
    <div key={image.url} className={styles.imageContainer}>
      <img
        src={image.url}
        alt="Generated"
        className={styles.image}
      />
      <button
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            padding: "5px 15px",
            borderRadius: "50px",
            width:"100%",
            marginTop:"20px",
            cursor:"pointer"
          }}
        onClick={() => downloadImage(image.url)}
      >
        {imgloading ?<><WaveCircle />Download</>:<><span>Download</span><img src="./downsvg.svg" style={{marginLeft:"10px"}} /></>}
      </button>
    </div>
  );
})}
        </div>

        {/* RIGHT */}
        <div className={`${styles.otherOptions}`}>
          <h2 className={styles.optionTitle}>Other Options</h2>

          {OPTIONS.map((option) => {
            return (
              <Option
                key={option.title}
                title={option.title}
                values={option.values}
                onAppend={appendPrompt}
              />
            );
          })}
        </div>
      </section>
    </main>
    </div>
 
 </>
  );
}
