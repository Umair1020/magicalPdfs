import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SubHead from "../../components/Header/SubHead";
import { baseurl } from "../../utils/BaseUrl";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import SideMenu from "../../components/sidebar/SideBar";
import "./Editor.css";
import WaveCircle from "../OcrPdf/Loader";

const EditorTool = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [userQuestion, setUserQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    // Extract plain text from the editor state and update userQuestion
    const plainText = newEditorState.getCurrentContent().getPlainText();
    setUserQuestion(plainText);
  };


  let click;
  const handleButtonClick = (text) => {
    console.log()

    click = `${userQuestion} "${text}"`
    sendGptText(); // Send the concatenated text immediately when a button is clicked
  };
  const sendGptText = async () => {
    try {
      setIsLoading(true); // Set isLoading to true before making the API call
      const { data } = await axios.post(`${baseurl}/api/pdf/textanalyze`, { userQuestion: click });
      setAnswer(data.refinedResponse)
      setShow(true)
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false)
    }
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 770 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const buttons = [
    { label: "Correct para", icon: "./correct.svg" },
    { label: "Write Blogs", icon: "./blogs.svg" },
    { label: "Tone", icon: "./briefcase.svg", isDropdown: true, options: [{ label: "Friendly" }, { label: " Formal" }, { label: "Informal" }, { label: " Funny Tone" }, { label: "Respectful" }, { label: " Surprised" }] },
    { label: "Product Description", icon: "./desc.svg" },
    { label: "Key Points", icon: "./points.svg" },
    { label: "Ideas", icon: "./idea.svg" },
    { label: "Translate", icon: "./translate.svg", isDropdown: true, options: [{ label: "German " }, { label: "French " }, , { label: "Spanish " }, , { label: "Arabic " }] },

    // Add more buttons as needed
  ];
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };
  const renderButtons = () => {
    return buttons.map((button, index) => {
      const { label, icon, isDropdown, options } = button;

      if (isDropdown && options && options.length > 0) {
        return (
          <div key={index} className="btn-group button1">
            <button
              type="button"
              style={{ background: "none", display: "flex", alignItems: "center" }}
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="buttonText">{label}</span>
              <img className="arrow" src={icon} alt={label} />
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <button
                    className="dropdown-item"
                    onClick={() => handleButtonClick(`${label}: ${option.label}`)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      return (
        <button key={index} className="button1" onClick={() => handleButtonClick(label)}>
          <span className="buttonText">{label}</span>
          <img className="arrow" src={icon} alt={label} />
        </button>
      );
    });
  };
  return (
    <>
      <Desktop>
        <SubHead />
        <SideMenu />
        <div
          className=" bg-[#faf9f6] mx-auto"
          style={{ minHeight: "calc(100vh - 61px)", width: "", paddingLeft: "75px" }}
        >
          <div className="max-w-[] mx-auto p-2 col-lg-11 " >
            <div className="contain1 ">
              {/* Buttons */}
              <button className="buttonMain" onClick={() => handleButtonClick("Correct the sentance if there is any gramatically or spelling mistake")}>
                <span className="buttonText">Correct para</span>
                <img className="arrow" src="./correct.svg" alt="Correct para" />
              </button>
              <button className="button1" onClick={() => handleButtonClick(" Write Blogs ")}>
                <span className="buttonText">Write Blogs</span>
                <img className="arrow" src="./blogs.svg" alt="Write Blogs" />
              </button>
              <button className="btn-group button1">
                <button
                  type="button"
                  style={{ background: "none", display: "flex", alignItems: "center" }}
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="buttonText">Tone</span>
                  <img className="arrow" src="./briefcase.svg" alt="Tone" />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" style={{ overflow: "hidden" }}>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in Friendly Tone ")}>
                      Friendly
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in  Formal Tone ")}>
                      Formal
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in  Informal Tone")}>
                      Informal
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in Funny Tone ")}>
                      Funny
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in  Respectful Tone ")}>
                      Respectful
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("response in  Surprised Tone ")}>
                      Surprised
                    </button>
                  </li>
                </ul>
              </button>
              <button className="button1" onClick={() => handleButtonClick(" Product Description ")}>
                <span className="buttonText">Product Description</span>
                <img className="arrow" src="./desc.svg" alt="Product Description" />
              </button>
              <button className="button1" onClick={() => handleButtonClick(" Key Points ")}>
                <span className="buttonText">Key Points</span>
                <img className="arrow" src="./points.svg" alt="Key Points" />
              </button>
              <button className="button1" onClick={() => handleButtonClick(" Ideas ")}>
                <span className="buttonText">Ideas</span>
                <img className="arrow" src="./idea.svg" alt="Ideas" />
              </button>
              <button className="btn-group button1">
                <button
                  type="button"
                  style={{ background: "none", display: "flex", alignItems: "center" }}
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="buttonText">Translate</span>
                  <img className="arrow" src="./translate.svg" alt="Translate" />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("Translate into German ")}>
                      German
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("Translate into French ")}>
                      French
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("Translate into Spanish ")}>
                      Spanish
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleButtonClick("Translate into Arabic ")}>
                      Arabic
                    </button>
                  </li>
                </ul>
              </button>
            </div>
            <div className="contain">
              {/* Text Editor */}
              <Editor
                editorState={editorState}
                toolbarClassName="toolbar"
                wrapperClassName="wrapperClassName"
                editorClassName="customecss"
                onEditorStateChange={onEditorStateChange}
              />
            </div>
            {
              isLoading && <div style={{ marginTop: "20px" }}>
                <WaveCircle />
              </div>
            }
            {
              show && <div className="answerArea">
                {answer}
              </div>
            }
          </div>
        </div>
      </Desktop>
      <Mobile>
        <SubHead />
        <div className="w-25">
          <SideMenu />
        </div>
        <div className="bg-[#faf9f6] mx-auto w-75" style={{ minHeight: "calc(100vh - 61px)", width: "", paddingLeft: "75px" }}>
          <div className="max-w-[] mx-auto p-2 col-lg-11" style={{ paddingLeft: "75px" }}>
            <div className="contain1">
              {/* Buttons */}
              {chunkArray(renderButtons(), 4).map((row, rowIndex) => (
                <div key={rowIndex} className="buttonRow">
                  {row}
                </div>
              ))}
            </div>
            <div className="contain">
              {/* Text Editor */}
              <Editor
                editorState={editorState}
                toolbarClassName="toolbar"
                wrapperClassName="wrapperClassName"
                editorClassName="customecss"
                onEditorStateChange={onEditorStateChange}
              />
            </div>
            {
              isLoading && <div style={{ marginTop: "20px" }}>
                <WaveCircle />
              </div>
            }
            {
              show && <div className="answerArea">
                {answer}
              </div>
            }
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default EditorTool;
